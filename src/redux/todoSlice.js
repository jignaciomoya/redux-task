import { createSlice } from '@reduxjs/toolkit';

const tareasSlice = createSlice ({
    name: 'tareas',
    initialState: [],
    reducers : {
        addTarea: (state, action ) => {
            state.push(action.payload);
        },
        removeTarea: (state, action ) => {
            return state.filter(tarea => tarea.id !== action.payload);
        },
    },
});

export const {addTarea, removeTarea} =tareasSlice.actions;
export default tareasSlice.reducer;