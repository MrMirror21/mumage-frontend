import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GrDocumentSound } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { getMyFeed } from "../../utils/FetchDataRecoil";

const MyFeed = ({ gridColumns }) => {
    const navigate = useNavigate();
    const postsList = useRecoilValue(getMyFeed);

    return (
        <Fr>
            {postsList.length !== 0 ?
                <Row style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
                    {postsList.map((post) => (
                        <div key={post["postId"]} className="post">
                            <FeedImg
                                src={post.imageUrl}
                                alt={`Post by ${post.username}`}
                                onClick={() => navigate(`/imgDetail/${post.postId}`)} />
                        </div>
                    ))}
                </Row> :
                <EmptyPage>
                    <GrDocumentSound size="8em" color="#BDBDBD" />
                    <div style={{ color: "#BDBDBD", fontSize: "25px", fontStyle: "italic" }}>No Feed</div>
                </EmptyPage>
            }

        </Fr>
    );
}

export default MyFeed;

const Row = styled.nav`
    display: grid;
    text-align: center;
    align-items: center;
    gap: 20px;
`
const Fr = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    
`
//grid - template - columns: 1fr 1fr 1fr 1fr;

const FeedImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    align-items: center;
    border-radius: 10px;
`

const EmptyPage = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em;
    background-color: #F6F7F9;
`