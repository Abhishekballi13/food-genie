import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"  
import Body from "./components/Body"
// import { createBrowserRouter, RouterProvider} from "react-router-dom"
// import About from "./components/About"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
// import Grocery from "./components/Grocery"


//lazy loading,
//this will not load when our web app will start
//it will load seperately,the code will come only when requested
//we seperate this bundle
//dynamic importing
const Grocery = lazy(() => import("./components/Grocery"))

const About = lazy(()=>import("./components/About"))

const AppLayout = () => {

  const [userName,setUserName] = useState();
  
  useEffect(()=>{
    const data = {
      name : "Abhishek Dwivedi",
    };
    setUserName(data.name);
  },[])

   return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="app">
      <Header/>
       {/* what will happen here is that the particular compoent will fill here which evre route we are on */}
       <Outlet/>
       {/* <Body/> */}
     </div>
    </UserContext.Provider>
    </Provider>
   )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
       },
      {
        path:"/about",
        element:<About/>
       },
       {
         path:"/contact",
         element:<Contact/>
       },
       {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
       },
       {
        path:"/grocery",
        //you can pass shimmer ui also in fallback
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
       },
       {
        path:"/cart",
        element:<Cart/>
       }
    ],
    errorElement:<Error/>,
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)

// "react" this means it comes from our node modules

// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"im h1 tag"),React.createElement("h2",{},"im h2 tag")]))

//creating something is core part of react
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React");
//creating root comes under dom part of react
//everything we will render we will render inside this root
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//this jsxHeading is also a react element
//this jsx code is transpiled to React.createElement("",,"") and thats how your browser parses your code
// const jsxHeading = <h1 id="heading" className="head">Namasate React using JSX</h1>
//  const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading);

//both of the below code are same
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>
// };

//Componet Composition ,here we are inserting a component inside other component

// element can have only one parent element
// const elem = <span>A span tag</span>
// const head = (
//     <h1>
//     {/* this is how you can add element inside it */}
//         {/* {elem}<br></br> */}
//     this is react element
//     </h1>
// );

// const HeadingComponent = () => (
//     <div id="container">
    {/* writting javascript inside jsx is a great thing it will be used later */}
    {/* this data is sanitized before passing to browser */}
    {/* <h2>{100+200}</h2>
    <h2>{console.log("hello")}</h2> */}

    {/* both of the below lines are same line 48-49 */}
    {/* {Title()} */}
    {/* <Title/> */}

    {/* this is how we can add react element */}
    {/* {head}
        <h1>Namaste React Functional Component</h1>
    </div> */}
// )

// const Title = () => (
//     <div>
//         <h1>This is component inside HeadingComponent</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />)



//we are de structuring props on the fly
//either you pass like this (props)
//or destructure ({resName,cuisine})


// const Footer = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }
