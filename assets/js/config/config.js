import { setCookieWithExpireHour } from 'https://jscroot.github.io/cookie/croot.js';

//token
export function getTokenFromAPI() {
  const tokenUrl = "https://asia-southeast2-argon-fire-401902.cloudfunctions.net/postLoginEDUMAS";
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

export function GetDataReport() {
  const title = document.querySelector("#editor-title");
  const description = document.querySelector("#editor-description");
  const dateOccurred = document.querySelector("#datepicker");
  const fileData = document.querySelector("#fileData");

  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Date Occurred:", dateOccurred);
  console.log("File Data:", fileData);

  const data = new FormData();
  data.append('title', title.value);
  data.append('description', description.value);
  data.append('dateOccurred', dateOccurred.value);
  data.append('fileData', fileData.files[0]);

  return data;
}

export function GetDataForm(){
            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;
            const role = document.querySelector("#role").value;
            console.log(password)

            const data = {
                username: username,
                password: password,
                role: role
            };
            return data
}
//login
export function PostLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const data = {
    username: username,
    password: password,
    role: role
  };
  return data;
}

export function AlertPost(value){
    alert(value.message + "\nRegistrasi Berhasil")
    window.location.href= "https://e-dumas-sukasari.my.id/sign/login"
}


function ResponsePostLogin(response) {
  if (response && response.token) {
    // console.log('Token User:', response.token);
    setCookieWithExpireHour('Login', response.token, 2);
    window.location.href = 'https://e-dumas-sukasari.my.id/dashboard/admin.html';

    
    alert("Selamat Datang")
  } else {
    alert('Login gagal. Silakan coba lagi.');
  }
}


export function ResponsePost(result) {
    AlertPost(result);
}
export function ResponseLogin(result) {
  ResponsePostLogin(result)
}