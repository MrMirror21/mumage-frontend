import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SectionBar = ({index, onClickHandler}) => {
  return (
    <>
      <Sticky>
          <MenuSection className='following'>
              <Link to='/' className='link'>
                  <MenuSectionDetail
                      onClick={() => onClickHandler(1)}
                      style={{
                          background: index === 1 ? "#F1F1FE" : "white",
                          color: index === 1 ? "#5151C6" : "#BDBDBD",
                          pointerEvents: index === 1 ? "none" : "visible",
                      }}
                      aria-disabled={index === 1}
                  >
                      Following
                  </MenuSectionDetail>
              </Link>
              <Link to='/Explore' className='link'>
                  <MenuSectionDetail
                      onClick={() => onClickHandler(2)}
                      style={{
                          background: index === 2 ? "#F1F1FE" : "white",
                          color: index === 2 ? "#5151C6" : "#BDBDBD",
                          pointerEvents: index === 2 ? "none" : "visible",
                      }}
                  >
                      Recommend
                  </MenuSectionDetail>
              </Link>
          </MenuSection>
      </Sticky>    
    </>
  )
}

export default SectionBar

const Sticky = styled.div`
    position:sticky;
    top:0;
`

const MenuSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #FFF;
    .link{
        width: 100%;
        text-align: center;
        border-radius: 10px;
    }
`

const MenuSectionDetail = styled.div`
    padding: 10px;

    width: 100%;
    text-align: center;
    background-color: #F1F1FE;
    border-radius: 10px;
`