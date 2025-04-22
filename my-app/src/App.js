import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';
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
