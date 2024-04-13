import { configureStore } from '@reduxjs/toolkit';
import tareasReducer from './todoSlice';

const store = configureStore({
    reducer: {
        tareas: tareasReducer,
    },
});
export default store;