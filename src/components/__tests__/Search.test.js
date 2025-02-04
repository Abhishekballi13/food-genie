//part of integration testing

import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResLisData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
//we are trying to mock the function exactly similar to how fetch function works here
//as fetch is a part of borwser and not js
//we are making dummy fetch function/mock fetch function
//we resolve the promise once and then json again resolves the promise it received
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

//suppose you want to do something before running all test cases
// it is helpful in cleanup task
beforeAll(()=>{
     console.log("before all");
})

//it will run before each test case if you want to do something
//perform some console log or etc.
beforeEach(()=>{
    console.log("before each");
})

//it will run after all test cases
afterAll(()=>{

})
//it will run after each test case
afterEach(()=>{

})

//testing the search restaurants button functionality
//which tests the no of restraunts before and after how many restraunt are getting displayed 
it("Should search Restaurant list for burger as text input",async ()=>{
    //act function takes function which is async function
    //act returns a promise so we have to await for act
    await act(async ()=> render(
     <BrowserRouter>
        <Body/>
     </BrowserRouter>
    ));
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(102);

    const searchButton = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value:"burger"}});

    fireEvent.click(searchButton);

    //screen should have 34 cards that is 34 restaurant are there when we search chinese

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(3);
})

//testing the top rated restaurants button functionality
//which tests the no of restraunts before and after how many restraunt are getting displayed 
it("Should filter top rated Restaurant",async ()=>{
   await act(async()=>{
        render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
      )
   })

   const cardsBeforeFilter = screen.getAllByTestId("resCard");

   expect(cardsBeforeFilter.length).toBe(102);

   const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
   fireEvent.click(topRatedBtn);

   const cardsAfterFilter = screen.getAllByTestId("resCard");
   expect(cardsAfterFilter.length).toBe(13);
})