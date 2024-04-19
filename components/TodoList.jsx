import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {

    const {todoList} = props
    
  return (
        <ul className='main'>
            {todoList.map((todos, todoIndex) => {
                return (
                    <TodoCard {...props} index={todoIndex} key={todoIndex}>
                        <p>
                            {todos}
                        </p>
                    </TodoCard>
                )
            })}
        </ul>

  )
}
