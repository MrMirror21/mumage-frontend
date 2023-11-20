import styled from "styled-components";
import { userInfo } from "../../utils/FetchDataRecoil";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { posts } from "../../store/ServerData";

const MyFeed = ({ gridColumns }) => {
    const navigate = useNavigate();
    const user = useRecoilValue(userInfo);
    return (
        <Fr>
            <Row style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
                {posts.map((post) => (
                    user["userId"] === post["userId"] ?
                        <div key={post["postId"]} className="post">
                            <FeedImg src={post.imageUrl} alt={`Post by ${post.username}`} onClick={() => navigate(`/imgDetail/${post.postId}`)} />
                        </div> : <div key={post["postId"]}></div>
                ))}
            </Row>
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