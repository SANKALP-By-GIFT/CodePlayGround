import { useState } from "react";

function App({user}) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <Dashboard>
      <TransactionPanel user={user} />
    </Dashboard>
  );
}

function Dashboard({ children }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
}

function TransactionPanel({ user }) {
  return <p>User Age: {user.age} User name: {user.name}</p>;
}

export default App;