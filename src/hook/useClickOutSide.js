import { useState } from "react";
const useClickOutSide = () => {
  const [isFocus, setIsFocus] = useState(false);
  const onClickOutSide = () => {};
  return {
    isFocus,
    onClickOutSide
  };
};

export default useClickOutSide;
