import './App.css';
import Navbar from './components/Navbar';
import TodoContainer from './components/TodoContainer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
import React from "react";

const App = () => {
    return (
        <div className="App">
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<TodoContainer/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotMatch/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
