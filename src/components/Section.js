import React, {useState} from 'react'
import SelectBox from './SelectBox'
import {FakeDataArr} from '../store/FakeDataArr'

const Section = () => {
  const [sectionValue, setSectionValue] = useState('종합');

  const matchedData = FakeDataArr.filter(data => data["장르"] === sectionValue);

  return (
    <div>
      <SelectBox onChange = {(value) => setSectionValue(value)} />
      {matchedData.map(data => (data["내용"]))}
    </div>
  )
}

export default Section;