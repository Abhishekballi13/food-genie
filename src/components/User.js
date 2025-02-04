import { useState } from "react";


//whenever we are invoking the functional component we are loading into our page
const User = ({name}) => {
    const [count] = useState(0)
    return <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Name:{name}</h1>
      <h2>Location: Bihar</h2>
      <h3>Contact: abhi@gmail.com</h3>
    </div>
}

export default User;