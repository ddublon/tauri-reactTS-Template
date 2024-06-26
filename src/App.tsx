import { useEffect } from "react";
import "./App.css";
import { lightningChart } from "@arction/lcjs";

function App() {
  useEffect(() => {
    const lc = lightningChart({ license: "insert-your-license-here" });
    const chart = lc.ChartXY({ container: "chart" });

    return () => {};
  }, []);

  return <div id="chart" style={{ width: "500px", height: "500px" }}></div>;
}

export default App;
