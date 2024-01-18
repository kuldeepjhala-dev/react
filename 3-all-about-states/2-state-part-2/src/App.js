import './App.css';
import { useState } from 'react';
import Users from './components/Users';

function App() {

  const [users, setUsers] = useState([
    { id: 1, firstName: "Kuldeep", lastName: "Jhala", age: 25 },
    { id: 2, firstName: "Jay", lastName: "Dhobi", age: 25 },
    { id: 3, firstName: "Viral", lastName: "Kapadia", age: 30 }
  ]);

  return (
    <div className="App">
      <h1>State Example</h1>
      {/* Passing state as  prop */}
      <Users users={users} />
    </div>
  );
}

export default App;
