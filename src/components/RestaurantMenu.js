import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";


//displaying the restraunt menu to ui
const RestaurantMenu = () =>{
    
    // const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();
    
    //how to get data ,this is abstracted
    //we have abstarcted the logic of fetching data in a hook
    //this makes our code becomes more testable
    const resInfo = useRestrauntMenu(resId);
    const [showIndex,setShowIndex] = useState(0);
    const [categories,setCategories] = useState([]);

    //categories like bestseller and all
    useEffect(() => {
      const regularCards = resInfo?.cards?.find(
        (card) => card.groupedCard?.cardGroupMap?.REGULAR
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
      if (regularCards) {
        const filteredCategories = regularCards.filter(
          (c) =>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        console.log("Filtered Categories:", filteredCategories);
        setCategories(filteredCategories);
      } else {
        console.log("No REGULAR cards found.");
      }
    }, [resInfo]);
    
          
    if(resInfo===null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?    .REGULAR?.cards[1]?.card?.card;
    
    
   
    

    // console.log(categories[0].card.card.title)
    // if(categories===null) return <Shimmer/>;

    return (
        <div className="text-center">
            <h1 className="font-bold my-8 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>

            {/* <h2>Menu</h2>
            <ul>
              {itemCards.map((food)=>(
                  <li key={food.card.info.id}>{food.card.info.name} - Rs. {food.card.info.price/100 || food.card.info.defaultPrice/100 }</li>
              ))}
            </ul> */}

            {/* beautifying it,by making accordion */}
            {console.log(categories)}
            {categories && categories.map((category,index)=>(
                <RestaurantCategory 
                  key={category?.card?.card?.title} 
                  data={category?.card?.card}
                  showItems={index === showIndex ? true:false}
                  setShowIndex={()=>setShowIndex(index === showIndex ? null : index)}  
                  />
            ))}
        </div>
    )
}

export default RestaurantMenu;