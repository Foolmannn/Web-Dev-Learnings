import React from "react";
import "./Card.css"
const Cards = (props) => {
  return (
    <div className="card" style={{overflow: "clip"}}>
      {/* This is how you pass the inline css first {} is for the js and second {} is the object passed then we can write the css as the key value pair */}      <img src="https://imgs.search.brave.com/MfeK-Pq9R01OB9m8gZnXsvoPpqZQRoBSc_Rc1SUrr5Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzE2ODMz/NzA0MDAtNjA0Njdm/MjdiOTRmP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/ZDhmSEJzWVhscGJt/Y2xNakJqWVhKa2ZH/VnVmREI4ZkRCOGZI/d3c" alt="" width={233} style={{border: "2px solid red" }} />
      <h1>{props.title} </h1>
      <p> {props.description}</p>
    </div>
  );
};

export default Cards;
