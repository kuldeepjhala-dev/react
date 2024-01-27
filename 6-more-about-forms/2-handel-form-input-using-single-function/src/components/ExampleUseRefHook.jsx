import { useRef } from "react";

function ExampleUseRefHook() {
  /* 
    1. useRef will always return single object. 
    2. It contains single property name 'current'. eg : {current:"your-value"}.
    3. When we update the value of 'current' the component will not rerender. But in useState when we update the state then immediately components rerenders.
    4. In useRef we can store string, number, array, object. But we can also store HTML-Element's reference. 
    5. In the below example we can se that even after pressing button the component is not re-rendering but the value of userName is update from "kuldeep" to "Jhala" after pressing the button.
    6. Value of 'userName' is update but it is not reflecting in UI becuase the component is not re-rendered.
    7. We can store elements in useRef hook. As you can see that we have linked h1 element with h1Ref hook. Using that we are changine the element data which is reflecting UI but the component is not re-rendering.
    8. We can create uncontrolled component using useRef when dealing with forms. On the other hand when woking with useState we were only able to handel forms using only controlled components only.
    9. We should use useState when working with forms because less bugs and errors will occur.
   */
  const userName = useRef("Kuldeep");
  const h1Ref = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();

  console.log("Component Rendered");
  console.log("userName.current", userName.current);
  console.log("Before button click 'userName.current': ", userName.current);

  const handelClick = () => {
    userName.current = "Jhala";
    console.log("Ater button click 'userName.current': ", userName.current);
  };

  const handelClickElement = () => {
    console.log(h1Ref); // op : {current: h1}
    const h1Element = h1Ref.current; // storing reference in variable to make changes.
    console.log(h1Element); // op : <h1>This is h1 element which will be stored in 'ref' </h1>
    h1Element.textContent = "H1 element value updated using ref"; //change text of h1 element.
    h1Element.style.background = "blue"; // change background of h1 element.
    h1Element.style.color = "white"; // change font color of h1 element.
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef); // op : {current: input#userName}
    const userNameInputRef = userNameRef.current;
    const passwordInputRef = passwordRef.current;

    console.log("userName: ", userNameInputRef.value); // op : kuldeep (form text field value)
    console.log("Password: ", passwordInputRef.value); // op : password (form text field value)
  };

  return (
    <div>
      <h1>Hello {userName.current}</h1>
      <button onClick={handelClick}>Change Name</button>
      <h1 ref={h1Ref}>This is h1 element which will be stored in 'ref'</h1>
      <button onClick={handelClickElement}>Move Element</button>

      <div>
        <br />
        <br />
        <br />
        <form onSubmit={handelSubmit}>
          <label htmlFor="userName">Username</label>
          <br />
          <input type="text" name="userName" id="userName" ref={userNameRef} />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="text" name="password" id="password" ref={passwordRef} />
          <br />
          <br />
          <button type="submit">Submit</button>
          {/* <button onClick={handelShowValue}>ShowValue</button> */}
        </form>
      </div>
    </div>
  );
}

export default ExampleUseRefHook;
