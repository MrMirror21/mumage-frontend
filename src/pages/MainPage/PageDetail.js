import { AiOutlineHeart } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const genre = "K-Pop";
    const title = "Fry's Dream";
    const context = "나만의 길을 찾고 싶다";
    const heart = 304;
    return (
        <>
            <Sticky>
                <TopSection>
                    <IoMdArrowBack style={{
                        width: "2em",
                        height: "2em",
                        marginLeft: "8px",
                    }}
                        onClick={() => navigate('/')} />
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                        MUMAGE
                    </div>
                    <div></div>
                </TopSection>

            </Sticky>
            <Frame>
                <Div>
                    <div>
                        <ProfileImg src="https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg?w=900" />
                    </div>
                    <div style={{ marginBottom: "5px" }}>{params.authorName}</div>
                </Div>
                <Img src={`https://picsum.photos/id/${params.imgId}/${params.width}/${params.height}`} alt='icon' />
            </Frame>
            <div>
                <HeadComment>
                    {context}
                </HeadComment>
                <GenreInfo>
                    <div style={{ fontStyle: "italic" }}>#{genre}</div>
                </GenreInfo>
                <HeartInfo>
                    <AiOutlineHeart style={{ width: "2em", height: "2em" }} />
                    <div>{heart}</div>
                </HeartInfo>
                <SongInfo>
                    <div style={{ fontStyle: "italic" }}>Song Title: {title}</div>
                </SongInfo>
            </div>
        </>
    );
}

export default PageDetail;

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
`

const Frame = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    padding: 0.5em 0em 0.5em 0em;
    margin-top: 20px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 2em;
    
&:hover {
        background: #404040;
        cursor: pointer;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: flex-start;
    gap: 20px;
`

const ProfileImg = styled.img`
    margin-left: 10px;
    object-fit: cover;
    border-radius: 10em;
    width: 1.5em;
    height: 1.5em;
    border: 2px solid #000;
`

const Sticky = styled.div`
    position:sticky;
    top:0;
    text-align:center;
`

const HeadComment = styled.div`
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
`

const GenreInfo = styled.div`
    display: block;
    padding: 3px;
    border-radius: 10px;
    width: 80px;
    text-align:center;
    margin-left: 5px;
    margin-top: 10px;
    background: #BDBDBD;
`

const HeartInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const SongInfo = styled.div`
    display: block;
    padding: 3px;
    text-align:center;
    margin-left: 5px;
    margin-top: 50px;
    margin-bottom: 25px;
`