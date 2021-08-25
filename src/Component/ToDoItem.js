
import React from 'react'
import {Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { DeleteTodo, DoneTodo } from '../Slices/ToDoSlice'

const ToDoItem = ({item}) => {
    const dispatch = useDispatch()
  const  handleDelete=()=>{
   dispatch(DeleteTodo({id:item.id}))
  }
  const handleDone=()=>{
      dispatch(DoneTodo({id:item.id}))
  }
    return (
        <div>
            <Card border="primary" style={{ width: '18rem', marginLeft: "1rem" }}>
       <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>{item.description}</Card.Text>
      <h6 style={{color:item.isDone?"info":"red"}}>{item.isDone?"Done":"Not Done"}</h6>
 <Button onClick={()=>handleDelete()} variant="danger">Delete</Button><br></br>
  <Button onClick={()=>handleDone()} variant="success">Toggle</Button>

  </Card.Body>
</Card> 
        </div>
    )
}

export default ToDoItem
