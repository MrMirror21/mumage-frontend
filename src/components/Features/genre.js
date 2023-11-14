import { useState } from "react";
import styled from "styled-components";

const FavoriteGenre = () => {
    const [genreList, setGenreList] = useState([
        {
            "genre": "#Rock"
        },
        {
            "genre": "#HipHop"
        },
        {
            "genre": "#RnB"
        },
    ]);
    //fetch data and get chosen Genre <div key={post.id} className="post">
    return (
        <Genre>
            {genreList.map((g, i) => (
                <Ggenre key={i}>{g.genre}</Ggenre>
            ))}
        </Genre>
    );
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
