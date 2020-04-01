import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from "./components/PostForm";
import store from './store';
function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <div className="flex-container">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <h1 className="title">
              React with Redux.
            </h1>
          </div>
        </div>
      </header>
        <PostForm></PostForm>
        <hr/>
      <Posts></Posts>
    </div>
      </Provider>
  );
}

export default App;
