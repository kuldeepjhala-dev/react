const rootElement = document.getElementById("root");

// //Funciton returns an object(element)
// function helloWorld() {
//     //We have used createElement() from REACT CDN link.
//     //3-parameters: type(it means which type of element), props(attributes of the element), children(data of the element or other element. For eg. <span> in the element).
//     return React.createElement("h1", { className: "heading" }, "Hello world");
// }

function HelloWorld() {
    return <h1 className="heading">hello world</h1>
}

//we have used createRoot() to define that all components will go inside the rootElement-div.
//As we have s  ent it as an argument to createRoot() method.
//render will take input an object(element). <helloWorld /> returns the object.

//HelloWorld component should start with uppercase letter. I not then render method will consider it as an html element like a, nav, header, footer, article, aside etc.
ReactDOM.createRoot(rootElement).render(<HelloWorld />);

//babble translates jsx syntax to react syntax
//import 3 cdn's of REACT, REACTDOM and BABEL.