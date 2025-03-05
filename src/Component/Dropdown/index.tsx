import React, { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 15em;
  margin: 0.5em;
  margin-left: 15em;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  font-family: 'Saira Extra Condensed', sans-serif;

  @media (max-width: 600px) {
    width: 9em;
  }
`;

const StyledSelect = styled.h1`
  padding: 8px 15px;
  cursor: pointer;
  position: relative;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;

  &.active {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  &:after {
    content: '';
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-color: black transparent transparent transparent;
    position: absolute;
    right: 10px;
  }

  &.active:after {
    border-color: transparent transparent black transparent;
    top: 5px;
  }
`;

const OptionsList = styled.ul<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.62);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0;
  padding: 0;
  font-size: 2em;
  list-style: none;
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 999;
`;

const OptionItem = styled.li`
  padding: 12px 15px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.15s ease-in;

  &:hover {
    background-color: #fff;
    color: black;
  }

  &.selected {
    background-color: #fff;
    color: black;
  }
`;

const Dropdown = ({ options, onSelect, selected }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: any) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <SelectWrapper>
      <StyledSelect
        className={isOpen ? 'active' : ''}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {selected || 'Select an option'}
      </StyledSelect>
      <OptionsList visible={isOpen}>
        {options.map((option: any) => (
          <OptionItem
            key={option}
            className={selected === option ? 'selected' : ''}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </OptionItem>
        ))}
      </OptionsList>
    </SelectWrapper>
  );
};

export default Dropdown;
