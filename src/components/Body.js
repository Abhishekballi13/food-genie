import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import UserContext from "../utils/UserContext";
  
const Body = () => {
    //this is nothing but we are doing array destructuring
    //as useState() is nothing but a js utility function which is giving an array with two variables
    //and we are destructuring on the fly
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState();
     
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // console.log("Body rendered",listOfRestaurants);
    //the callback inside useEffect will be called after this component has been rendered
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.468195392343805&lng=80.3290855139494&str=Chinese&trackingId=44b30770-fcd9-a191-415b-30442e6fbd65&submitAction=ENTER&queryUniqueId=54f0c1ea-4e23-8c11-118c-865e84754149");
        const json = await data.json();
        // console.log(json);
        //json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[0].card.card.info.name
        //do optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
        setFilteredRestaurant(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
    }
    
    //checks online status
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) return <h1>Looks like youre offline !!Please check your internet connection</h1>
    
    //shimmer ui fake webiste before entire website has been loaded
    //this concept is known as conditional rendering
    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>;
    // }
    
    //setting user name as user entered
    const {loggedInUser,setUserName} = useContext(UserContext);
    
    //nothing just doing conditional rendering with help og ternary operator instead of standard using if
    return listOfRestaurants.length===0?<Shimmer/> : ( 
        <div className="body">
          <div className="flex">
          <div className="search m-4 p-4 flex items-center">
                <input type="text" 
                data-testid="searchInput"
                className="border border-solid border-black" 
                value={searchText} 
                onChange={(e)=>{
                    // e is event here
                    setSearchText(e.target.value)
                }}/>
                <div className="search m-4 p-4 flex items-center">
                    <button 
                    className="px-4 py-1 bg-green-200 m-4 rounded-lg" 
                    onClick={()=>{
                        //filter the restaurant cards based on searchtext
                        const filteredRestaurant = listOfRestaurants.filter((res)=>(
                            res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setFilteredRestaurant(filteredRestaurant);   
                    }}>Search</button>
                </div>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button className="px-4 py-1 bg-red-200 m-4 rounded-lg" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.card.card.info.avgRating > 4.3
                    );
                    setFilteredRestaurant(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <label>UserName:</label>
            <input type="text" className="border border-black p-2" 
            value={loggedInUser} 
            onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          </div>
          <div className="flex flex-wrap">
           {filteredRestaurant.map((restaurant)=>(
            //key is reserved word here
            //keys are important to add reason in notes
            //we can use index key but it is not recommended
            <Link to={"/restaurant/"+restaurant.card.card.info.id} key={restaurant.card.card.info.id}>
                {/* if a restaurant is promoted we will add a label to it */}
                {
                    restaurant.card.card.info.promoted ? (<RestaurantCardPromoted resData={restaurant}/>) : 
                    (<RestaurantCard resData={restaurant}/>)
                }
             </Link>
           ))} 
            {/* <RestaurantCard resData={resList[0]}/> */}
          </div>
        </div>
    )
}

export default Body;