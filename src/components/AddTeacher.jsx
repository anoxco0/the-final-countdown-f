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
        age:0,
       image:""
    })
    console.log(form)
    const inputHandle = (e)=>{
        const {value, id} = e.target;
        setForm({...form, [id]:value});
   }

   const handleSubmit = ()=>{
       dispatch(addTeacher({name:form.name, gender:form.gender, age:form.age, image:form.image}))
   }
    return (
        <div>
            <button onClick={()=>{navigate('/')}}>home</button>
            <h2>Add Teacher</h2>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="Name" />
            <select onChange={(e)=>{inputHandle(e)}} name="" id="gender">
                <option  value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input onChange={(e)=>{inputHandle(e)}} type="number" name="" id="age" placeholder="Age" />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="image" placeholder="Image" />
            <button onClick={()=>{handleSubmit()}}>Add</button>
        </div>
    )
}