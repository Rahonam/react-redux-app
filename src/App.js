import './App.css';
import Cakecontainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Hookscakecontainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux</h1>
      </header>
      <Provider store={store}>
        <Cakecontainer></Cakecontainer>
        <Hookscakecontainer></Hookscakecontainer>
        <IceCreamContainer></IceCreamContainer>
      </Provider>
    </div>
  );
}

export default App;
