import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with Login Button",()=>{
    //we have to provide redux store here
    //we are loading this in isolation
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
   );

   const loginButton = screen.getByRole("button",{name:"Login"});
   expect(loginButton).toBeInTheDocument();
}) 

it("Should render Header Component with a Cart item" ,()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
               <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
})

//fire event
it("Should change Login Button to Logout on click" ,()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
               <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:"Login"});
    
    //will click the login button and it will change from login->logout
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
})