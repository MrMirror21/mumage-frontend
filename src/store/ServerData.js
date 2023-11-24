import fryDream from "../assets/fry's dream.png";
import smoke from "../assets/smoke.png";
import drama from "../assets/drama.png";
import nowAndThen from "../assets/now and then.png";
import houdini from "../assets/Houdini.png";
import standingNextToYou from "../assets/standing next to you.png";
import perfectNight from "../assets/perfect night.png";
import sayingEndOfUs from "../assets/sayBrokeUp.png";
import fallInFall from "../assets/fallInFall.png"
import notSorry from "../assets/not sorry.png";
import maybeMan from "../assets/maybe man.png";
import dieForYou from "../assets/die 4 you.png";
import superShy from "../assets/super shy.png";
import privateStory from "../assets/privateStory.png";
import { ReactComponent as ProfileIcon } from "../assets/Profile.svg";
import { atom } from 'recoil';

export const usersDataState = atom({
  key: 'server/data/user',
  default: [
    {
      "userId": 1,
      "memberId": "abc1234",
      "password": "abc1234",
      "name": "이리듬",
      "nickname": "리듬이",
      "profileUrl": ProfileIcon,
      "email": "abc1234@gmail.com",
      "genres": [],
      "followers": [ // 팔로워
        { "followerId": 2 },
        { "followerId": 3 },
      ],
      "follows": [ // 팔로우 한 유저
        { "followId": 2 },
        { "followId": 3 },
      ],
      "liked": [ // 좋아요 누른 게시물
        { "postId": 2 }
      ],
    },
    {
      "userId": 2,
      "memberId": "abcd1234",
      "password": "abcd1234",
      "name": "팔레트",
      "nickname": "팔레트",
      "profileUrl": ProfileIcon,
      "email": "abcd1234@gmail.com",
      "genres": [],
      "followers": [
        { "followerId": 1 },
        { "followerId": 3 },
      ],
      "follows": [
        { "followId": 1 },
        { "followId": 3 },
      ],
      "liked": [
        { "postId": 2 }
      ],
    },
    {
      "userId": 3,
      "memberId": "abcde1234",
      "password": "abcde1234",
      "name": "이리듬",
      "nickname": "리듬이",
      "profileUrl": ProfileIcon,
      "email": "abc1234@gmail.com",
      "genres": [],
      "followers": [
        { "followerId": 2 },
        { "followerId": 3 },
      ],
      "follows": [
        { "followId": 2 },
        { "followId": 3 },
      ],
      "liked": [
        { "postId": 2 }
      ],
    },
  ]
})


export const postsDataState = atom({
  key: 'server/data/post',
  default: [
    {
      "postId": 1, // 게시물 id
      "userId": 1, // 작성자의 사용자 id
      "nickname": "이리듬",
      "genre": ["k-pop"],
      "title": "후라이의 꿈", // 곡 제목, 게시글 제목이 아님.
      "artist": "Lee Soo Hyun",
      //30초 미리 듣기 url, <audio> 태그에 src로 입력하면 재생 가능
      "trackUrl": "https://p.scdn.co/mp3-preview/89982dfa4f2b2b1dc930c28fb5d22b0e2d0e9e7f?cid=613834041d6342f8b26d78e730c2c746",
      //생성된 image의 url, 서버 더미 데이터의 경우 png 파일
      "externalUrl" : "https://open.spotify.com/track/6f4CAdAmrOfGH3FOfwHMSV",
      "imageUrl": fryDream,
      // 게시글에 들어갈 글 내용
      "context": "나만의 길을 찾고 싶다",
      "liked": 24,
    },
    {
      "postId": 2,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-rap", "korean r&b"],
      "title": "Smoke (Prod. Dynamicduo, Padi)",
      "artist": "Dyamic Duo",
      "trackUrl": "https://p.scdn.co/mp3-preview/967cf905ef99b85bd19276c4e0c9ef4358f29778?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/1qRfAvzRIJQodWKBNFAb6C",      
      "imageUrl": smoke,
      "context": "달리거나 넘어지거나 둘 중에 하나",
      "liked": 46,
    },
    {
      "postId": 3,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-pop"],
      "title": "Drama",
      "artist": "Aespa",
      "trackUrl": "https://p.scdn.co/mp3-preview/a3d57978f4a877124d87238ed9b5217f45cd95c5?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/5XWlyfo0kZ8LF7VSyfS4Ew",            
      "imageUrl": drama,
      "context": "에스파 신곡 미쳤다!!",
      "liked": 88,
    },
    {
      "postId": 4,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["british invasion", "classic rock", "merseybeat", "psychedelic rock", "rock"],
      "title": "Now and Then",
      "artist": "Beatles",
      "trackUrl": "",
      "externalUrl" : "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
      "imageUrl": nowAndThen,
      "context": "옛날 생각이 나네요",
      "liked": 0,
    },
    {
      "postId": 5,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["dance pop", "pop", "uk pop"],
      "title": "Houdini",
      "artist": "Dua Lipa",
      "trackUrl": "https://p.scdn.co/mp3-preview/df4af86970ffb1a7042d1d228bcea7b4aabfdba4?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/4OMJGnvZfDvsePyCwRGO7X",    
      "imageUrl": houdini,
      "context": "",
      "liked": 70,
    },
    {
      "postId": 6,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-pop"],
      "title": "Standing Next to You",
      "artist": "Jung Kook",
      "trackUrl": "https://p.scdn.co/mp3-preview/b1cac49f0f6043eae3a0c0557fe16a9579fbc519?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/2KslE17cAJNHTsI2MI0jb2",    
      "imageUrl": standingNextToYou,
      "context": "",
      "liked": 23,
    },
    {
      "postId": 7,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-pop"],
      "title": "Perfect Night",
      "artist": "LE SSERAFIM",
      "trackUrl": "https://p.scdn.co/mp3-preview/4e84e2dc9edab896f88263c634e88f39a6db61e1?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/74X2u8JMVooG2QbjRxXwR8",         
      "imageUrl": perfectNight,
      "context": "",
      "liked": 69,
    },
    {
      "postId": 8,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-pop ballad"],
      "title": "Let's Say Goodbye",
      "artist": "Park Jae Jung",
      "trackUrl": "https://p.scdn.co/mp3-preview/55878d433b375e41b0fdde2f5fded09c88898ba4?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/2KNEK9rGKQKKNE6FTt8PvQ",         
      "imageUrl": sayingEndOfUs,
      "context": "",
      "liked": 77,
    },
    {
      "postId": 9,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-pop ballad"],
      "title": "Fall in fall",
      "artist": "Vibe",
      "trackUrl": "https://p.scdn.co/mp3-preview/43307ae13246ac33e9867ddd26ba29902fb03064?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/5mwZ597mJSZ4MtO0EtxWBE",         
      "imageUrl": fallInFall,
      "context": "",
      "liked": 14,
    },
    {
      "postId": 10,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-rap"],
      "title": "Not Sorry",
      "artist": "Lee Young Ji, Ph-1",
      "trackUrl": "https://p.scdn.co/mp3-preview/c4c18d76b50f4b91857fae57dd909c5977cf6949?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/5UOY3OZib7H4KFwTfsT66g",         
      "imageUrl": notSorry,
      "context": "",
      "liked": 46,
    },
    {
      "postId": 11,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["pop"],
      "title": "Maybe Man",
      "artist": "AJR",
      "trackUrl": "",
      "externalUrl" : "https://open.spotify.com/track/7fhiGdj0nn0ZCmIAocG8G0",
      "imageUrl": maybeMan,
      "context": "",
      "liked": 50,
    },
    {
      "postId": 12,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["easy listening"],
      "title": "DIE 4 YOU",
      "artist": "DEAN",
      "trackUrl": "https://p.scdn.co/mp3-preview/9510d5819c075ee27a0808c05a8fb32b1300daf0?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/7yZD4AVfQtAZD4cG8eRnPk",         
      "imageUrl": dieForYou,
      "context": "",
      "liked": 55,
    },
    {
      "postId": 13,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["easy listening"],
      "title": "Super Shy",
      "artist": "New Jeans",
      "trackUrl": "https://p.scdn.co/mp3-preview/dab062e2cc708a2680ce84953a3581c5a679a230?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/5sdQOyqq2IDhvmx2lHOpwd",         
      "imageUrl": superShy,
      "context": "I'm super shy~",
      "liked": 92,
    },
    {
      "postId": 14,
      "userId": 1,
      "nickname": "이리듬",
      "genre": ["k-pop ballad"],
      "title": "A very personal story",
      "artist": "Davichi",
      "trackUrl": "https://p.scdn.co/mp3-preview/140d042d7a5c86d0222289abdf54273dfe7f1d26?cid=613834041d6342f8b26d78e730c2c746",
      "externalUrl" : "https://open.spotify.com/track/3PWyWdzpWOfBmH7R5moC8O",         
      "imageUrl": privateStory,
      "context": "만나자, 아니다 말자. 보내자, 아니다 말자.",
      "liked": 32,
    },
  ]
})