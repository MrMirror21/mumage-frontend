import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { getFavoriteGenre } from "../../utils/FetchDataRecoil";

const FavoriteGenre = () => {

    const genres = useRecoilValue(getFavoriteGenre);
    const display = (genres[0] === "" || genres[0] === " ") ? <Nothing>Write your Favorite Genres!</Nothing> : <Genre>
        {genres.map((g, i) => (
            <Ggenre key={i}>#{g}</Ggenre>
        ))}
    </Genre>;
    //fetch data and get chosen Genre <div key={post.id} className="post">
    return display;
}

export default FavoriteGenre;


const Genre = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 10px;
    margin-top: 10px;
    gap: 10px;
`

const Ggenre = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 100%;
    color: #5151C6;
    background-color: #F1F1FE;
    border-radius: 10px;
`

const Nothing = styled.div`
    color: #696969;
    border-bottom: 3px solid #aaa;
    line-height: 2em;
    width: 210px;
`
