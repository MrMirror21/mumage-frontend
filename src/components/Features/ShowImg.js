import styled from "styled-components";
import { useNavigate } from "react-router";
import { AiOutlineHeart } from "react-icons/ai";

const ShowImg = ({ imgUrl, imgId, width, height, authorName }) => {
    const navigate = useNavigate();
    const numOfHearts = "304";
    return (
        <Frame>

            <Div>
                <div>
                    <ProfileImg src="https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg?w=900" />
                </div>
                <div style={{ textAlign: "center" }}>{authorName}</div>
            </Div>
            <Img
                src={imgUrl}
                key={imgId}
                alt='icon'
                onClick={() => { navigate(`/imgDetail/${imgId}/${width}/${height}/${authorName}`) }}
            />
            <DivBot>
                {numOfHearts}
                <AiOutlineHeart style={{ width: "1.5em", height: "1.5em" }} />
            </DivBot>
        </Frame>
    )
}

export default ShowImg;

const Frame = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    padding: 0.5em 0em 0.5em 0em;
    margin-bottom: 10px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
&:hover {
        background: #404040;
        cursor: pointer;
    }
`

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
`

const ProfileImg = styled.img`
    margin-left: 10px;
    object-fit: cover;
    border-radius: 10em;
    width: 1.5em;
    height: 1.5em;
    border: 2px solid #000;
`

const DivBot = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 20px;
    gap: 5px;
`