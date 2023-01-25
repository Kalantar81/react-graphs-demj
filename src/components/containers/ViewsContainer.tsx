import { SideNav } from '../../pages/SideNav'
import { screenHeight } from '../../styles/sizes'
import '../../styles/stylesheet.css'
import { GraphContainer } from './GraphContainer'

export function ViewsContainer() {
    return (
        <div 
            className="views-container"
            style={{height: screenHeight - 55}}>
            <SideNav />
            <GraphContainer />
        </div>
    )
}