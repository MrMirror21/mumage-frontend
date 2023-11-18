import React from 'react'
import Select from 'react-select';
import styled from 'styled-components';
import { selectBoxValueState } from '../utils/DataRecoilState';
import {useRecoilState} from 'recoil';

const options = [
    {value : '종합', label : '종합'},
    {value : '발라드', label : '발라드'},
    {value : '댄스', label : '댄스'}
  ]

const SelectBox = ({onChange, className}) => {
  const [selectedOption, setSelectedOption] = useRecoilState(selectBoxValueState);
  const handleChange = (option) => {
    setSelectedOption(option);
    if (typeof onChange === 'function') {
      onChange(option.value);
    }
  }
  const customStyles = {
    control: (styles) => ({
      ...styles,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    }),
    menu: (styles) => ({
      ...styles,
      background: 'transparent', 
      border: 'none',
      boxShadow: 'none'
    }),
    option: (provided, state) => ({
      ...provided,
      opacity: 0.6,
      textAlign: 'center',
      fontWeight: 700,
      background: 'var(--Primary, linear-gradient(271deg, #888BF4 0%, #5151C6 100%))',
      padding: '16px',
      marginBottom: '5px',
      borderRadius: '10px',
      color:'white',
      ':hover': {
        opacity: 1,
      },
    })
  };
  
  return (
    <StyledSelectBox className = {className}>
      <div>
        <Select 
          value={selectedOption}
          onChange={handleChange}
          options={options}
          styles={customStyles}
        />
      </div>

    </StyledSelectBox>
  )
}

export default SelectBox;

const StyledSelectBox = styled.div`
  padding-top : 7px;
  width: 100%;
  padding: 8px;
  border-radius: 15px;
  background: var(--Primary, linear-gradient(271deg, #888BF4 0%, #5151C6 100%));
  align-self: center;
  cursor: pointer;
`;