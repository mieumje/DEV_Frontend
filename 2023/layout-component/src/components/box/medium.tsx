import { Medium } from "./style";

export default function MediumBox() {
  return (
    <Medium>
      <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
        <h4>Medium</h4>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>2x2</span>
      </div>
    </Medium>
  );
}
