import React, {useState} from 'react'
import SelectBox from './SelectBox'

const Section = () => {
  const [sectionValue, setSectionValue] = useState('종합');

  return (
    <div>
      <SelectBox onChange = {(value) => setSectionValue(value)} />
      <>{sectionValue}</>
    </div>
  )
}

export default Section;
