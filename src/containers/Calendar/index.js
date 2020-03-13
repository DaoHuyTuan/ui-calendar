import React, { useRef } from "react";
import useClickOutSide from "../../hook/useClickOutSide";
const Calendar = ({ children }) => {
  const calendarRef = useRef(null);
  const { isFocus, onClickAway } = useClickOutSide(calendarRef);
  return (
    <div className="calendar" onClick={onClickAway} ref={calendarRef}>
      {children}
    </div>
  );
};

export default Calendar;
