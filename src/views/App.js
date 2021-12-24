import logo from './logo.svg';
import './App.scss';
import {MyComponent, MyComponent2} from "./example/MyComponent";
import {Form} from "./example/Form";
import ListTodo from "./Todos/ListTodo";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import {
    BrowserRouter ,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav/>
                    <img src={logo} className="App-logo" alt="logo"/>

                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/todo">
                            <ListTodo/>
                        </Route>
                        <Route path="/about">
                            <Form/>
                        </Route>
                    </Switch>

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
                <ToastContainer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
