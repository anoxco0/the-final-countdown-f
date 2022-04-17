import { TEACHER_FAILURE, TEACHER_LOADING, TEACHER_SUCCESS } from "./action"
const initState = {
    loading:false,
    error:false,
}

 export const addTeacherReducer = (store=initState, {type, payload})=>{
    switch(type){
        case TEACHER_LOADING:
            return {...store, loading:true};
        case TEACHER_SUCCESS:
            return {
                ...store,
                loading:false,
                error:false,
            }
        case TEACHER_FAILURE:
            return {
                ...store,
                loading:false,
                error:true,
            }
        default:
            return store;
    }
}