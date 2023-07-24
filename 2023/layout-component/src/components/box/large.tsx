import { Large } from "./style";

export default function LargeBox() {
  return (
    <Large>
      <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
        <h4>Large</h4>
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
        <span>3x2</span>
      </div>
    </Large>
  );
}
