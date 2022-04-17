import { useNavigate } from "react-router-dom"


export const Home = ()=>{
    const navigate = useNavigate();

    return (
        <div>
        <button onClick={navigate()}>Add Teacher</button>
           <div>
           <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Image</th>
                        <th>No.of classes</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
           </div>
        </div>
    )
}