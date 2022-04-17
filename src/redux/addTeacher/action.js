
export const TEACHER_LOADING = "TEACHER_LOADING";
export const TEACHER_SUCCESS = "TEACHER_SUCCESS";
export const TEACHER_FAILURE = "TEACHER_FAILURE";

export const teacherLoading=()=>({
    type:TEACHER_LOADING,
});

export const teacherSuccess = (payload)=>({
    type:TEACHER_SUCCESS,
    payload
});

export const teacherFailure = ()=>({
    type:TEACHER_FAILURE,
})

export const addTeacher = ({name, gender, age, image})=>(dispatch)=>{
    dispatch(teacherLoading())
        fetch(`https://the-final-countdown-b.herokuapp.com/add-teacher`,{
          method:"post",
          body:JSON.stringify({
              "name":name,
              "age":age,
              "gender":gender,
              "image":image
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>dispatch(teacherSuccess({name,age, gender,image})))
        .catch(error=>dispatch(teacherFailure()))
}