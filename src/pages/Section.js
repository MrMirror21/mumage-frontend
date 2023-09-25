import React, {useState} from 'react'
import StyledSelectBox from './StyledSelectBox'

const Section = () => {
  const [sectionValue, setSectionValue] = useState('종합');

  return (
    <div>
      <StyledSelectBox onChange = {(value) => setSectionValue(value)} />
      <>{sectionValue}</>
    </div>
  )
}

export default Section;
