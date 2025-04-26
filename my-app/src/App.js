import './App.css';
import ChoosePlayers from './Components/ChoosePlayers';
import{createBrowserRouter, RouterProvider} from 'react-router-dom'



function App() {

  return (
    <div className="App">
      <ChoosePlayers></ChoosePlayers>
    </div>
  );
}

export default App;
