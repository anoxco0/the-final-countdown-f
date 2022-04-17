import { useState } from "react"
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom"
import { signup } from "../redux/signup/action";


export const Signup = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       name:"",
       email:"",
       password:""
    })
    const inputHandle = (e)=>{
         const {value, id} = e.target;
         setForm({...form, [id]:value});
    }

    const handleSubmit = ()=>{
        dispatch(signup({ name:form.name,email:form.email, password:form.password}))
    }
    return (
        <div className="login">
            <h1>Signup</h1>
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="name" placeholder="name" />
            <input onChange={(e)=>{inputHandle(e)}} type="text" name="" id="email" placeholder="email"/>
            <input onChange={(e)=>{inputHandle(e)}} type="password" name="" id="password" placeholder="Password"/>
            <button onClick={()=>{handleSubmit()}}>Signup</button>
            <h3 onClick={()=>navigate("/login")} style={{color:'blue', cursor:"pointer", fontWeight:"400", fontSize:"14px"}}><i>already have new account</i></h3>
        </div>
    )
}