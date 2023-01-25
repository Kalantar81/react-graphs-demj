import { Route, Routes } from "react-router-dom";
import { DoubleGraphView } from "../../pages/DoubleGraphView";
import { GraphsListView } from "../../pages/GraphsListView";


export function GraphContainer() {
  return (
    <>
      <div className="graph-container">
        <Routes>
          <Route path="/" element={<DoubleGraphView />} />
          <Route path="/graphs" element={<GraphsListView />} />
        </Routes>
      </div>
    </>
  );
}
