import { createContext } from "react";

//it is like a central global object

const UserContext = createContext({
    loggedInUser:"Default User",
});

export default UserContext