import { FormEvent, useCallback, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "./App.css";
import "./style.css";
import { ColDef, ICellRendererParams } from "ag-grid-enterprise";

type ButtonProps = {
  buttonLabel: string;
  handleClick?: () => void;
};

function Button({ buttonLabel, handleClick }: ButtonProps) {
  return <button onClick={handleClick}>{buttonLabel}</button>;
}

function App() {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData] = useState([
    { id: 1, make: "Toyota", model: "Celica", price: 35000 },
    { id: 2, make: "Ford", model: "Mondeo", price: 32000 },
    { id: 3, make: "Porsche", model: "Boxter", price: 72000 },
  ]);
  const [columnDefs] = useState<ColDef[]>([
    {
      field: "id",
      sortable: true,
      checkboxSelection: true, // Row Checkbox
      headerCheckboxSelection: true, // Header Checkbox
      lockPosition: "left", // Column 이동 금지, [boolean, 'left', 'right']
    },
    { field: "make", sortable: true, resizable: true },
    { field: "model", sortable: true },
    { field: "price", sortable: true },
    {
      field: "value",
      cellRenderer: (params: ICellRendererParams) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Button
              buttonLabel="Actions 1"
              handleClick={() => alert(`actions ${params.data.id}`)}
            />
            <Button
              buttonLabel="Actions 2"
              handleClick={() => alert(`actions ${params.data.id}`)}
            />
          </div>
        );
      },
      lockPosition: "right", // Column 이동 금지, [boolean, 'left', 'right']
    },
  ]);

  const handleExportExcel = () => {
    gridRef.current?.api.exportDataAsExcel({
      columnKeys: ["id", "make", "model", "price"], // Excel Export column key 지정
    });
  };

  const handleExportSelectedExcel = () => {
    gridRef.current?.api.exportDataAsExcel({
      onlySelected: true, // 선택된 Row만 Export
      columnKeys: ["id", "make", "model", "price"], // Excel Export column key 지정
    });
  };

  const onFilterTextBoxChanged = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;
      gridRef.current?.api.setQuickFilter(e.target.value);
    },
    []
  );

  const handleSize = useCallback(() => {
    gridRef.current?.api.sizeColumnsToFit({
      defaultMinWidth: 200, // Grid Size 조절 시 default min width
      columnLimits: [{ key: "make", minWidth: 400 }], // Grid Size 조절 시 제외할 Column
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gap: "0.5rem",
        padding: "2rem",
        gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
        gridTemplateRows: "repeat(8, minmax(0, 1fr))",
      }}
    >
      <div
        className="ag-theme-alpine"
        style={{
          color: "#fefefe",
          fontSize: "1rem",
          gridColumn: "span 8",
          gridRow: "span 4",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>ag theme alpine</span>
          <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            onInput={onFilterTextBoxChanged}
          />
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Button
              handleClick={handleExportExcel}
              buttonLabel="Export to Excel"
            />
            <Button
              handleClick={handleExportSelectedExcel}
              buttonLabel="Export Selected to Excel"
            />
          </div>
        </div>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          enableRangeSelection={true} // 범위 선택
          enableRangeHandle={true} // 범위 선택 Handling
          onFirstDataRendered={handleSize}
          // onGridReady={(event) => event.api.sizeColumnsToFit()}
          onGridSizeChanged={handleSize} // Grid Size Change Handling
          rowSelection="multiple" // Row 다중 선택
        />
      </div>
      {/* <div
        className="ag-theme-alpine-dark"
        style={{
          color: "#fefefe",
          fontSize: "1rem",
          gridColumn: "span 4",
          gridRow: "span 2",
          padding: "1rem",
        }}
      >
        <span>ag theme alpine dark</span>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          enableRangeSelection={true}
        />
      </div>
      <div
        className="ag-theme-balham"
        style={{
          color: "#fefefe",
          fontSize: "1rem",
          gridColumn: "span 4",
          gridRow: "span 2",
          padding: "1rem",
        }}
      >
        <span>ag theme balham</span>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          enableRangeSelection={true}
        />
      </div>
      <div
        className="ag-theme-balham-dark"
        style={{
          color: "#fefefe",
          fontSize: "1rem",
          gridColumn: "span 4",
          gridRow: "span 2",
          padding: "1rem",
        }}
      >
        <span>ag theme balham dark</span>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          enableRangeSelection={true}
        />
      </div>
      <div
        className="ag-theme-material"
        style={{
          color: "#fefefe",
          fontSize: "1rem",
          gridColumn: "span 4",
          gridRow: "span 2",
          padding: "1rem",
        }}
      >
        <span>ag theme material</span>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          enableRangeSelection={true}
        />
      </div> */}
    </div>
  );
}

export default App;
