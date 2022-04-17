
export const CLASSES_LOADING = "CLASSES_LOADING";
export const CLASSES_SUCCESS = "CLASSES_SUCCESS";
export const CLASSES_FAILURE = "CLASSES_FAILURE";

export const classesLoading=()=>({
    type:CLASSES_LOADING,
});

export const classesSuccess = (payload)=>({
    type:CLASSES_SUCCESS,
    payload
});

export const classesFailure = ()=>({
    type:CLASSES_FAILURE,
})

export const addClasses = ({grade, section, subject, teacher_id})=>(dispatch)=>{
    dispatch(classesLoading())
        fetch(`https://the-final-countdown-b.herokuapp.com/classes`,{
          method:"post",
          body:JSON.stringify({
              "grade":grade,
              "section":section,
              "subject":subject,
              "teacher_id":teacher_id
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>dispatch(classesSuccess({grade, section, subject, teacher_id})))
        .catch(error=>dispatch(classesFailure()))
}

