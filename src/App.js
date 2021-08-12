import { Switch , Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
