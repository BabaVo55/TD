import { useState } from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'


function App() {
  const [todoValue, setTodoValue] = useState('')

  const [todoList, setTodoList] = useState([

 ])

 function handleAddTodos(newTodo){
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList)
 }

 function handleDeleteTodo(index){
    const newTodoList = todoList.filter((todo, todoIndex) => {
      return todoIndex!== index
    })
    setTodoList(newTodoList)
 }

 function handleEditTodo(index){
    const valueTodBeEdited = todoList[index]
    setTodoValue(valueTodBeEdited)
    handleDeleteTodo(index)
 }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
