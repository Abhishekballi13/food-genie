import { useRouteError } from "react-router-dom";

const Error = () =>{
    //this is a hook given by router
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong</h2>

        </div>
    )
}

export default Error;