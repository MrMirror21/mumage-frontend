import styled from "styled-components";
const ShowImg = ({imgUrl,imgId}) => {
    return <Img src={imgUrl} key={imgId} alt='icon' />
}
 
export default ShowImg;


const Img = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    border: 1.5px solid #262626;
    border-radius: 8px;
    margin-bottom: 2em;
`