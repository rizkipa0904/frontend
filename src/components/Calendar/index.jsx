import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());
  return <Calendar value={value} />;
};

export default CustomCalendar;
