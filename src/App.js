import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from './store';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
