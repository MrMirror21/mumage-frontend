import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userInfo, postsState } from "../../utils/FetchDataRecoil";
import { useNavigate } from "react-router-dom";
import { GrDocumentSound } from "react-icons/gr";

const MyLiked = ({ gridColumns }) => {
    const navigate = useNavigate();

    const user = useRecoilValue(userInfo);
    const posts = useRecoilValue(postsState);

    const postsList = posts.filter((post) => {
        return user["liked"].some((likedPostId) => {
            return post["postId"] === likedPostId["postId"]
        })
    })


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

export default MyLiked;

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
    margin-top: 10px;

    padding: 20px 20px 20px 20px;
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
    padding: 6em;
    background-color: #F6F7F9;
`