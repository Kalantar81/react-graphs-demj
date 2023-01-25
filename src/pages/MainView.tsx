import { ViewsContainer } from '../components/containers/ViewsContainer';
import { screenWidth } from '../styles/sizes';
import '../styles/stylesheet.css'
import { Header } from './Header';
export function MainView() {
    return (
        <div 
            className="main-view"
            style={{width: screenWidth}}>
                <Header />
                <ViewsContainer />
            </div>
    )
}