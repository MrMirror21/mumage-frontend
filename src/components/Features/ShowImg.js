import styled from "styled-components";
import { useNavigate } from "react-router";

const ShowImg = ({imgUrl,imgId, width, height, authorName}) => {
    const navigate = useNavigate();

    return (
        <>
            <Div>{authorName}</Div>
            <Img 
                src={imgUrl} 
                key={imgId} 
                alt='icon'
                onClick={() => {navigate(`/imgDetail/${imgId}/${width}/${height}/${authorName}`)}}
            />
        </>
    )
}
 
export default ShowImg;


const Img = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    border: 1.5px solid #262626;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-bottom: 2em;
    
&:hover {
        background: #404040;
        cursor: pointer;
    }
`

const Div = styled.div`
    width: 500px;
    background:#262626;
    color:#FFFFFF;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: 1.5px solid #262626;
    text-align:center;
`