import { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// submitHandler works on the typescript only 
import { set, useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors ,isSubmitting},
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);

    })
  }
  //This simulates the network delay . As is reallife we need to account for the delay as the user shouldnot give the multiple submits 


  // function to do actin when the submit is clicked here we are just showing the data on the log
  const onSubmit = async (data) =>{ 
    await delay(2); // adding delay 
    console.log(data)
  if(data.username!=="Suman"){
    setError("myform",{message:"Your credentials are not valid"})
  }
  if(data.username == "Subham"){
    setError("blocked",{message: "Sorry ! this user is blocked"})
  }
  
  }
  return (
    <>
    {isSubmitting && <div>Loading....</div>} 
    {/* Message when the isSubmitting is true  */}
      <div className="container">
        <form  onSubmit={handleSubmit(onSubmit)}>
          {/* <input type="text" name="username"/> */}
          {/* <input type="password" name="password"/> */}
          <label htmlFor="">Name</label>
          <input {...register("username",{required:true, minLength: 6 , maxLength: 10 })} type="text" />
          {errors.username && <span className="errormessage">There is some errors</span>} 
          {/* this is how you show the generic message */}
          <br />
          <label htmlFor="">Password</label>
          <input {...register("password",{required: {value: true, message:"This field is required "} , minLength:{value:6 , message: "Min length is 6"} ,maxLength:{value:15, message: "Max length is 15"}
        }) } type="password" />
          {errors.password && <span>{errors.password.message}</span>}
          {/* This is how we give the custom message for each kind of issue */}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" /> 
          {/* using the issubmitting value from the library to disable the submit when the data is being submitted  */}

               {errors.myform && <span>{errors.myform.message}</span>}
               {errors.blocked && <span>{errors.blocked.message}</span>}
        </form>
      </div>
    </>
  );
}

export default App;
