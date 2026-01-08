import { useState } from "react";

export const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  if (user) {
    setCount(count + 1);
  }
//   const getData=()=>{
//     const [data,setData=useState(0)]
//   }//it is not 
  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation</h1>
      {isLoggedIn && <h2>You are logged in!</h2>}
      {user ? `Hello ${user}` : "Please logged in!"}
      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={() => setUser("Chirag Jain")}>Set User</button>
        <button onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  );
};
