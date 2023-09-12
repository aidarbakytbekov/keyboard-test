import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [visible] = useState(false);
  const [height, setHeight] = useState<string>('90vh');

  // useEffect(() => {
  //     window.addEventListener("resize", handleVisible);
  //     window.addEventListener("orientationchange", handleVisible);
  //     window.addEventListener("focusin", handleVisible);
  //     window.addEventListener("focusout", handleHide);

  //   return () => {
  //       window.addEventListener("resize", handleVisible);
  //       window.addEventListener("orientationchange", handleVisible);
  //       window.addEventListener("focusin", handleVisible);
  //       window.addEventListener("focusout", handleHide);
  //   };
  // }, []);

  useEffect(() => {
      if(window.visualViewport) {
        const resize = () => {
          setHeight(window.visualViewport?.height.toString() + 'px');
        }
        window.visualViewport?.addEventListener('resize', resize)
        return () => {
          window.visualViewport?.addEventListener('resize', resize)
        }
      }
  }, []);
  return (
    <>
      <div
        className="container"
        style={{
          width: "100%",
          justifyContent: "space-between",
          height: `${height}`,
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "10px",
        }}
      >
        <div>
          <div style={{ marginBottom: "10px" }}>
            <input
              style={{
                width: "100%",
                padding: "8px 5px",
                marginBottom: "10px",
              }}
              type="text"
            />
            <input style={{ width: "100%", padding: "8px 5px" }} type="text" />
          </div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input style={{ width: "100%", padding: "8px 5px" }} type="text" />
            <input style={{ width: "100%", padding: "8px 5px" }} type="text" />
          </div>
          <textarea
            style={{
              width: "100%",
              resize: "none",
              height: "128px",
              padding: "8px 5px",
            }}
          />
          {JSON.stringify(visible)}
          {JSON.stringify(height)}
        </div>
        <button>Save</button>
      </div>
    </>
  );
}

export default App;
