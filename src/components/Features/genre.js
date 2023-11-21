import styled from "styled-components";

const FavoriteGenre = ({ genreList }) => {
    const display = genreList[0] === "" && genreList["genres"][1] === "" && genreList["genres"][2] === "" ? null :
        genreList.map((g, i) => (
            g === "" ? null :
                <Ggenre key={i}>#{g}</Ggenre>
        ))
    //fetch data and get chosen Genre <div key={post.id} className="post">
    return (
        <Genre>
            {display}
        </Genre>
    )
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
