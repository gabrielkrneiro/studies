import React from "react";
import { useUsers } from "../../hooks/useUsers";

export const Home: React.FC = () => {
  const { getUsers } = useUsers();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default Home;
