import { Medium } from "./style";

export default function MediumBox() {
  return (
    <Medium>
      <h6>Medium</h6>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.75rem",
        }}
      >
        <span>2x1</span>
      </div>
    </Medium>
  );
}
