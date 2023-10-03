
import { useNavigate, useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    return ( 
        <>
            <Sticky>
                <Header>MUMAGE</Header>

                <LoginSection>
                    <Link className= 'forLink' to='/Login'>Login</Link>
                    <Link className= 'forLink' to='/signup'>Signup</Link>
                </LoginSection>
                <Button onClick={() => {navigate('/',{
                    state: {
                        pageNum: location.state.pageNum,
                        follow: location.state.follow,
                    }})}}
                >
                    &lt;&lt;
                </Button>
            </Sticky>
            <Div>
                <h2>{params.authorName}'s Feed</h2>
                <Img src={`https://picsum.photos/id/${params.imgId}/${params.width}/${params.height}`} alt = 'icon'/>
                <div style={{marginTop:"4em"}}>Comment Section</div>
            </Div>
        </>
     );
}
 
export default PageDetail;

const Button = styled.button`
    width:100px;
    padding: 10px;
    left: -47%;
    border:none;
    font-size: 0.8em;
    margin-top: 1.5em;
    border-radius:15px;
    background:#262626;
    color: white;
    &:hover {
        background: #404040;
        cursor: pointer;
      }
`

const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:2em;
`
const Img = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    border: 1.5px solid #262626;
    border-radius: 8px;
    margin-bottom: 2em;
    margin-top : 2em;
`

const Header = styled.header`
    font-size:50px;
    text-align:center;
    background: white;
`
const LoginSection = styled.div`
    display:flex;
    flex-direction:row;
    border:none;
    justify-content:right;
    border-radius:15px;
    background:#262626
`

const Sticky = styled.div `
    position:sticky;
    top:0;
    text-align:center;
`