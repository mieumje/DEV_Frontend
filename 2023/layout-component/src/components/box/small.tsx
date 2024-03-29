import { Small } from "./style";

export default function SmallBox() {
  return (
    <Small>
      <div style={{ width: "100%", display: "flex", justifyContent: "start" }}>
        <h4>Small</h4>
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
        <span>1x2</span>
      </div>
    </Small>
  );
}
