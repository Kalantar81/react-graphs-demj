import '../styles/stylesheet.css'

import {useLayoutEffect, useRef, useState} from 'react';
import BarGraph from '../components/graphs/BarGraph';
import BarGroupGraph from '../components/graphs/BarGroupGraph';


export function DoubleGraphView() {
    const ref = useRef(document.createElement("div"));

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
      }, []);
      
    console.log('height: ', height, ' width: ', width)
    return (
        <div ref={ref} className="double-graph-view-columns">
            <BarGraph width={(width / 2)} height={(height - 10)} />
            <BarGroupGraph width={(width / 2)} height={(height - 10)} />
        </div>
    )
}