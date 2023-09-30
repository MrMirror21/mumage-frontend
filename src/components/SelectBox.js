import React, {useState} from 'react'
import Select from 'react-select';
import styled from 'styled-components';

const options = [
    {value : '종합', label : '종합'},
    {value : '발라드', label : '발라드'},
    {value : '댄스', label : '댄스'}
  ]

const SelectBox = ({onChange, className}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  
  const handleChange = (option) => {
    setSelectedOption(option);
    if (typeof onChange === 'function') {
      onChange(option.value);
    }
  }
  return (
    <StyledSelectBox className = {className}>
      <Select 
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />

    </StyledSelectBox>
  )
}

export default SelectBox;

const StyledSelectBox = styled.div`
  padding-top : 7px;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;