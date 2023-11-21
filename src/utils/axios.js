import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;

export const generateImage = (generateOption, setImageURL) => {
  let data = JSON.stringify(generateOption);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://api.kakaobrain.com/v2/inference/karlo/t2i`,
    headers: {
      'Authorization': `KakaoAK ${API_KEY}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };
  console.log("start generating");
  axios.request(config)
  .then((response) => {
    const UrlArr = response.data.images.map((element) => element.image);
    setImageURL(UrlArr);
  })
  .catch((error) => {
    console.log(error);
  });
}

export const searchMusic = (searchInput, setSearchList) => {
  console.log(process.env.REACT_APP_SPOTIFY_KEY);
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_SPOTIFY_URL}/search?q=${searchInput}&type=track&limit=3`,
    headers: { 
      'Authorization': `Bearer ${process.env.REACT_APP_SPOTIFY_KEY}`, 
    },
  };
  
  axios.request(config)
  .then((response) => {
    setSearchList(response.data.tracks.items)
  })
  .catch((error) => {
    console.log(error);
  });
}

export const getLyrics = (trackId, generateOption, setImageURL) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://spotify-lyric-api-984e7b4face0.herokuapp.com/?trackid=${trackId}&format=lrc`,
    headers: { }
  };

  axios.request(config)
  .then((response) => {
    const originLyrics = response.data.lines;
    const result = originLyrics.map(line => line.words).join('. ');
    console.log("lyrics done");
    getPrompt(result, generateOption, setImageURL);
  })
  .catch((error) => {
    console.log(error);
    alert("해당 곡은 가사를 지원하지 않습니다. 다른 곡을 선택해주세요.")
  });
}

export const registerUser = (userInfo) => {
  alert("회원가입이 완료되었습니다.")
  window.location.href="/signin"
}

export const login = () => {
  alert("로그인이 완료되었습니다.")
  window.location.href="/upload"
}

export const getPrompt = async (message, generateOption, setImageURL) => {
  const apiKey = process.env.REACT_APP_GPT_KEY;
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${apiKey}`
    },
    data : {
      'model' : "gpt-3.5-turbo",
      "messages": [
        { "role": "system", "content": "You are prompt generator. Task of you is to convert song lyrics into a single descriptive prompt under 4 lines that can be utilized by an image creation AI to generate an image aligned with the lyrical content."},
        { "role": "user", "content": `${message}`},
      ],
      'max_tokens': 500,
    }
  }
  console.log(message);
  axios.request(config)
  .then((response) => {
    console.log(response.data.choices[0].message.content);
    const result = response.data.choices[0].message.content;
    generateImage({...generateOption, "prompt" : result}, setImageURL)
  })
  .catch((error) => {
    console.log(error);
  })
};