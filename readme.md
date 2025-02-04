**##** chapter 1

-- react is just a plain javascript library 
-- this code is written by some facebook developers

**#** why there are two files ?
-- first file is react.development.js this is core of react
-- second file is used for modifying dom
-- there are different types of places where react is being used
-- main file is first one that is core of react and second one act as a bridge between browser and react
-- which is used to give some superpowers or functionalities to browser

--props are children which will go inside tag or element you created
-- render basically converts this object to some tag and place in code
-- react element is a js object
-- jsx will make life easy when we have to create tags
-- react will ony work inside the root element we provide in render

-- react is called as library it can be applied to small portion of page it will only work on the root element provided in render
-- it can work in independently in small portion of your app
-- framework which comes with comprehensive set of functionality and often include  a wide variety of pre built components
-- framework controls the flow of application it basically dictates the application structure
-- When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed
-- Both libraries and frameworks are reusable code written by someone else. 


-- homework
-- what is cdn 
-- what is this cross origin
-- diff between git and github

**##** chapter 2 (igniting our app)

-- before making our code to production ,we need to minify our code,bundle our code,do image optimization,code needs to be cleaned and much more stuff.
-- how to create our own production ready react app.

**#** what is npm ?
-- npm does not stands for node package manager as we can see in the official site ,basically npm manages packages,it is biggest package manager.It will manage all the package we install in our system
-- our project is dependent on lot of packages ,those packages on which project is dependent on are dependecies.

**#** Bundlers
-- web pack,parcel,vite all are bundlers,they bundle our app so that it can be shipped to production
-- create react app uses web pack  and babel as bundler behind the scenes and to build things up
**#** Parcel
-- parcel is one of the best libraries
-- there are 2 types of dependencies one is dev dependecy and other are normal dependency
-- dev dep. are use during development of our app and normal are used in production also.
-- if you need as a dev dependency you can add -D flag like in : npm install -D parcel
--parcel functionalities :-
   - dev build
   - local server
   - HMR (hot module replacement),(HMR is a feature that allows your website or app to update instantly when you make changes to the code, without refreshing the browser,When you save a file, Parcel sends only the changed parts of the code to the browser, instead of reloading everything.)
   - File Watching Algorithm - written in C++
   - fater builds beacause of caching (in .parcel-cache in which binary files are stored)
   - minification (Minification removes unnecessary parts of your code (like spaces, comments, and long variable names) to make it smaller and faster.)
   - bundling ( Bundling combines all your code and dependencies (like JavaScript files, CSS, and images) into one or a few files.)
   - compressing 

   - consistent hashing
     (How It Works in Parcel 
         Hash Generation:
     Parcel computes a hash for each file and its dependencies based on their content.
     The hash is used as a unique identifier (cache key) for the file.
     Cache Management:
    When a file is modified, its hash changes.
    Parcel detects the change and invalidates only the affected parts of the cache.
    Dependencies that haven’t changed (with the same hash) remain valid and are reused, speeding up subsequent builds.
     Consistent Hashing Role:
    If the file structure or dependencies of your project shift (e.g., you add/remove files), consistent hashing minimizes the scope of what needs to be recomputed or invalidated.
    This ensures that large-scale projects stay efficient, even with frequent changes.
    Speeds Up Development,Optimized for Large Projects,Seamless Caching:)
    
   - code splitting

   - differential bundling
     (Differential bundling in Parcel is a feature that creates different bundles of your code for different environments, such as modern and older browsers.with help of browserslist)

   - diagnostic
   - error handling
   - https (if you do --https it will load in https mode)

   - tree shaking algorithm - remove unused code for you
     (he tree shaking algorithm in Parcel ensures that only the code you actually use ends up in your final bundle. By analyzing dependencies, identifying unused code, and removing it, Parcel optimizes both the size and performance of your application.)

   - transpilation
     (Transpilation in Parcel is the process of converting modern or non-standard JavaScript into a form compatible with your target browsers.Not all browsers support the latest JavaScript features (e.g., ES6+).Parcel automates this process using tools like Babel or swc.With features like browserslist and seamless integration of languages like TypeScript and JSX, Parcel ensures your code runs efficiently and universally)

   - different dev and prod build



**#** package.json vs package-lock.json
-- package.json is a configuration for npm it keeps a trackof all dependencies/packages our code is using
-- package-lock.json basically locks the version,it keeps a track of exact version unlike package.json which keeps a approx track of version,
it locks the specific version for the consistent project setup across env.
-- you have to put both of them in git as with help of them you can create all node_modules with them,as soon as you will do npm install
all of the node_modules will get installed again in your project
-- so you dont have to put node_modules on github and make project heavy,just put package.json and package-lock.json

-- transitive dependencies
When you install a package in Node. js using npm or Yarn, that package might depend on other packages. These other packages are called transitive dependencies. 
-- node_modules is a directory in Nodejs projects that stores third-party libraries and dependencies


-- difference between ~ and ^ in versions
~version “Approximately equivalent to version”, will automatically update you to all future patch versions that are backwards-compatible, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.

^version “Compatible with version”, will automatically update you to all future minor/patch versions that are backwards-compatible, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.

-- npx parcel index.html ,parcel created a server and hosted our app on server
-- npx means executing a package ,when you install package you use npm 
-- parcel basically builds a development build and host it on created server

-- fetching from cdn to bring react in our project is a costly task,that we were doing earlier
so we use npm to do the same thing and it is better to have it in package.json
now we will install react in our project using react

-- when you will build production build it will do inside dist folder

- anything you can re generate you dont put in github

- browserslist is a npm package that will tell your app will work for which all versions of chrome or other browsers,devices etc.

-- homework
-- diff between git and github

**##** chapter 3 (laying the foundation)

- creating our custom npm scripts to start our project in package.json
- you can do by changing scripts in package.json
- so by doing "npm run start / npm start" now you can start your project
- same for build we will now type "npm run build"

- JSX is seperate ,react is seperate , it makes our life easy
- JSX is HTML like syntax,it just looks like HTML OR XMl
- your js engine understands ecmascript,that is what your browsers understand
- parcel is doing it ,this code (jsx one) is basically transpiled before it goes to js engine
- babel is a package,which is installed by parser inside our node_modules,it is transpiling our code 

- there are 2 types of class based component
- class based and functional based component
- react component is just a normal js function that return some piece of jsx

- data is sanitized before passing to browser to prevent scripting or injection attacks when we use {} to insert some piece of js
- this is power of jsx

-- homework
- cross site scripting attack

**##** chapter 4
- we will be making food ordering app
- Header
    - Logo
    - Nav Items
- Body
    - Search
    - RestaurantContainer
    - RestaurantCard
       - img
       - Name of Res,Star Rating,cuisine,deliver time
- Footer
    - Copyright
    - Links
    - Address 
    - Contact

- in react we have something known as props
- props are arguments to function
- like react component is a js function so passing prop to component is same as passing arguments to function

- config driven ui
- all the ui is driven by config ,config can be some data
- we can control the ui according to our data
- cloudinary is also a cdn 
- optional chaining
- components when iterated upon using map or while using loop ,they need to indexed or you have to give id
- suppose you dont give id ,react will re render all the components/cards in our case if a card is added to the container
- as react will not know which is new card ,if you give id it knows all components by there id so whenever new component is added
- rest other components will not be rendered again only new one will be rendered.You can use index as the key also when you dont have unique id as last resort

- homework
- learn css
- config driven ui
- fix app

**##** chapter 5
- we have to keep a proper structure of all files and folders
- we have to avoid nesting
- dont overthink it, just try to find a sweet spot
- some people try to give the extension as jsx


- default export
   export default Component
   import Component from "path"

- named export
  export const Component
  import {Component} from "path"

# React Hooks
  (Normal JS utility functions)
  - useState() - super powerful react variable - state variable
  - that is react hook - usestate hook
   whenever a state variable changes react will re render the component
  - useEffect() 

# things that make react fast
 # Reconciliation algorithm (React Fiber)
    (The reconciliation algorithm in React figures out what changes need to be made to the actual DOM to update the UI when your app’s state or data changes.
    How it works:
     - React compares the current UI (Virtual DOM) with the new one you want to render.
     - It calculates the minimal set of changes needed to update the real DOM.
     - Only the necessary updates are applied, making it efficient.)

  # virtual dom is a representation of actual dom
    A lightweight, in-memory version of the real DOM.
    Why it’s useful:
    - The real DOM is slow to update directly because every change involves recalculating styles, layouts, and re-rendering.
    - React uses the Virtual DOM to quickly calculate the differences between the old UI and the new UI (using the diff algorithm).
    - Only the changes are sent to the real DOM.

 # diff algorithm finds out the differnce between updated virtual dom
    The diff algorithm helps React figure out the differences (or "diffs") between the current Virtual DOM and the new one.
    How it works:
    - It compares the two versions node by node.
    - If it finds differences, it calculates the smallest set of changes needed to update the real DOM.
    - React assumes that changes are likely localized (e.g., if a small part of a list changes, it doesn’t scan the entire DOM).
    Efficiency Tip: React optimizes this process by using unique key props for lists to track which items have changed, added, or removed.

- react does not touch the dom a lot ,whenever there is change in state variable it will
- check the difference between virtual dom and update the ui

 # incremental rendering
    Incremental rendering means rendering parts of the UI step-by-step, instead of all at once.
    Why it’s helpful:
    - It improves performance by allowing visible parts of the app to render first, so users see something quickly while the rest of the UI loads.
    - React’s Concurrent Mode and libraries like React Server Components support incremental rendering to improve responsiveness in complex apps.

React isn’t inherently "fast" because it skips work—it’s fast because it does the minimum amount of work needed.

- homework
 can we do default export with named export?


 **##** chapter 6

 monolith - everything in single language
 microservices - single responsinsibilty principle,each and every service has its own job no one is interfering with it
 ,seperation of concerns

 - approach 1
 - page loads -> Api call -> render

 - approach 2
 - page loads -> render ui -> Api call -> we now render our application we new ui
   this second appraoch is better as it gives better ux(user experience),as user can see something when he opens the site and things get 
   loaded after wards,react render cycles are very fast so this approach is best

- our browsers sometimes block us when it finds a mimatch between origin while calling api
- cors mismatch

- shimmer ui ,it is kind we load a fake page untill our website loads

- Reconciliation is the process React uses to update the real DOM efficiently when your app’s state or data changes. Instead of re-rendering everything, React calculates what has changed and updates only the necessary parts of the DOM. This process ensures high performance and responsiveness.

When the state of a React component changes, the following steps occur:

  - Virtual DOM Update:
      React creates a new Virtual DOM tree that represents the updated UI based on the new state or props.

  - Diffing:
    React compares the new Virtual DOM tree with the previous one (this is called the diff algorithm).
    It identifies which parts of the Virtual DOM have changed.

  - Minimal Real DOM Updates:
    Based on the differences, React updates only the necessary parts of the real DOM.
    This minimizes the expensive operations on the real DOM, making updates faster.

- whenever react state variables update react triggers reconciliation cycle ,basically it re renders

 **##** chapter 7
 - use Effect takes a callback function and a dependecy array ,it is called after every time my component renders
 - dependency array changes the beahviour of its render,if no dependecy array that means useEffect is called on every render
 - if dependecy array is empty array,useEffect will be called on initial render
 - if dependency array is filled with something,it will render whenever the dependency changes

 - never create useState inside if else or condition or for loops,and always try to declare them at top 
 - if you dont do inconsistency in your program
-  they are made to be created at top of functional components which is best practice. and you will not face errors
 
# routing
- use createBrowserRouter which takes a list of objects which have path,element
- path on which it will render,element component to render
- use RouterProvider component to provide the router
- react router dom gives us a hook 

- how to create children routes,use case like if we want to keep header to stick on top and stay intact like whichever page
 i move it sticks at top
- using link instead of anchor tag does not refreshes the entire page,page is not reloading

# there are two types of routing in web apps
- Client Side Routing (we are not fetching a new page,we dont make network calls,it just loads all the components) also it is the explanation
for single page application
- Server Side Routing (you make a network call and the page suppose about.html is coming from server)


 **##** chapter 8

 # Class Based Components in React
 - class extends React.Component
 - render() method
 - passing props using constructor and super(props)
 - state variable using this.state
 - changing state variables using this.setState()

 - first constructor is called then render() method is called
 - parent contructor -> parent render -> child conctructor -> child render
 - component didMount -> first constructor is called then redner is called the component didMount is called
 - Three Main Phases of the Lifecycle :- 
      Mounting Phase: When the component is created and added to the DOM.
      Updating Phase: When the component is re-rendered due to changes in state or props.
      Unmounting Phase: When the component is removed from the DOM.

 - With the introduction of React Hooks, functional components can also manage their lifecycle using hooks. Hooks like useEffect provide the same functionality as lifecycle methods in class components like componentDidMount.

- this mounting for every child,parent component in react
- react has mounting in two phase :- render phase,commit phase
- constructor is called ,render is called
- then react update the dom then component didMount is called
- commit phase is batched, react does all the thing and tries to batch because because dom is beign updated/manipulated in this phase
  it is a expensive task

- component didUpdate is called after every update
- component willUnmount will be called when we are leaving the page(this is a usecase),there are lot of things to clear when we are leaving
the page,we can use it to clear intervals and timers
- we use return inside useEffect for unmounting

# chapter 9 (optimizing our app)
- single responsibility principle
- modularity
- if you follow these ,code becomes reusable,maintainable,testable
- try to keep your code maintenable
- hooks are like utility function 
- create custom hooks
- building online/offline feature
- app chunking/dynamic bundling/lazy loading/on demand loading, to break your app into smaller chunks
- using lazy() method ,so we can do on demand loading of that particular component

# chapter 10 
- styled components
- tailwind css ,post css is a tool for transforming css along with js
- tailwind is a generic css framework
- it will include the css that is required no extra code,all classes are not dumped here only that are used are only imported
- i

# chapter 11
- higher order component takes a component and return backs the component by enhancing it and tweaking it
- read about spread operator which spread out properties
- accordion ui where you can collapse it or expand it

<!-- here we are doing ["@type"] because @ cannot be directly
            we have given refrence for .card which is same as .["card"]
            c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" -->

- state driven ui
- lifting the state up we dont want restaurant category to have the power of expanding and collpasing
  we want parent to control children,we dont want restaurant category to have its own state
- controlled component vs uncontrolled component 

- props drilling
 passing props at very deep level is not good,we have to work some other way or keep in some central place
- useContext hook,user context central space
- we dont have to put all data inside context,
- we have wrapped our whole app with context provider,such that new value is present everywhere and whole application can use it
- we can use it for a specific portion also,by wrapping it till wherever we want
- can we have nested context providers?

# chapter 12
- redux store is a big large central store which is globally accessible
- we have slices inside redux store so that the store does not become clumsy
- we can keep information about themes(light/dark)
- updating the cart
- when we click the add button dispatches an action which in turn calls a function(reducer) ,which then updates the card/modidifes the slice 
of redux store
- subscribing to store using selector
- header component is subscribed to store using selector

- Redux toolkit
- install @reduxjs/toolkit and react-redux
- build our store
- connect our store to our app
- SLice(cartSlice)
- dispatch
- selector
- actions -  add,remove,delete items etc

- in latest redux--toolkit we have to mutate the state aaccording to our action
- now returning state is not mandatory
- redux behind the scenes uses immer
- immer basically takes the original state ,updated state takes the diff and gives the new state

- how to create immutable object


# chapter 13 (time to test)
- even a single line of code can mess up your application,so testing is really important
- why do we even write test cases,there are many types of testing
- we will only focus on developer testing 
- diff types of testing a developer can do :-
- manual testing - testing whatever you have developed ,like you build search functionality ,you will search for different type of text 
in that field

- three types of testing are :-  
   - unit testing,(one unit of your code ,small unit of your react appliaction in isolation,like one component)
   - integration testing,(where multiple components are involved)
   - end to end testing,(application flow ,what will be the flow across the application)
- end to end testing will not be covered, unit and integration will be focused upon

- react testing library 
- it is build on top of dom testing library,react testing library is like a wrapprer across dom testing library 
which gives more extra features

- jest is needed by react testing library and dom testing library
- jest is a delightful js testing framework

- install react-testing library
  installed jest
  installed babel dependecies
  configure babel
  configure parcel config file to disable defautl babel configuration
  jest configuration - npx jest --init
  (js dom gives you superpower of browser)
  install jsdom library
  install @babel/preset-react -to make JSX work in test cases,it helping the react code to normal html code
  include @babel/preset-react inside my babel
  install testing library @testing-library/jest-dom

- dunder tests ('__ __') 

"watch-test":"jest --watch",it will automatically run the test whenever there is a change
- in coverage folder you can go to utils there is index.html and it will give you report
 open it with live server which will tell how much you tested ,your coverage should be greater than >80%-90% it is good practice