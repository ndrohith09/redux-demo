import logo from './logo.svg';
import { Provider } from "react-redux";
import './App.css';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer />
      <CakeContainer />

      <hr />

      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
