import React from 'react';
import './App.css';
// import Home from './components/home/Home'
// import Header from './components/layouts/Header'
import View from './components/todolist/View'

function App() {
  // const tabs = [
  //   {tab: "Home"},
  //   {tab: "About"},
  //   {tab: "Content"}
  // ]
  return (
    <div className="App">
      {/* <Header tabs={tabs}/>
      <Home/> */}
      <View/>
    </div>
  );
}

export default App;
