import { Button } from 'bootstrap';
import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { EditTodoItem } from '../Slices/ToDoSlice';
const EditToDo = () => {
    const dispatch= useDispatch()
    const params= useParams();
    const Uid=params.id
    const list = useSelector(state => state.todo.todolist)

    let  item = list.find((el)=>el.id==Uid)

    const [newDescription,setNewDescription] = useState("")
  
    const handleEdit=()=>{  
   dispatch(EditTodoItem({id:Uid,description:newDescription}))
   }
    return (
        <div>
           <Form >
               <Form.Control type="text" value={item.title} disabled></Form.Control>
             <Form.Control type="text" onChange={(e)=>setNewDescription(e.target.value)} value={item.description} ></Form.Control>
              <Button onClick={()=>handleEdit()}>Edit</Button>
               </Form> 
        </div>
    )
}

export default EditToDo
