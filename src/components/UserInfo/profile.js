import { GiHamburgerMenu } from 'react-icons/gi';

//import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getSavedProfileImage } from '../../utils/FetchDataRecoil';

import styled from "styled-components";
import FavoriteGenre from "../Features/genre";
import MyMenu from './myMenu';
import EditProfile from '../../pages/MyPage/EditProfile';

const Profile = ({ width }) => {
    const navigate = useNavigate();

    const [isSideOpen, setIsSideOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imgSrc = useRecoilValue(getSavedProfileImage);
    const defaultImg = "https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg?w=900";
    //user에 대한 정보를 여기서 받아와서 다 해결
    return (
        <Row>
            <div>
                <div style={{ marginBottom: "10px" }}>User's Id</div>
                {imgSrc ? <ProfileImg src={imgSrc} alt="profileImg" />
                    : <ProfileImgD src={defaultImg} alt="profileImg" />}


                <div>UserName</div>
            </div>
            <div>
                <MainIcon onClick={() => navigate('/')}>MUMAGE</MainIcon>
                <div>
                    <Row2>
                        <div>
                            <div>Posts</div>
                            <div>0</div>
                        </div>
                        <div>
                            <div>Followers</div>
                            <div>957</div>
                        </div>
                        <div>
                            <div>Following</div>
                            <div>1063</div>
                        </div>
                    </Row2>
                </div>
                <div>
                    <FavoriteGenre />
                </div>

            </div>
            <div>
                <GiHamburgerMenu style={{ width: "2em", height: "2em" }} onClick={() => setIsSideOpen(!isSideOpen)} />
            </div>
            {isSideOpen ? <MyMenu setIsModalOpen={setIsModalOpen} setIsSideOpen={setIsSideOpen} width={width} /> : null}
            <EditProfile modalIsOpen={isModalOpen} setModalIsOpen={setIsModalOpen} setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />

        </Row>
    );
}

export default Profile;


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

const ProfileImg = styled.img`
    border-radius: 10em;
    width: 4em;
    height: 4em;
`
const ProfileImgD = styled.img`
    border-radius:1em;
    width: 5em;
    height: 3em;
`
//border: 1.5px solid #262626;