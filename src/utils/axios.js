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
    const UrlArr = response.data.images.map((element) => element.image)
    console.log(UrlArr[0]);
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

export const getLyrics = (trackId, setLyrics) => {
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
    console.log(result);
    return result;
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

export const getPrompt = async (message) => {
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
        { "role": "system", "content": "You are a helpful assistant."},
        { "role": "user", "content": `Please write a prompt in English to input into the generative AI that will create an image that matches the lyrics below. ${message}`},
      ],
      'max_tokens': 500,
    }
  }
  
  axios.request(config)
  .then((response) => {
    console.log(response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  })
  .catch((error) => {
    console.log(error);
  })
};


const item = {
  "album": {
      "album_type": "album",
      "artists": [
          {
              "external_urls": {
                  "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
              },
              "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
              "id": "6eUKZXaKkcviH0Ku9w2n3V",
              "name": "Ed Sheeran",
              "type": "artist",
              "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
          }
      ],
      "available_markets": [
          "AR",
          "AU",
          "AT",
          "BE",
          "BO",
          "BR",
          "BG",
          "CA",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DK",
          "DO",
          "DE",
          "EC",
          "EE",
          "SV",
          "FI",
          "FR",
          "GR",
          "GT",
          "HN",
          "HK",
          "HU",
          "IS",
          "IE",
          "IT",
          "LV",
          "LT",
          "LU",
          "MY",
          "MT",
          "MX",
          "NL",
          "NZ",
          "NI",
          "NO",
          "PA",
          "PY",
          "PE",
          "PH",
          "PL",
          "PT",
          "SG",
          "SK",
          "ES",
          "SE",
          "CH",
          "TW",
          "TR",
          "UY",
          "US",
          "GB",
          "AD",
          "LI",
          "MC",
          "ID",
          "JP",
          "TH",
          "VN",
          "RO",
          "IL",
          "ZA",
          "SA",
          "AE",
          "BH",
          "QA",
          "OM",
          "KW",
          "EG",
          "MA",
          "DZ",
          "TN",
          "LB",
          "JO",
          "PS",
          "IN",
          "BY",
          "KZ",
          "MD",
          "UA",
          "AL",
          "BA",
          "HR",
          "ME",
          "MK",
          "RS",
          "SI",
          "KR",
          "BD",
          "PK",
          "LK",
          "GH",
          "KE",
          "NG",
          "TZ",
          "UG",
          "AG",
          "AM",
          "BS",
          "BB",
          "BZ",
          "BT",
          "BW",
          "BF",
          "CV",
          "CW",
          "DM",
          "FJ",
          "GM",
          "GE",
          "GD",
          "GW",
          "GY",
          "HT",
          "JM",
          "KI",
          "LS",
          "LR",
          "MW",
          "MV",
          "ML",
          "MH",
          "FM",
          "NA",
          "NR",
          "NE",
          "PW",
          "PG",
          "WS",
          "SM",
          "ST",
          "SN",
          "SC",
          "SL",
          "SB",
          "KN",
          "LC",
          "VC",
          "SR",
          "TL",
          "TO",
          "TT",
          "TV",
          "VU",
          "AZ",
          "BN",
          "BI",
          "KH",
          "CM",
          "TD",
          "KM",
          "GQ",
          "SZ",
          "GA",
          "GN",
          "KG",
          "LA",
          "MO",
          "MR",
          "MN",
          "NP",
          "RW",
          "TG",
          "UZ",
          "ZW",
          "BJ",
          "MG",
          "MU",
          "MZ",
          "AO",
          "CI",
          "DJ",
          "ZM",
          "CD",
          "CG",
          "IQ",
          "LY",
          "TJ",
          "VE",
          "ET",
          "XK"
      ],
      "external_urls": {
          "spotify": "https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu"
      },
      "href": "https://api.spotify.com/v1/albums/3T4tUhGYeRNVUGevb0wThu",
      "id": "3T4tUhGYeRNVUGevb0wThu",
      "images": [
          {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
              "width": 640
          },
          {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
              "width": 300
          },
          {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
              "width": 64
          }
      ],
      "name": "÷ (Deluxe)",
      "release_date": "2017-03-03",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:3T4tUhGYeRNVUGevb0wThu"
  },
  "artists": [
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
          },
          "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
          "id": "6eUKZXaKkcviH0Ku9w2n3V",
          "name": "Ed Sheeran",
          "type": "artist",
          "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
      }
  ],
  "available_markets": [
      "AR",
      "AU",
      "AT",
      "BE",
      "BO",
      "BR",
      "BG",
      "CA",
      "CL",
      "CO",
      "CR",
      "CY",
      "CZ",
      "DK",
      "DO",
      "DE",
      "EC",
      "EE",
      "SV",
      "FI",
      "FR",
      "GR",
      "GT",
      "HN",
      "HK",
      "HU",
      "IS",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MY",
      "MT",
      "MX",
      "NL",
      "NZ",
      "NI",
      "NO",
      "PA",
      "PY",
      "PE",
      "PH",
      "PL",
      "PT",
      "SG",
      "SK",
      "ES",
      "SE",
      "CH",
      "TW",
      "TR",
      "UY",
      "US",
      "GB",
      "AD",
      "LI",
      "MC",
      "ID",
      "JP",
      "TH",
      "VN",
      "RO",
      "IL",
      "ZA",
      "SA",
      "AE",
      "BH",
      "QA",
      "OM",
      "KW",
      "EG",
      "MA",
      "DZ",
      "TN",
      "LB",
      "JO",
      "PS",
      "IN",
      "BY",
      "KZ",
      "MD",
      "UA",
      "AL",
      "BA",
      "HR",
      "ME",
      "MK",
      "RS",
      "SI",
      "KR",
      "BD",
      "PK",
      "LK",
      "GH",
      "KE",
      "NG",
      "TZ",
      "UG",
      "AG",
      "AM",
      "BS",
      "BB",
      "BZ",
      "BT",
      "BW",
      "BF",
      "CV",
      "CW",
      "DM",
      "FJ",
      "GM",
      "GE",
      "GD",
      "GW",
      "GY",
      "HT",
      "JM",
      "KI",
      "LS",
      "LR",
      "MW",
      "MV",
      "ML",
      "MH",
      "FM",
      "NA",
      "NR",
      "NE",
      "PW",
      "PG",
      "WS",
      "SM",
      "ST",
      "SN",
      "SC",
      "SL",
      "SB",
      "KN",
      "LC",
      "VC",
      "SR",
      "TL",
      "TO",
      "TT",
      "TV",
      "VU",
      "AZ",
      "BN",
      "BI",
      "KH",
      "CM",
      "TD",
      "KM",
      "GQ",
      "SZ",
      "GA",
      "GN",
      "KG",
      "LA",
      "MO",
      "MR",
      "MN",
      "NP",
      "RW",
      "TG",
      "UZ",
      "ZW",
      "BJ",
      "MG",
      "MU",
      "MZ",
      "AO",
      "CI",
      "DJ",
      "ZM",
      "CD",
      "CG",
      "IQ",
      "LY",
      "TJ",
      "VE",
      "ET",
      "XK"
  ],
  "disc_number": 1,
  "duration_ms": 233712,
  "explicit": false,
  "external_ids": {
      "isrc": "GBAHS1600463"
  },
  "external_urls": {
      "spotify": "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
  },
  "href": "https://api.spotify.com/v1/tracks/7qiZfU4dY1lWllzX7mPBI3",
  "id": "7qiZfU4dY1lWllzX7mPBI3",
  "is_local": false,
  "name": "Shape of You",
  "popularity": 88,
  "preview_url": "https://p.scdn.co/mp3-preview/7339548839a263fd721d01eb3364a848cad16fa7?cid=613834041d6342f8b26d78e730c2c746",
  "track_number": 4,
  "type": "track",
  "uri": "spotify:track:7qiZfU4dY1lWllzX7mPBI3"
}