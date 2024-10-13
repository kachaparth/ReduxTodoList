import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    todos: []
}

const todoSlice = createSlice(
    {
        name: 'Todo',
        initialState,
       reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                    isEditable: false,
                }

                state.todos.push(todo)
            },

            deleteTodo: (state, action) => {
                state.todos = state.todos.filter((eachTodo) => (eachTodo.id != action.payload)
                )
            },

            updateTodo: (state,action)=>{
                state.todos.map((eachTodo)=>{
                    if(eachTodo.id == action.payload.id)
                    {
                        eachTodo.text = action.payload.text
                    }
                    return eachTodo;
                })
            }
        }
    }
)

export const  {addTodo,updateTodo,deleteTodo} = todoSlice.actions

export const todoReducer =  todoSlice.reducer;