import "./App.css";

function App() {
  return (
    <>
      <div id="form">
        <h1>Registration Form</h1>
        <h4>Fill the below details</h4>
        <form
          onSubmit={() => {
            console.log(document.getElementById("fname"));
            console.log(document.getElementById("lname"));
            console.log(document.getElementById("mail"));
            console.log(document.getElementById("phno"));
            console.log(document.getElementById("dob"));
          }}
        >
          <label>First Name: &nbsp;</label>
          <br></br>
          <input type="text" id="fname" name="fname" placeholder="FirstName" />
          <label>Last Name: &nbsp;</label>
          <br></br>
          <input type="text" id="lname" name="lname" placeholder="LastName" />
          <label>Email: &nbsp;</label>
          <br></br>
          <input type="email" id="mail" name="mail" placeholder="E-mail" />
          <label>Conact Number: &nbsp;</label>
          <br></br>
          <input type="text" id="phno" name="phno" placeholder="Phone number" />
          <label>Date Of Birth: &nbsp;</label>
          <br></br>
          <input type="date" id="dob" name="dob" placeholder="Date of Birth" />
          <input type="submit" id="submit" placeholder="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
