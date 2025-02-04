import { act, fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { BrowserRouter } from "react-router-dom"
import MOCK_DATA_NAME from  "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA_NAME)
    })
})

//very complex functionality to check if on clicking add button item gets added to cart 
it("Should load Restaurant Menu Component",async ()=>{
   await act(async ()=>{
      render(
            <BrowserRouter>
                 <Provider store={appStore}>
                        <Header/>   
                        <RestaurantMenu/>
                        <Cart/>
                 </Provider>
            </BrowserRouter>
            
       ) 
   })

   const accordionHeader = screen.getByText("Roll (9)");
   fireEvent.click(accordionHeader);

   expect(screen.getAllByTestId("foodItems").length).toBe(9);

   const addBtns = screen.getAllByRole("button",{name:"Add +"});

   fireEvent.click(addBtns[0]);

   expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
   
   expect(screen.getAllByTestId("foodItems").length).toBe(10);

   fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

   expect(screen.getAllByTestId("foodItems").length).toBe(9);

})