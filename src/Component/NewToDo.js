import React,{useState} from 'react'
import { Form,Container,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../Slices/ToDoSlice'
const NewToDo = () => {
   const dispatch= useDispatch()
    const [newItem, setNewItem] = useState({id:Math.random(),title:'',description:'',isDone:false})
  const handleAdd=()=>{
      dispatch(AddTodo(newItem))

  }
  
    return (
        <div style={{marginTop:'5rem'}}>
            <Container>
                <h2 style={{marginBottom:'5rem'}}>Add New ToDo</h2>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>ToDo Title</Form.Label>
             <Form.Control type="text" onChange={(e)=>setNewItem({...newItem,title:e.target.value})}></Form.Control>
             <Form.Label>ToDo Description</Form.Label>
             <Form.Control type="text" onChange={(e)=>setNewItem({...newItem,description:e.target.value})}></Form.Control>
           <Button onClick={()=>handleAdd()} variant='outline-info' style={{width:'250px',marginTop:'2rem'}}>ADD  </Button>
             </Form.Group>
            </Form>
            </Container>
        </div>
    )
}

export default NewToDo
