import styled from "styled-components";
import FavoriteGenre from "../Features/genre";
const Profile = () => {
    //user에 대한 정보를 여기서 받아와서 다 해결
    return (
        <Row>
            <div>
                <div style={{ marginBottom: "10px" }}>User's Id</div>
                <ProfilePic src="https://th.bing.com/th/id/OIP.Nen6j3vBZdl8g8kzNfoEHQAAAA?pid=ImgDet&rs=1" />
                <div>UserName</div>
            </div>
            <div>
                MUMAGE
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
                <FavoriteGenre />
            </div>
            <div>
                <MenuIcon src="https://th.bing.com/th/id/OIP.ES8Hv-V7VohDMqblFnbpagHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="menu" />
            </div>
        </Row>
    );
}

export default Profile;

const ProfilePic = styled.img`
    border-radius: 20px;
    width: 4em;
    height: 4em;
    margin-left:auto;
    margin-right:auto;
`
const MenuIcon = styled.img`
    width: 1.7em;
    height: 1.5em;
    
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

//border: 1.5px solid #262626;