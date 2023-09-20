import {React, useState, useEffect} from 'react'
import styled from 'styled-components'

const Section = () => {
    const [loading, setLoading] = useState(true);
    const [img, setImg] = useState();
    const getImage = async() => {
        const imgurl = await (
            await fetch('https://picsum.photos/200')
        ).blob();
        const imageObjectUrl = URL.createObjectURL(imgurl);
        setLoading(false);
        setImg(imageObjectUrl);
    }

    useEffect(() => {
        getImage();
    },[])

    return ( 
        <div>
            {loading ? <h1>loading...</h1> : 
                <div> 
                    <img src={img} alt='icons'></img>
                </div>}
        </div>
    )
}

export default Section;