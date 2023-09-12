import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "space-between",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: '10px'
      }}
    >
      <div>
        <div style={{marginBottom: '10px'}}>
          <input
            style={{ width: "100%", padding: "8px 5px", marginBottom: "10px" }}
            type="text"
          />
          <input style={{ width: "100%", padding: "8px 5px" }} type="text" />
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: '10px' }}>
          <input style={{ width: "100%", padding: "8px 5px" }} type="text" />
          <input style={{ width: "100%", padding: "8px 5px" }} type="text" />
        </div>
        <textarea style={{ width: "100%", resize: 'none', height: '128px', padding: "8px 5px" }}/>
      </div>
      <button>Save</button>
    </div>
  );
}

export default App;
