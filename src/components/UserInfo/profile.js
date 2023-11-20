import { GiHamburgerMenu } from 'react-icons/gi';

//import { motion } from 'framer-motion';
import { useState } from 'react';
import { userInfo } from '../../utils/FetchDataRecoil';

import styled from "styled-components";
import FavoriteGenre from "../Features/genre";
import MyMenu from './myMenu';
import EditProfile from '../../pages/MyPage/EditProfile';
import { useRecoilState } from 'recoil';

const Profile = ({ width }) => {
    const [user, setUser] = useRecoilState(userInfo);
    const [isSideOpen, setIsSideOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Profile = user["profileUrl"];
    const UserProfile = typeof (user["profileUrl"]) === 'string' ? <ProfileImg src={user["profileUrl"]} alt="profileImg" />
        : <Profile style={{
            borderRadius: "10em",
            width: "5em",
            height: "5em",
            objectFit: "cover",
        }} />;
    return (
        <Column>
            <BasicWrapper style={{ fontStyle: "italic" }}>@{user["nickname"]}</BasicWrapper>
            <GiHamburgerMenu style={{ width: "2em", height: "2em", position: "absolute", right: "2em", top: "2em", color: "#696969" }} onClick={() => setIsSideOpen(true)} />
            <BasicWrapper>{UserProfile}</BasicWrapper>
            <BottomLineLeft /> <BottomLineRight />
            <BasicWrapper>
                <UserName>{user["name"]}</UserName>
            </BasicWrapper>
            <BasicWrapper>
                <FollowInfo style={{ gap: "10px" }}>
                    <div style={{ fontWeight: "bold" }}>{user["followers"].length}</div>
                    <div style={{ color: "#BDBDBD" }}>Follower</div>
                </FollowInfo>
                <FollowInfo style={{ gap: "10px" }}>
                    <div style={{ fontWeight: "bold" }}>{user["follows"].length}</div>
                    <div style={{ color: "#BDBDBD" }}>Following</div>
                </FollowInfo>
            </BasicWrapper>
            <GenreContainer>
                <FavoriteGenre />
            </GenreContainer>


            {isSideOpen ? <MyMenu setIsModalOpen={setIsModalOpen} setIsSideOpen={setIsSideOpen} width={width} /> : null}
            {isModalOpen ? <EditProfile modalIsOpen={isModalOpen} setModalIsOpen={setIsModalOpen} setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} user={user} setUser={setUser} /> : null}
        </Column>
    );
}

export default Profile;

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
