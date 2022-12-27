import './App.css';

import Image from "./Image/weather.jpg"
import { Home, RightComponents } from './Components';

function App() {
  return (
    <div className='outerApp'>
      <div className="App" style={{ backgroundImage: `url(${Image})` }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
