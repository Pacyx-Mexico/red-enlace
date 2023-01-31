import { useEffect, useState } from "react";

function useCurrentDate() {
  const fullDate = new Date();
  const currentDay = fullDate.getDate();
  const currentMonth = fullDate.getMonth() + 1;
  const [day, setDay] = useState("00");
  const [month, setMonth] = useState("00");
  const currentDate = `${fullDate.getFullYear()}-${month}-${day}`;

  const validationDay = () => {
    if (currentDay === 1) {
      setDay("01");
    } else if (currentDay === 2) {
      setDay("02");
    } else if (currentDay === 3) {
      setDay("03");
    } else if (currentDay === 4) {
      setDay("04");
    } else if (currentDay === 5) {
      setDay("05");
    } else if (currentDay === 6) {
      setDay("06");
    } else if (currentDay === 7) {
      setDay("07");
    } else if (currentDay === 8) {
      setDay("08");
    } else if (currentDay === 9) {
      setDay("09");
    } else {
      setDay(currentDay.toString());
    }
  };
  const validationMonth = () => {
    if (currentMonth === 1) {
      setMonth("01");
    } else if (currentMonth === 2) {
      setMonth("02");
    } else if (currentMonth === 3) {
      setMonth("03");
    } else if (currentMonth === 4) {
      setMonth("04");
    } else if (currentMonth === 5) {
      setMonth("05");
    } else if (currentMonth === 6) {
      setMonth("06");
    } else if (currentMonth === 7) {
      setMonth("07");
    } else if (currentMonth === 8) {
      setMonth("08");
    } else if (currentMonth === 9) {
      setMonth("09");
    } else {
      setMonth(currentMonth.toString());
    }
  };

  useEffect(() => {
    validationDay();
    validationMonth();
  }, []);

  return currentDate;
}

export default useCurrentDate;
