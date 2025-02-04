import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
         
        this.state = {
            count:0,
            userInfo:{
                name:"Dummy",
                location:"Default",
                // avatar_url:"https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/abhishekballi13");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
    } 

    //render is a method that return some piece of jsx
    render(){
        const{count}=this.state;
        return <div className="user-card">
    <h1>Count:{count}</h1>
    <button onClick={()=>{
        // never update state variables directly
        //use this way
        this.setState({
            count:this.state.count + 1,
        })
    }}>Count Increase</button>
    <button onClick={()=>{
        this.setState({
            count:this.state.count - 1,
        })
    }}>
    Count Decrease
    </button>
      <img src={this.state.userInfo.avatar_url}/>
      <h1>Name:{this.state.userInfo.name}</h1>
      <h2>Location: {this.state.userInfo.location}</h2>
      <h3>Contact: abhi@gmail.com</h3>
    </div>
    }
}

export default UserClass;