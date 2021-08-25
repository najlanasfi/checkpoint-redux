import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from './ToDoItem';
import {Link} from 'react-router-dom'
import { Form } from 'react-bootstrap';
const ToDoList = () => {
    const list=useSelector(state => state.todo.todolist)
  const [doneFilter,setDoneFilter]=useState(false)
  console.log(list);  
  return (
        <div>
<Form>
    <Form.Select onSelect={(e)=>setDoneFilter(e.target.value)}>
        <option value={true}>Done</option>
        <option value={false}>Not Done</option>
    </Form.Select>
</Form>

            {list.filter(el=>el.isDone==doneFilter).map(item=>(
               <Link to={`/${item.id}`} >
               <ToDoItem item={item}/>
               </Link>
                ))}
        </div>
    )
}

export default ToDoList
