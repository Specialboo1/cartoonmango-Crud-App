import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
export default function Users()
{
    const [data,setdata] = useState([])
    const [loading,setloading] = useState(true);
    useEffect(() => {
        async function fetchData(){
        try {
           let apidata = await axios.get("https://jsonplaceholder.typicode.com/posts");
           setdata([...apidata.data]); 
           setloading(false);         
        } catch (error) {
            console.log(error);
            setloading(false); 
        }        
    }; fetchData();}, [])

    let handledelete = async (id) => {
        let confirm = window.confirm("Are you sure ?");
    if (confirm)
    {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let dataindex = data.findIndex(obj => obj.id === id);
        data.splice(dataindex,1);
        setdata([...data]);        
    } catch(error)
    {
        console.log(error);
    }
    }
}

    return(
        <>
        <Link to="/createuser" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-1 mt-2">CreateUser</Link>
       
        <div class="card-body">
            <div class="table-responsive">
            {
                loading ? <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" className="img-responsive" alt="Oops" style={{maxHeight:"250px"}}/> :
                <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                             <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         data.map((obj) =>{
                        
                             return(
                                <tr>
                                    <td class="align-middle">{obj.id}</td>
                                    <td class="align-middle">{obj.title}</td>
                                    <td class="align-middle">{obj.body}</td>
                                    
                                    <td class="align-middle">
                                       <Link to={`/user/edit/${obj.id}`} className="btn btn-sm btn-primary m-2">Edit</Link>
                                       <button onClick={()=>{handledelete(obj.id)}} className="btn btn-sm btn-danger ">Delete</button>
                                   </td>
                                 </tr>)
                         } )                                
                       }     
                    </tbody>
                </table>
                    }
            </div>
        </div>
    </>
    )
}