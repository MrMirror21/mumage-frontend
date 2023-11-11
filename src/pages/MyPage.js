import styled from 'styled-components'
import Profile from '../components/UserInfo/profile';
const MyPage = () => {

    return (
        <Frame>
            <Profile />
        </Frame>
    );
}

export default MyPage;

const DivCol = styled.div`
    display: flex;
    flex-direction: column;
    width:100%
`

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    width:100%
`

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`