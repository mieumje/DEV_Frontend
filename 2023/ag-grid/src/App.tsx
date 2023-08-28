import { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "./App.css";
import "./style.css";
import { ICellRendererParams } from "ag-grid-enterprise";

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

  const [columnDefs] = useState([
    { field: "id" },
    { field: "make" },
    { field: "model" },
    { field: "price" },
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
    },
  ]);

  const handleExportExcel = () => {
    gridRef.current?.api.exportDataAsExcel();
  };

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
          gridColumn: "span 4",
          gridRow: "span 2",
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
          <Button
            handleClick={handleExportExcel}
            buttonLabel="Export to Excel"
          />
        </div>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          enableRangeSelection={true}
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
