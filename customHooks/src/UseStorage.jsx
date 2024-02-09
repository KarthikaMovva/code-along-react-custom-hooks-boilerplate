import { useState } from "react";
function useStorage(b) {
  const [input, setinput] = useState(b);

  const recordinputInlocalstorage = (v) => {
    setinput(v);
    localStorage.setItem("input", JSON.stringify(v));
    sessionStorage.setItem("input", JSON.stringify(v));
  };

  return [input, recordinputInlocalstorage];
}
export default useStorage;
