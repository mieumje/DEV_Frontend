import { Small } from "./style";

export default function SmallBox() {
  return (
    <Small>
      <h6>Small</h6>
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
        <span>1x1</span>
      </div>
    </Small>
  );
}
