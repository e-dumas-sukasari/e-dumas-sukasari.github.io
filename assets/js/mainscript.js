import { get } from "https://jscroot.github.io/api/croot.js";
import {getCookie} from "https://jscroot.github.io/cookie/croot.js";
import { URLGeoJson } from "./template/geocf.js";
import { responseData } from "./controller/controller.js";
import {onClick} from 'https://jscroot.github.io/element/croot.js';


let cookie = getCookie("Login")
if (cookie == ""){
    alert("Anda Belum Sign In Boss");
    window.location.href = "https://1214005gis5.github.io/signin.html"
}

get(URLGeoJson,data => {
    responseData(data)
    let link = MakeGeojsonFromAPI(data)
    // console.log(link)
    // console.log(geojson)
    AddLayerToMAP(link)
    drawer(link)
}); 