import { postWithBearer } from "https://jscroot.github.io/api/croot.js";
import {GetDataForm,  ResponsePost} from "../dashboard/js/controller/controller.js";
import { token, UrlRegister } from "../dashboard/js/template/geocf.js";

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("regis-form");
  
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let data = GetDataForm();
        postWithBearer(UrlRegister, token, data, ResponsePost)
    });
  });