import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addClasses } from "../redux/addClasses/action";


export const AddClasses = ()=>{

    const {id} = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
       grade:"",
       section:"",
       subject:"",
       teacher_id:id,
    })
    const inputHandle = (e)=>{
        const {value, id} = e.target;
        setForm({...form, [id]:value});
   }

   const handleSubmit = ()=>{
    dispatch(addClasses({grade:form.grade, section:form.section, subject:form.subject, teacher_id:form.teacher_id}))
}
    return (
        <div>
            <button onClick={()=>{navigate('/')}}>home</button>
            <button onClick={()=>{navigate(`/teacher/${id}`)}}>teacher</button>
            <h2>Add classes</h2>
            <div>
            <input  onChange={(e)=>{inputHandle(e)}} type="text" name="" id="grade" placeholder="Grade" />
            <input  onChange={(e)=>{inputHandle(e)}} type="text" name="" id="section" placeholder="Section" />
            <input  onChange={(e)=>{inputHandle(e)}} type="text" name="" id="subject" placeholder="Subject" />
            <button onClick={()=>{handleSubmit()}}>save Class</button>
        </div>
        </div>
    )
}