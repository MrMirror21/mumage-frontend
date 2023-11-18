import styled from "styled-components";
import { useState } from "react";

const MyFeed = ({ gridColumns }) => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            username: 'john_doe',
            imageUrl: 'https://placekitten.com/300/200',
            likes: 120,
            comments: [
                { id: 1, username: 'mary', text: 'Cute kitty!' },
                { id: 2, username: 'jane', text: 'Love it! 😻' },
            ],
        },
        {
            id: 2,
            username: 'john_doe',
            imageUrl: 'https://placekitten.com/300/200',
            likes: 120,
            comments: [
                { id: 1, username: 'mary', text: 'Cute kitty!' },
                { id: 2, username: 'jane', text: 'Love it! 😻' },
            ],
        },
        {
            id: 3,
            username: 'john_doe',
            imageUrl: 'https://placekitten.com/300/200',
            likes: 120,
            comments: [
                { id: 1, username: 'mary', text: 'Cute kitty!' },
                { id: 2, username: 'jane', text: 'Love it! 😻' },
            ],
        },
        {
            id: 4,
            username: 'john_doe',
            imageUrl: 'https://placekitten.com/300/200',
            likes: 120,
            comments: [
                { id: 1, username: 'mary', text: 'Cute kitty!' },
                { id: 2, username: 'jane', text: 'Love it! 😻' },
            ],
        },
        {
            id: 5,
            username: 'john_doe',
            imageUrl: 'https://placekitten.com/300/200',
            likes: 120,
            comments: [
                { id: 1, username: 'mary', text: 'Cute kitty!' },
                { id: 2, username: 'jane', text: 'Love it! 😻' },
            ],
        },// Add more posts as needed
    ]);

    return (
        <Fr>
            <Row style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)`, gridColumn: '2/3' }}>
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <FeedImg src={post.imageUrl} alt={`Post by ${post.username}`} />
                    </div>
                ))}
            </Row>
        </Fr>
    );
}

export default MyFeed;

const Row = styled.nav`
    display: grid;
    text-align: center;
    align-items: center;
    
`
const Fr = styled.nav`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    text-align: center;
    align-items: center;
    margin-top: 50px;
    
`
//grid - template - columns: 1fr 1fr 1fr 1fr;

const FeedImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    align-items: center;
    margin-top: -4px;
`