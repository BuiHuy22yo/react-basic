import logo from './logo.svg';
import './App.scss';
import { MyComponent, MyComponent2 } from "./example/MyComponent";
import {Form} from "./example/Form";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/*<MyComponent></MyComponent>*/}
        <ListTodo/>
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Hoc react co ban*/}
        {/*</a>*/}
      </header>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
    </div>
  );
}

export default App;
