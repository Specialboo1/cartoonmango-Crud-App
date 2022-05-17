import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Createuser() {
  
  const[loading,setloading] = useState(false)
  const history = useNavigate();

  const formik = useFormik({
    initialValues :{
      id: '',
      title : '',
      body : '',
    },
  validate : (values) => 
      {
        const errors = {};
        if(!values.id){
            errors.id = "Required";
          }
          else if(isNaN(values.id))
          {
            errors.id = "Enter Numerical Data";
          }
       if (!values.title)
       {
         errors.title = "Required";
       }
       else if (!isNaN(values.title))
       {
         errors.title = "Enter valid data";
       }
       if (!values.body)
       {
         errors.body = "Required";
       }
       else if (!isNaN(values.body))
       {
         errors.body = "Enter valid data";
       }
      
        return errors;
      },
    
    onSubmit : async (values) => {
      let id = values.id;
      let title = values.title;
      let body = values.body;
      try {
        await axios.post("https://jsonplaceholder.typicode.com/posts",{id,title,body})
       setloading(true);
      } catch (error) {
        setloading(false);
        console.log(error);
      }
        history("/user")
    }
  })

 return (
   <>
<form onSubmit={formik.handleSubmit}>
  <div className='row'>
  <div class="col-auto mt-2">
    <label >Id</label>
    <input type='text' name='id' className='form-control' onChange={formik.handleChange} value={formik.values.id} />
  {
   formik.errors.id ? <span style={{color:'red'}}>{formik.errors.id}</span> : null
  }
  </div>
  <div class="col-auto mt-2">
    <label>Title</label>
    <input type='text' name ='title' className='form-control' onChange={formik.handleChange} value={formik.values.title} />
  {
    formik.errors.title ? <span style={{color:'red'}}>{formik.errors.title}</span> : null
  }
  </div>
  <div class="col-auto mt-2">
    <label>Body</label>
    <input type='text' name ='body' className='form-control' onChange={formik.handleChange} value={formik.values.body} />
  {
    formik.errors.body ? <span style={{color:'red'}}>{formik.errors.body}</span> : null
  }
  </div>
  </div>
  <div class="row mt-3" >
  <input type="submit" class="mx-auto btn-primary" disabled={loading} value="Submit"/>
  </div>
  </form> 
  </>
    )
}

export default Createuser