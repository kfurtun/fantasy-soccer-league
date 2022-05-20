import React from "react";
import styled from "styled-components";

export const ShowWeeks = ({
  setSelectedWeek,
  selectedWeek,
  setGameIds,
  shouldResetIds,
  setGames,
  setPoints,
  setAllUsers,
}) => {
  const weeks = [];
  for (let i = 1; i <= 38; i++) {
    weeks.push(i);
  }

  const handleSelect = (e) => {
    setSelectedWeek(e.target.value);
    if (shouldResetIds) {
      setGameIds([]);
      setGames([]);
      setPoints(0);
      setAllUsers([]);
    }
  };
  return (
    <Select onChange={handleSelect} defaultValue={selectedWeek}>
      {weeks.map((week) => (
        <option key={week}>{week}</option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  width: 4vw;
  height: 2vw;
  color: white;
  text-align: center;
  overflow: auto;
  overflow-x: hidden;
  background: var(--primary-color);
  border-radius: var(--border-radius);
  &::-webkit-scrollbar {
    width: 0.5vw;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color-hover);
  }
`;
