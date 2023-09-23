import React, {useState} from 'react'
import Select from 'react-select';

const options = [
    {value : '종합', label : '종합'},
    {value : '발라드', label : '발라드'},
    {value : '댄스', label : '댄스'}
  ]

const SelectBox = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleChange = (option) => {
    setSelectedOption(option);
  }
  return (
    <div>
      <Select id="selectBox"
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />

    </div>
  )
}

export default SelectBox;
