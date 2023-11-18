import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { getFavoriteGenre } from "../../utils/FetchDataRecoil";
import { useEffect } from "react";

const FavoriteGenre = () => {

    const genres = useRecoilValue(getFavoriteGenre);
    useEffect(() => {
        console.log(genres);
    }, [genres]);
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
            `

const Ggenre = styled.div`
    display: grid;
    text-align: center;
    align-items: center;
    border-bottom: 3px solid #aaa;
    line-height: 2em;
    width: 100px;
    
`

const Nothing = styled.div`
    color: #696969;
    border-bottom: 3px solid #aaa;
    line-height: 2em;
    width: 210px;
`
