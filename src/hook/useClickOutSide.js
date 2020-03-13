import { useState, useEffect } from "react";
const useClickOutSide = ref => {
  const [isFocus, setIsFocus] = useState(false);
  const onClickAway = () => {
    setIsFocus(prevState => !prevState);
  };
  useEffect(() => {
    if (isFocus) {
      console.log(ref);
      document.addEventListener("click", setIsFocus(false));
    }
    return () => {
      console.log(ref);
      document.removeEventListener("click", setIsFocus(false));
    };
  }, [isFocus, ref]);
  return {
    isFocus,
    onClickAway
  };
};

export default useClickOutSide;
