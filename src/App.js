import React from 'react';
import Counter from './components/Counter';
import BackgroundChanger from './components/BackgroundChanger';

function App() {
  return (
    <div>
      <h1>Menu de Atividades</h1>
      <ul>
        <li><a href="#counter">Contador Simples</a></li>
        <li><a href="#background">Alteração de Cor de Fundo</a></li>
      </ul>
      
      <div id="counter">
        <Counter />
      </div>
      <div id="background">
        <BackgroundChanger />
      </div>
    </div>
  );
}

export default App;
