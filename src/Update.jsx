import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    let data= useLoaderData()

    let handleUpdate=(e)=>{
        e.preventDefault()

        let name= e.target.name.value
        let email= e.target.email.value
        console.log(name,email)

        let updatedData={
            name,email
        }


        fetch(`http://localhost:5000/user/${data._id}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json", // Specify that the content is in JSON format
              },
              body: JSON.stringify(updatedData),
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.matchedCount > 0) {
                alert("User Updated Successfully");
            }
        })


    }

    
    return (
        <div>

            <h2>Updated User Name: {data.name}</h2>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={data.name} /> <br />
                <input type="email" name="email" id=""defaultValue={data.email} /> <br />

                <input type="submit" value="Update User" />
            </form>
            
        </div>
    );
};

export default Update;