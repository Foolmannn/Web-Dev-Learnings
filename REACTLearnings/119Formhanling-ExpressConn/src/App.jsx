import { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// submitHandler works on the typescript only 
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
