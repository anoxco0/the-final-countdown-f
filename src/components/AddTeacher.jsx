import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTeacher } from "../redux/addTeacher/action";


export const AddTeacher = ()=>{
 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name:"",
       gender:"",
       age:"",
       image:""
    })
    const inputHandle = (e)=>{
        const {value, id} = e.target;
        setForm({...form, [id]:value});
   }

   const handleSubmit = ()=>{
       dispatch(addTeacher({name:form.name, gender:form.gender, age:form.age, image:form.image}))
   }

    return (
        <div>
            <h2>Add Teacher</h2>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" />
            <select onChange={(e)=>{inputHandle(e)}} name="" id="gender">
                <option  value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>
            <input onChange={(e)=>{inputHandle(e)}} type="number" name="" id="age" />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="image" />
            <button onClick={()=>{handleSubmit()}}>Add</button>
        </div>
    )
}