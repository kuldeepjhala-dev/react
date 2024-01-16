import './App.css';
import User from './components/User';

const users = [
  { id: 1, firstName: "Harshit", lastName: "Vashistha" },
  { id: 2, firstName: "Kuldeep", lastName: "Jhala" },
  { id: 3, firstName: "Jay", lastName: "Dhobi" }
];

//map method is only used to render list

function App() {
  return (
    <div className="App">

      {/* <User firstName={users[0].firstName} lastName={users[0].lastName} />
      <User firstName={users[1].firstName} lastName={users[1].lastName} />
      <User firstName={users[2].firstName} lastName={users[2].lastName} /> */}

      {/* {
        users.map((user) => {
          return (
            <User firstName={user.firstName} lastName={user.lastName} />
          );
        })
      } */}

      {/* {
        users.map((user) => (<User firstName={user.firstName} lastName={user.lastName} />))
      } */}

      {/* when list is dynamic we have to use the unique key for each object like 'user.id', MORE PREFERABLE */}
      {/* {
        users.map((user) => <User {...user} key={user.id} />)
      } */}

      {/* When list is static use the index as key. But when list is dynamic, you cannot use the index as a key. If we use index as a key then when one element is deleted then index value will be changed and error will occur. LESS PREFERABLE*/}
      { 
        users.map((user, index) => <User {...user} key={index} />)
      }

    </div>
  );
}

export default App;
