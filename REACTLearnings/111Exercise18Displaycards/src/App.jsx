import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 1. Initialize users as an empty array in State
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Use useEffect to fetch data ONLY once when the component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data); // 3. Update state with the fetched JSON
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []); // The empty array [] means "run this once on mount"

  return (
    <>
   
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-container">
            {users.map(
              (user) => (
                <div key={user.id} className="card">
                  <div className="name">Name: {user.name}</div>
                  <div>User ID: {user.id}</div>
                  <div>{user.email}</div>
                  {/* <div>{user.address}</div>  this doesnot work as address is the object not string */}
                  <div>
                    {user.address.street} ,{user.address.city}
                  </div>
                </div>
              )

            )}
          </div>
        )}
    </>
  );
}

export default App;
