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
        setUsers(data); // 3. Update state with the fetched JSON
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []); // The empty array [] means "run this once on mount"

  return (
    <div className="container">
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
