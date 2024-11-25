
import './App.css'

function App() {


  let handleSubmit=(e)=>{
    e.preventDefault()
    let name = e.target.name.value
    let email=e.target.email.value
    console.log(name,email)

    let data={
      name,email
    }

    // Sending the object to the server
fetch('http://localhost:5000/user', {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json' // Set the content type to JSON
  },
  body: JSON.stringify(data) // Convert the object to a JSON string
})
  .then(res=>res.json())
  .then(data => {
    console.log(data);
    if (data.insertedId) {
      alert("Data successfully added");
       e.target.reset()
    }
  })

  }

  return (
    <>
      
      <h1>Simple Crud</h1>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add User" />

      </form>
      
      
    </>
  )
}

export default App
