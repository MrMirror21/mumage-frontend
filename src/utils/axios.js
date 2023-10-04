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
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    setImageURL(response.data.images[0].image)
  })
  .catch((error) => {
    console.log(error);
  });
}

export const searchMusic = (searchInput) => {
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
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}