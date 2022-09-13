import logo from './logo.svg';
import './App.css';
import Name from "./name.js";
import Button from "./button.js";
import Form from "./Form";
import Lista from './Lista';

function App() {

  const meusItens = ['React', 'JavaScript', 'Java', 'GoLang']
  const meusItens2 = []
  const Countries = ['Japan', 'China', 'EUA']
  const Fruits = ['Lemon', 'Orange', 'Strawberry']

  return (
    <div className="App">
      <Name name='Matheus' surname='Albuquerque'/>
      <Button name="Hamster"/>
      
      <Name name="Letícia" surname="Albuquerque"/>
      
      <Button name="Clique"/>
      <Form />
      <Lista itens={meusItens}/>
      <Lista itens={meusItens2}/>
      <Lista itens={Countries}/>
      <Lista itens={Fruits}/>
    </div>
  );
}

export default App;
