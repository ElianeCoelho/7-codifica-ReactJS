import React, { useState } from "react";
import Counter from "./components/Counter";
import BackgroundChanger from "./components/BackgroundChanger";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";
import NameFilter from "./components/NameFilter";
import RegistrationForm from "./assets/RegistrationForm";
import DataFetcher from "./components/DataFetcher";
import ImageGallery from "./components/ImageGallery";
import CountdownTimer from "./components/CountdownTimer";
import Tabs from "./components/Tabs";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Counter":
        return <Counter />;
      case "BackgroundChanger":
        return <BackgroundChanger />;
      case "ToDoList":
        return <ToDoList />;
      case "Timer":
        return <Timer />;
      case "NameFilter":
        return <NameFilter />;
      case "RegistrationForm":
        return <RegistrationForm />;
      case "DataFetcher":
        return <DataFetcher />;
      case "ImageGallery":
        return <ImageGallery />;
      case "CountdownTimer":
        return <CountdownTimer />;
      case "Tabs":
        return <Tabs />;
      default:
        return <h1>Bem-vindo ao 7-Codifica ReactJS!</h1>;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => setActiveComponent("Home")}>Início</li>
          <li onClick={() => setActiveComponent("Counter")}>Contador</li>
          <li onClick={() => setActiveComponent("BackgroundChanger")}>Alterar Cor</li>
          <li onClick={() => setActiveComponent("ToDoList")}>Lista de Tarefas</li>
          <li onClick={() => setActiveComponent("Timer")}>Temporizador</li>
          <li onClick={() => setActiveComponent("NameFilter")}>Filtro de Lista</li>
          <li onClick={() => setActiveComponent("RegistrationForm")}>Formulário</li>
          <li onClick={() => setActiveComponent("DataFetcher")}>Requisição de Dados</li>
          <li onClick={() => setActiveComponent("ImageGallery")}>Galeria</li>
          <li onClick={() => setActiveComponent("CountdownTimer")}>Timer</li>
          <li onClick={() => setActiveComponent("Tabs")}>Tabs</li>
        </ul>
      </nav>
      <main>{renderComponent()}</main>
    </div>
  );
};

export default App;
