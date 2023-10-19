/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Droppable, Draggable } from "@hello-pangea/dnd";
import Todo from "../Item"

export const TodoList = ({ todos, onDeleteTodos, onChangeStatus }) => {
  return (
    <Droppable droppableId="todosList">
      {
        droppableCtx => (
          <div
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
                      <Todo
                        todo={todo}
                        onDeleteTodos={onDeleteTodos}
                        onChangeStatus={onChangeStatus}
                        ref={draggableCtx.innerRef}
                        {...draggableCtx.draggableProps}
                        {...draggableCtx.dragHandleProps}
                      />
                  )
                }
              </Draggable>
            ))
          }
          {droppableCtx.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}
