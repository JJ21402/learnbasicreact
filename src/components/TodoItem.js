import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            <h3>{props.todo.title}</h3>
        </div>
    )
}
