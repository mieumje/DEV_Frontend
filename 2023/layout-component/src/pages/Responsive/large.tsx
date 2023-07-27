import { Large } from "./style";

export default function LargeBox() {
  return (
    <Large>
      <h6>Large</h6>
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
        <span>4x1</span>
      </div>
    </Large>
  );
}
