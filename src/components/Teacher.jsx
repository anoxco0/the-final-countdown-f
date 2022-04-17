import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


export const Teacher = ()=>{
    const {id} = useParams()
    const navigate = useNavigate();
    const [classes, setClass] = useState([]);
    useEffect(()=>{
        axios.get(`https://the-final-countdown-b.herokuapp.com/classes/${id}`)
        .then(res=>setClass(res.data))
        .catch(error=>console.log(error));
    },[]);
    return (
        <div>
        <button onClick={()=>{navigate('/')}}>Home</button>
        <button onClick={()=>{navigate(`/class/${id}`)}}>add Class</button>
           <div>
           <table>
                <thead>
                    <tr>
                        <th>grade</th>
                        <th>section</th>
                        <th>subject</th>
                    </tr>
                </thead>
                <tbody>
                      {classes.map((el)=>
                      <tr key={el._id}>
                          <td>{el.grade}</td>
                          <td>{el.section}</td>
                          <td>{el.subject} </td>
                      </tr>)}
                </tbody>
            </table>
           </div>
        </div>
    )
}