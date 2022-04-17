import { CLASSES_FAILURE, CLASSES_LOADING, CLASSES_SUCCESS } from "./action"
const initState = {
    loading:false,
    error:false,
}

 export const addClassesReducer = (store=initState, {type, payload})=>{
    switch(type){
        case CLASSES_LOADING:
            return {...store, loading:true};
        case CLASSES_SUCCESS:
            return {
                ...store,
                loading:false,
                error:false,
            }
        case CLASSES_FAILURE:
            return {
                ...store,
                loading:false,
                error:true,
            }
        default:
            return store;
    }
}
