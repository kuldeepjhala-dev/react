const rootElement = document.getElementById("root");

///////=> using core js
// //type, props, children => parameters of the createElement method.
// const el = React.createElement("h1", { className: "heading" }, "Hello Wor"); //el is an element which is just an object
// ReactDOM.createRoot(rootElement).render(el);


///////=> using core js and function
// function helloWorld() {
//   return   React.createElement("h1", { className: "heading" }, "Hello from function" );
// }
// ReactDOM.createRoot(rootElement).render(helloWorld());

///////=> using jsx (remember to change add type = "text/jsx" in index.html script tag.) (Add CDN of babble)
function HelloWorld() {
    return <h1 className="heading">Hello from jsx</h1>
}
ReactDOM.createRoot(rootElement).render(<HelloWorld/>); 