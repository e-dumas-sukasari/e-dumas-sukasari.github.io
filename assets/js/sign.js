import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {setInner,getValue} from "https://jscroot.github.io/element/croot.js";
import {setCookieWithExpireHour} from "https://jscroot.github.io/cookie/croot.js";

window.PostSignUp = PostSignUp;

export default function PostSignUp(){
    let target_url = "https://asia-southeast2-argon-fire-401902.cloudfunctions.net/postLoginProyek3";
    let tokenkey = "token";
    let tokenvalue = "c0928b8efec94d5aaeb16dd5a15ed14efa9aa73bc7565ebef701aa1628774b66";
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);
    
}

function responseData(result){
    setInner("pesan",result.message);
    setCookieWithExpireHour("token",result.token,2);
    if (result.message === "Selamat Datang") {
        // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
        window.location.href = "https://e-dumas-sukasari.github.io/web-proposal"; // Gantilah "error.html" dengan halaman error yang sesuai.
    } else if (result.message === "Password Salah") {
        // Jika pesan kesalahan adalah "Password salah", arahkan ke halaman error.
        window.location.href = "./404.html";
    } else {
        // Penanganan lainnya (pesan kesalahan lainnya)
        window.location.href = "./index.html";
    }
}