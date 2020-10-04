import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';



const App = () => {
  return (
  <div className='app-wrapper'>
    <Header />
    <Nav />
 <div className ='content'>
   <div>
 <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSLGKouEDI9AuwJd3Sa_zdp7e02vIgDQ5uxg&usqp=CAU' width = '400'></img>
 <div>
   ava + description
   </div>
   <div>
   My post
   <div>
     New post
   </div>
   <div>
     Post 1
   </div>
   <div>
     Post 2
   </div>
   </div>
   </div>
   </div>
   </div>
    );
}

export default App;
