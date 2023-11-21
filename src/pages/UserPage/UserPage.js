import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { postsDataState, usersDataState } from "../../store/ServerData";

import styled from "styled-components";
import { useRecoilState } from "recoil";
import FavoriteGenre from "../../components/Features/genre";
import { GrDocumentSound } from "react-icons/gr";
import { IoMdArrowBack } from "react-icons/io";
import { userInfo } from "../../utils/FetchDataRecoil";

const UserPage = () => {

    //-----------------------------------------------------------------------//
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [gridColumns, setGridColumns] = useState(3);
    const [width, setWidth] = useState("0%");
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowWidth >= 1000) {
            setGridColumns(5);
            setWidth("25%");
        } else if (windowWidth >= 700 && windowWidth < 1000) {
            setGridColumns(3)
            setWidth("35%");
        }
        else {
            setGridColumns(2);
            setWidth("45%");
        }
    }, [windowWidth]);

    //----------------------------------------------------------------------//

    const params = useParams();
    const userIdentifier = params.userId;

    const [users, setUsers] = useRecoilState(usersDataState);
    const [posts, setPosts] = useRecoilState(postsDataState);

    const userOther = users[userIdentifier - 1];
    const postsList = posts.filter((post) => {
        return post["userId"] === userOther["userId"]
    })

    const Profile = userOther["profileUrl"];
    const UserProfile = typeof (userOther["profileUrl"]) === 'string' ? <ProfileImg src={userOther["profileUrl"]} alt="profileImg" />
        : <Profile style={{
            borderRadius: "10em",
            width: "5em",
            height: "5em",
            objectFit: "cover",
        }} />;

    const navigate = useNavigate();

    //----------------------------------------------------------------------//
    const [userOwn, setUserOwn] = useRecoilState(userInfo)
    const iFollow = () => {
        return userOwn["follows"].some((followList) => followList["followId"] === parseInt(userIdentifier));
    }
    const followHandler = () => {
        console.log(iFollow());
        if (iFollow()) {
            setUsers((prev) => {
                return prev.map((p) => {
                    if (p["userId"] === userOwn["userId"]) {
                        const followList = p["follows"].filter((i) => i["followId"] !== parseInt(userIdentifier));
                        return {
                            ...p,
                            "follows": followList,
                        }
                    } else if (p["userId"] === userOther["userId"]) {
                        const followerList = p["followers"].filter((i) => i["followerId"] !== userOwn["userId"]);
                        return {
                            ...p,
                            "followers": followerList
                        }
                    }
                    return p;
                });
            })
            setUserOwn((prev) => {
                const followList = prev["follows"].filter((i) => {
                    return i["followId"] !== parseInt(userIdentifier);
                })
                return {
                    ...prev,
                    "follows": followList,
                }
            })
        } else {
            setUsers((prev) => {
                return prev.map((p) => {
                    if (p["userId"] === userOwn["userId"]) {
                        const followList = [...p["follows"], { "followId": parseInt(userIdentifier) }];
                        return {
                            ...p,
                            "follows": followList,
                        }
                    } else if (p["userId"] === userOther["userId"]) {
                        const followerList = [...p["followers"], { "followerId": userOwn["userId"] }];
                        return {
                            ...p,
                            "followers": followerList,
                        }
                    }
                    return p;
                });
            })
            setUserOwn((prev) => {
                const followList = [...prev["follows"], { "followId": parseInt(userIdentifier) }];
                return {
                    ...prev,
                    "follows": followList,
                }
            })
        }
    }
    return (
        <Frame>
            <TopSection>
                <IoMdArrowBack style={{
                    width: "2em",
                    height: "2em",
                    marginLeft: "8px",
                }}
                    onClick={() => navigate(-1)} />
            </TopSection>

            <Column>
                <BasicWrapper style={{ fontStyle: "italic", marginTop: "15px" }}>@{userOther["nickname"]}</BasicWrapper>
                <BasicWrapper>{UserProfile}</BasicWrapper>
                <BottomLineLeft /> <BottomLineRight />
                <BasicWrapper>
                    <UserName>{userOther["name"]}</UserName>
                </BasicWrapper>
                <BasicWrapper>
                    <FollowInfo style={{ gap: "10px" }}>
                        <div style={{ fontWeight: "bold" }}>{userOther["followers"].length}</div>
                        <div style={{ color: "#BDBDBD" }}>Follower</div>
                    </FollowInfo>
                    <FollowInfo style={{ gap: "10px" }}>
                        <div style={{ fontWeight: "bold" }}>{userOther["follows"].length}</div>
                        <div style={{ color: "#BDBDBD" }}>Following</div>
                    </FollowInfo>
                </BasicWrapper>
                <GenreContainer>
                    <FavoriteGenre genreList={userOther["genres"]} />
                </GenreContainer>
            </Column>

            <MenuSection>
                {iFollow() ?
                    <MenuSectionDetail
                        style={{
                            color: "#BDBDBD",
                        }}
                        onClick={followHandler}
                    >following
                    </MenuSectionDetail> :
                    <MenuSectionDetail
                        style={{
                            color: "#5151C6",
                        }}
                        onClick={followHandler}>
                        follow
                    </MenuSectionDetail>
                }
            </MenuSection>

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
        </Frame>
    );
}

export default UserPage;

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const BasicWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    
`

const UserName = styled(BasicWrapper)`
    font-weight: bold;
`

const BottomLineLeft = styled.div`
    border-bottom: solid;
    position: absolute;
    width: 41%;
    top: 6em;
    display: flex;
    color: #BDBDBD;
`
const BottomLineRight = styled.div`
    border-bottom: solid;
    position: absolute;
    width: 41%;
    top: 6em;
    right: 0;
    display: flex;
    color: #BDBDBD;
`

const ProfileImg = styled.img`
    border-radius: 10em;
    width: 5em;
    height: 5em;
    object-fit: cover;
`
const FollowInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    width: 25%;
    height: 30px;
    background: #F6F7F9;
`

const GenreContainer = styled.div`
    display: flex;
    align-itmes: center;
    justify-content: center;
`

const MenuSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;
    background-color: #FFF;
`

const MenuSectionDetail = styled.div`
    padding: 10px;
    width: 25%;
    text-align: center;
    background-color: #F1F1FE;
    border-radius: 15px;
`

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
    margin-top: 0px;
    
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

const TopSection = styled.div`
    position: absolute;
    left : 10px;
    top: 15px;
`