/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Todo } from "../Item"

export const TodoList = ({ todos, onDeleteTodos, onChangeStatus }) => {
  return (
    <Droppable droppableId="todosList">
      {
        droppableCtx => (
          <ul
            ref={droppableCtx.innerRef}
            {...droppableCtx.droppableProps}
          >
          {
            todos.map((todo, index) => (
              <Draggable
                key={todo.id}
                index={index}
                draggableId={`${todo.id}`}
              >
                {
                  draggableCtx => (
                    <li
                      ref={draggableCtx.innerRef}
                      {...draggableCtx.draggableProps}
                      {...draggableCtx.dragHandleProps}
                    >
                      <Todo
                        todo={todo}
                        onDeleteTodos={onDeleteTodos}
                        onChangeStatus={onChangeStatus}
                      />
                    </li>
                  )
                }
              </Draggable>
            ))
          }
          {droppableCtx.placeholder}
          </ul>
        )
      }
    </Droppable>
  )
}
