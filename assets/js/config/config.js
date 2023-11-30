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
    setCookieWithExpireHour('Login', response.token, 2);
    
    // Pemeriksaan role untuk mengarahkan ke halaman yang sesuai
    if (response.role === 'admin') {
      window.location.href = 'https://e-dumas-sukasari.my.id/dashboard/admin.html';
    } else if (response.role === 'user') {
      window.location.href = 'https://e-dumas-sukasari.my.id/dashboard/user.html';
    } else {
      // Jika role tidak dikenali, dapatkan URL default atau tampilkan pesan kesalahan
      // Misalnya, window.location.href = 'https://e-dumas-sukasari.my.id/default.html';
      alert('Role tidak dikenali. Silakan hubungi administrator.');
    }
    
    alert("Selamat Datang");
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