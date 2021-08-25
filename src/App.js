import logo from './logo.svg';
import './App.css';
import Head from './Component/Head';
import Title from './Component/Title';
import ToDoList from './Component/ToDoList';
import ToDoItem from './Component/ToDoItem';
import NewToDo from './Component/NewToDo';
import EditToDo from './Component/EditToDo';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


function App() {
  return (
   
      <BrowserRouter>
       <div className="App">
      <Head/>
      <Title/>
      <ToDoList/>
      <NewToDo /> 
        </div>
        <Switch>
        <Route path='/:id'><EditToDo/></Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
