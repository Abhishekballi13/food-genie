import User from "./User";
import {Component} from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>About</h1>
                <div>
                    loggedInUser
                    {/* another way of consuming context in class based this is the way in functional component we where doing it using hook useContext */}
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Food Ordering App</h2>
                {/* <User name={"Abhishek"}/> */}
                <UserClass name={"Abhishek"} location={"Bihar"}/>
            </div>
        );
    }
};

export default About