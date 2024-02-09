import useStorage from "./UseStorage";
// import {useState} from "react";

const App = () => {
  const [input, changesininput] = useStorage(" ");
  
  const changes = (e) => {
    return changesininput(e.target.value);
  };
  return (
    <input type="text" placeholder="enter..." value={input} onChange={changes} />
  );
};
export default App;
