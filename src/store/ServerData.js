import fryDream from "../assets/fry's dream.png";
import smoke from "../assets/smoke.png";
import drama from "../assets/drama.png";
import nowAndThen from "../assets/now and then.png";
import houdini from "../assets/Houdini.png";
import standingNextToYou from "../assets/standing next to you.png";
import perfectNight from "../assets/perfect night.png";
import sayingEndOfUs from "../assets/헤어지자 말해요.png";
import fallInFall from "../assets/가을 타나봐.png"
import notSorry from "../assets/not sorry.png";
import { ReactComponent as ProfileIcon } from "../assets/Profile.svg";

export const users = [
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
      { "followId": 4 },
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
    "name": "이블루스",
    "nickname": "블루",
    "profileUrl": ProfileIcon,
    "email": "abcde1234@gmail.com",
    "genres": [],
    "followers": [
      { "followerId": 1 },
      { "followerId": 2 },
    ],
    "follows": [
      { "followId": 1 },
      { "followId": 2 },
    ],
    "liked": [
      { "postId": 2 }
    ],
  },
  {
    "userId": 4,
    "memberId": "abcdef1234",
    "password": "abcdef1234",
    "name": "이라온",
    "nickname": "라이온",
    "profileUrl": ProfileIcon,
    "email": "abcdef1234@gmail.com",
    "genres": [],
    "followers": [
      { "followerId": 1 },
    ],
    "follows": [

    ],
    "liked": [
      { "postId": 2 }
    ],
  },
]

export const posts = [
  {
    "postId": 1, // 게시물 id
    "userId": 1, // 작성자의 사용자 id
    "nickname": "이리듬",
    "genre": ["k-pop"],
    "title": "후라이의 꿈", // 곡 제목, 게시글 제목이 아님.
    //30초 미리 듣기 url, <audio> 태그에 src로 입력하면 재생 가능
    "trackUrl": "https://p.scdn.co/mp3-preview/89982dfa4f2b2b1dc930c28fb5d22b0e2d0e9e7f?cid=613834041d6342f8b26d78e730c2c746",
    //생성된 image의 url, 서버 더미 데이터의 경우 png 파일
    "imageUrl": fryDream,
    // 게시글에 들어갈 글 내용
    "context": "나만의 길을 찾고 싶다",
  },
  {
    "postId": 2,
    "userId": 1,
    "nickname": "이리듬",
    "genre": ["k-rap", "korean r&b"],
    "title": "Smoke (Prod. Dynamicduo, Padi)",
    "trackUrl": "https://p.scdn.co/mp3-preview/967cf905ef99b85bd19276c4e0c9ef4358f29778?cid=613834041d6342f8b26d78e730c2c746",
    "imageUrl": smoke,
    "context": "달리거나 넘어지거나 둘 중에 하나",
  },
  {
    "postId": 3,
    "userId": 1,
    "nickname": "이리듬",
    "genre": ["k-pop"],
    "title": "Drama",
    "trackUrl": "https://p.scdn.co/mp3-preview/a3d57978f4a877124d87238ed9b5217f45cd95c5?cid=613834041d6342f8b26d78e730c2c746",
    "imageUrl": drama,
    "context": "에스파 신곡 미쳤다!!",
  },
  {
    "postId": 4,
    "userId": 1,
    "nickname": "이리듬",
    "genre": ["british invasion", "classic rock", "merseybeat", "psychedelic rock", "rock"],
    "title": "Now and Then",
    "trackUrl": "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
    "imageUrl": nowAndThen,
    "context": "옛날 생각이 나네요1",
  },
  {
    "postId": 5,
    "userId": 2,
    "nickname": "팔레트",
    "genre": ["hiphop", "classic rock", "emo"],
    "title": "Now and Then",
    "trackUrl": "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
    "imageUrl": nowAndThen,
    "context": "옛날 생각이 나네요2",
  },
  {
    "postId": 6,
    "userId": 2,
    "nickname": "팔레트",
    "genre": ["hiphop", "jazz", "pop"],
    "title": "Now and Then",
    "trackUrl": "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
    "imageUrl": nowAndThen,
    "context": "옛날 생각이 나네요3",
  },
  {
    "postId": 7,
    "userId": 3,
    "nickname": "블루스",
    "genre": ["hiphop", "jazz", "pop"],
    "title": "Now and Then",
    "trackUrl": "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
    "imageUrl": nowAndThen,
    "context": "옛날 생각이 나네요4",
  },
  {
    "postId": 8,
    "userId": 3,
    "nickname": "블루스",
    "genre": ["hiphop", "jazz", "pop"],
    "title": "Now and Then",
    "trackUrl": "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
    "imageUrl": nowAndThen,
    "context": "옛날 생각이 나네요5",
  },
  {
    "postId": 9,
    "userId": 4,
    "nickname": "라이온",
    "genre": ["Blues", "jazz", "country"],
    "title": "Now and Then",
    "trackUrl": "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
    "imageUrl": nowAndThen,
    "context": "옛날 생각이 나네요6",
  },
  {
    "postId": 10,
    "userId": 4,
    "nickname": "라이온",
    "genre": ["k-pop", "jazz", "country"],
    "title": "Now and Then",
    "trackUrl": "https://open.spotify.com/track/4vziJcnB2Qyi9o4nIRUeN7",
    "imageUrl": nowAndThen,
    "context": "옛날 생각이 나네요7",
  },
  {
    "postId" : 5,
    "userId" : 1,
    "nickname" : "이리듬",
    "genre" : ["dance pop", "pop", "uk pop"],
    "title" : "Houdini",
    "trackUrl" : "https://p.scdn.co/mp3-preview/df4af86970ffb1a7042d1d228bcea7b4aabfdba4?cid=613834041d6342f8b26d78e730c2c746",
    "imageUrl" : houdini,
    "context" : "",
  },
  {
  "postId" : 6,
  "userId" : 1,
  "nickname" : "이리듬",
  "genre" : ["k-pop"],
  "title" : "Standing Next to You",
  "trackUrl" : "https://p.scdn.co/mp3-preview/b1cac49f0f6043eae3a0c0557fe16a9579fbc519?cid=613834041d6342f8b26d78e730c2c746",
  "imageUrl" : standingNextToYou,
  "context" : "",
  },
  {
    "postId" : 7,
    "userId" : 1,
    "nickname" : "이리듬",
    "genre" : ["k-pop"],
    "title" : "Perfect Night",
    "trackUrl" : "https://p.scdn.co/mp3-preview/4e84e2dc9edab896f88263c634e88f39a6db61e1?cid=613834041d6342f8b26d78e730c2c746",
    "imageUrl" : perfectNight,
    "context" : "",
  },
  {
    "postId" : 8,
    "userId" : 1,
    "nickname" : "이리듬",
    "genre" : ["k-pop ballad"],
    "title" : "헤어지자 말해요",
    "trackUrl" : "https://p.scdn.co/mp3-preview/55878d433b375e41b0fdde2f5fded09c88898ba4?cid=613834041d6342f8b26d78e730c2c746",
    "imageUrl" : sayingEndOfUs,
    "context" : "",
  },
  {
    "postId" : 9,
    "userId" : 1,
    "nickname" : "이리듬",
    "genre" : ["k-pop ballad"],
    "title" : "가을 타나봐",
    "trackUrl" : "https://p.scdn.co/mp3-preview/43307ae13246ac33e9867ddd26ba29902fb03064?cid=613834041d6342f8b26d78e730c2c746",
    "imageUrl" : fallInFall,
    "context" : "",
  },
  {
    "postId" : 10,
    "userId" : 1,
    "nickname" : "이리듬",
    "genre" : ["k-rap"],
    "title" : "Not Sorry",
    "trackUrl" : "https://p.scdn.co/mp3-preview/c4c18d76b50f4b91857fae57dd909c5977cf6949?cid=613834041d6342f8b26d78e730c2c746",
    "imageUrl" : notSorry,
    "context" : "",
  },
]