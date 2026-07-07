
const LandingPage = ({ setShowLanding }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>
        🍔 Food Menu App
      </h1>

      <p>
        Welcome to the food ordering system
      </p>

      <button
        onClick={() => setShowLanding(false)}
        style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          background: "orange",
          color: "white",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Enter App
      </button>
    </div>
  );
};

export default LandingPage;
