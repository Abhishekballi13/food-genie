
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"im h1 tag"),React.createElement("h2",{},"im h2 tag")]))

//creating something is core part of react
// const heading = React.createElement("h1",{id:"heading"},"Hello World from React");
//creating root comes under dom part of react
//everything we will render we will render inside this root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);