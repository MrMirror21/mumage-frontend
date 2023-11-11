
import styled from "styled-components";

const FavoriteGenre = () => {
    //fetch data and get chosen Genre
    return (
        <>
            <Genre>
                <Ggenre>#Rock</Ggenre>
                <Ggenre>#HipHop</Ggenre>
                <Ggenre>#RnB</Ggenre>
            </Genre>

        </>
    );
}

export default FavoriteGenre;


const Genre = styled.div`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin-top: 10px;
            `

const Ggenre = styled.div`

    border-bottom: 3px solid #aaa;
    line-height: 2em;
    width: 100px;
`