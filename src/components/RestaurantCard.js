import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props) => {
    // console.log(props)
    const {resData} = props;
    //optional chainging ?.,we are destructuring here
    const {name,cuisines,costForTwoMessage,avgRating,sla,cloudinaryImageId} = resData?.card?.card?.info;
    // console.log(resData.card.card.info.avgRating);
  return(
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-zinc-100 hover:bg-zinc-300" >
        <img 
        className="rounded-lg"
        alt="res-logo" 
        src={
           CDN_URL+
          cloudinaryImageId
        }
        /> 
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwoMessage===""?"N/A":costForTwoMessage}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

//higher order component
export const withPromotedLabel = (RestaurantCard) => {
  //it returns back a component/function that returns some piece of jsx
  return (props)=>{
    return (
      <div>
         <label name="promoted" className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
         <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;