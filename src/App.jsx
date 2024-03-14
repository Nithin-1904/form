import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div id="form">
        <h1>Registration Form</h1>
        <h4>Fill the below details</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name: &nbsp;</label>
          <br></br>
          <input {...register("fname")} id="fname" placeholder="FirstName" />

          <label>Last Name: &nbsp;</label>
          <br></br>
          <input {...register("lname")} id="lname" placeholder="LastName" />

          <label>Email: &nbsp;</label>
          <br></br>
          <input
            {...register("mail", { pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/ })}
            id="mail"
            placeholder="E-mail"
          />

          <label>Conact Number: &nbsp;</label>
          <br></br>
          <input
            {...register("phno", { valueAsNumber: true })}
            id="phno"
            placeholder="Phone number"
          />
          <label>Date Of Birth: &nbsp;</label>
          <br></br>
          <input
            {...register("dob")}
            id="dob"
            type="date"
            placeholder="ddmmyyyy"
          />
          <input type="submit" id="submit" placeholder="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
