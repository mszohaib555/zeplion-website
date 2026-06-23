export function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Zeplion"
      loading="lazy"
      style={{
        height: "40px",
        width: "auto",
        objectFit: "contain",
        display: "block",
        maxWidth: "160px",
      }}
    />
  );
}
