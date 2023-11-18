import { GiHamburgerMenu } from 'react-icons/gi';

//import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getSavedProfileImage } from '../../utils/FetchDataRecoil';

import { ReactComponent as DefaultProfile } from "../../assets/Profile.svg";
import styled from "styled-components";
import FavoriteGenre from "../Features/genre";
import MyMenu from './myMenu';
import EditProfile from '../../pages/MyPage/EditProfile';

const Profile = ({ width }) => {

    const [isSideOpen, setIsSideOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imgSrc = useRecoilValue(getSavedProfileImage);
    //user에 대한 정보를 여기서 받아와서 다 해결

    const UserInfo = {
        "userID": "Joonyjin_",
        "UserName": "Hyungjoon Jin",
        "User Profile": "",
        "Followers": [
            { "followerId": 2 },
            { "followerId": 3 },
        ],
        "Follows": [
            { "followId": 2 },
            { "followId": 3 },
        ],
    }
    const UserProfile = imgSrc === "" ? <DefaultProfile style={{ width: "4em", height: "4em", borderRadius: "5em" }} />
        : <ProfileImg src={imgSrc} />;
    return (
        <Column>
            <BasicWrapper style={{ fontStyle: "italic" }}>@{UserInfo.userID}</BasicWrapper>
            <GiHamburgerMenu style={{ width: "2em", height: "2em", position: "absolute", right: "2em", top: "2em", color: "#696969" }} onClick={() => setIsSideOpen(!isSideOpen)} />
            <BasicWrapper>{UserProfile}</BasicWrapper>
            <BottomLineLeft /> <BottomLineRight />
            <BasicWrapper>
                <UserName>{UserInfo.UserName}</UserName>
            </BasicWrapper>
            <BasicWrapper>
                <FollowInfo style={{ gap: "10px" }}>
                    <div style={{ fontWeight: "bold" }}>{UserInfo["Followers"].length}</div>
                    <div style={{ color: "#BDBDBD" }}>Follower</div>
                </FollowInfo>
                <FollowInfo style={{ gap: "10px" }}>
                    <div style={{ fontWeight: "bold" }}>{UserInfo["Follows"].length}</div>
                    <div style={{ color: "#BDBDBD" }}>Following</div>
                </FollowInfo>
            </BasicWrapper>
            <GenreContainer>
                <FavoriteGenre />
            </GenreContainer>


            {isSideOpen ? <MyMenu setIsModalOpen={setIsModalOpen} setIsSideOpen={setIsSideOpen} width={width} /> : null}
            <EditProfile modalIsOpen={isModalOpen} setModalIsOpen={setIsModalOpen} setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />

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

const MainIcon = styled.div`
    width: auto;
    border: 1.5px solid #262626;
    border-radius: 2em;
    background: #262626;
    color: #FFF;
`

const Row = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    text-align: center;
    margin-top: 20px;
    
    
`
const Row2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-top: 25px;
`

const GenreContainer = styled.div`
    display: flex;
    align-itmes: center;
    justify-content: center;
`


const ProfileImgD = styled.img`
    border-radius:1em;
    width: 5em;
    height: 3em;
`
//border: 1.5px solid #262626;