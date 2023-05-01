const Footer = () => {
  return (
    <div style={{ flexDirection: "column", width: "920px" }}>
      <hr />
      <h1
        className="pixelated2"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "right",
        }}
      >
        designed & developed by{" "}
        <a href="https://github.com/jackconwayiv/scorenado" rel="noreferrer" target="_blank">
          Jack Conway 2023
        </a>
      </h1>
    </div>
  );
};
export default Footer;
