import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"


export const Home = ()=>{
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState([]);
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState(0);
    const array = new Array(page).fill(0);
    useEffect(()=>{
        axios.get('https://the-final-countdown-b.herokuapp.com/add-teacher?page=1&size=5')
        .then(res=>{
            setTeacher(res.data.users);
            setPage(res.data.total)
        })
        .catch(error=>console.log(error));
    },[]);
    const filter= ()=>{
        axios.get(`https://the-final-countdown-b.herokuapp.com/add-teacher?page=${page}&size=5&sort=${sort}`)
        .then(res=>setTeacher(res.data.users))
        .catch(error=>console.log(error));
    }
    return (
        <div>
        <button onClick={()=>{navigate('/add-teacher')}}>Add Teacher</button>
        <div>
            <button >Male</button>
            <button >Female</button>
            <button onClick={()=>{setSort(1);filter()}}>asc age</button>
            <button onClick={()=>{setSort(-1);filter("dec")}}>des age</button>
        </div>
        <input  type="text" name="" id="" placeholder="Search by name" />
        <div>
            {array.map((e,i)=>
                <div key={i}>
                <button onClick={()=>{setPage(i+1);filter()}} >{i+1}</button>
                </div>)
            }
        </div>
           <div>
           <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                      {teacher.map((el)=>
                      <tr onClick={()=>{navigate(`/teacher/${el._id}`)}} key={el._id}>
                          <td >{el._id}</td>
                          <td>{el.name}</td>
                          <td>{el.gender} </td>
                          <td>{el.age}</td>
                          <td><img height={'100'} src={el.image} alt="" /></td>
                      </tr>)}
                </tbody>
            </table>
           </div>
        </div>
    )
}