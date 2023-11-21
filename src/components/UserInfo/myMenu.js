import { useNavigate } from 'react-router-dom';

import { AiFillSetting } from 'react-icons/ai';
import { BiUserCircle, BiArrowBack } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import styled from "styled-components";

const MyMenu = ({ openModal, setIsSideOpen, width }) => {
    const navigate = useNavigate();

    const handleNavigationSelect = (selectedItemId) => {
        if (selectedItemId === '/editProfile') {
            openModal();
        }
        else {
            navigate(selectedItemId);
        }
    };
    return (
        <Menu style={{ width: width, transitionTimingFunction: "ease-in" }}>
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/SideNavigationBar"
                onSelect={({ itemId }) => {
                    itemId === '/myPage' ? setIsSideOpen(false) : handleNavigationSelect(itemId);
                }}
                items={[
                    {
                        title: '돌아가기',
                        itemId: '/myPage',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <BiArrowBack style={{ width: "1.7em", height: "1.7em" }} />,
                    },
                    {
                        title: '내 프로필 편집',
                        itemId: '/editProfile',
                        elemBefore: () => <BiUserCircle style={{ width: "1.7em", height: "1.7em" }} />,


                    },
                    {
                        title: '설정',
                        itemId: '/settings',
                        elemBefore: () => <AiFillSetting style={{ width: "1.7em", height: "1.7em" }} />
                    },
                    {
                        title: 'Contact Us',
                        itemId: '/contactUs',
                        elemBefore: () => <MdContactMail style={{ width: "1.7em", height: "1.7em" }} />
                    },
                ]}
            />
        </Menu>
    );
}

export default MyMenu;

const Menu = styled.div`
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #FFF;
    overflow-x: hidden;
    padding-top: 60px;   
`