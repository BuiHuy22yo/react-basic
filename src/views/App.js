import logo from './logo.svg';
import './App.scss';
import { MyComponent, MyComponent2 } from "./example/MyComponent";
import {Form} from "./example/Form";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/*<MyComponent></MyComponent>*/}
        <Form></Form>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Hoc react co ban*/}
        {/*</a>*/}
      </header>

      {/* <MyComponent2></MyComponent2> */}
    </div>
  );
}

export default App;
