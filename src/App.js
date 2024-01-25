
import './App.css';
import Frase from './components/Frase';
import Helloworld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Lista from './components/list';
import Evento from './components/evento';
import Form from './components/form';








function App() {

  const url = 'https://avatars.githubusercontent.com/u/5342937?v=4' 


  return (
    <div className="App">
      <h1>testando eventos </h1>
    
      <Evento></Evento>
      <Form></Form>
    </div>
  );
}

export default App;
