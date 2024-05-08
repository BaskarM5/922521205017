import HEAD from './component/headr';
import CONTENT from './component/mcontent';
import FOOT from './component/foot'
import './main.css'
function App(){
    return(
        <div className='container'>
        <HEAD />
        <CONTENT />
        <FOOT />
        </div>
    );
}
export default App; 