import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Меня зовут Сергей</p>
        <span>О себе: Буду краток. Являюсь java-backend разработчиком на протяжении 5 лет</span>
        <span>В Frontend мало чего понимаю, знаком только с основами. На днях пригляделся к react.</span>
        <span>Хотелось бы наконец-то научиться frontend разработке. На данный момент больше для себя.</span>
      </header>
    </div>
  );
}

export default App;
