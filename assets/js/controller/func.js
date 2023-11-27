import { setCookieWithExpireHour } from 'https://jscroot.github.io/cookie/croot.js';

export function getTokenFromAPI() {
    const tokenUrl = "https://asia-southeast2-argon-fire-401902.cloudfunctions.net/loginGISChapter5";
    fetch(tokenUrl)
      .then(response => response.json())
      .then(tokenData => {
        if (tokenData.token) {
          userToken = tokenData.token;
          console.log('Token dari API:', userToken);
        }
      })
      .catch(error => console.error('Gagal mengambil token:', error));
  }