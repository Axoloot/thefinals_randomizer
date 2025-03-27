import { useState } from 'react';
import { SelectWrapper, StyledSelect, OptionsList, OptionItem } from './styles';

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
      <OptionsList $visible={isOpen}>
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
