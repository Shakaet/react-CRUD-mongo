import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const data = useLoaderData(); // Load initial data from loader
  const [user, setUser] = useState(data); // Initialize state with loaded data

  const handleBtn = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          alert("Deleted Successfully");

          // Filter out the deleted user from the state
          const remaining = user.filter((item) => item._id !== id);
          setUser(remaining); // Update the state
        }
      });
  };

  return (
    <div>
      <h2>Total Users: {user?.length}</h2>

      {user.map((item) => (
        <div
          key={item._id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div>
            <h2>{item.name}</h2>
            <h3>{item.email}</h3>
          </div>
          <Link to={`/update/${item._id}`}>
          <button>Update</button>
          </Link>
          <div>
            <button onClick={() => handleBtn(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
