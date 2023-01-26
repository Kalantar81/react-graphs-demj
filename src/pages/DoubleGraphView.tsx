import "../styles/stylesheet.css";

import { useLayoutEffect, useRef, useState } from "react";
import BarGraph from "../components/graphs/BarGraph";
import BarGroupGraph from "../components/graphs/BarGroupGraph";
import { BarGraphsContainer } from "../components/containers/BarGraphsContainer";

export function DoubleGraphView() {
  const ref = useRef(document.createElement("div"));

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);
  const graphWidth: number = width / 2 - 10;
  const graphHeight: number = (height - 10) * 0.7;
  return (
    <div ref={ref} className="double-graph-view-columns">
      <BarGraphsContainer>
        <BarGraph width={graphWidth} height={graphHeight} daysNumber={15} />
      </BarGraphsContainer>
      <BarGraphsContainer>
        <BarGroupGraph width={graphWidth} height={graphHeight} />
      </BarGraphsContainer>
    </div>
  );
}
