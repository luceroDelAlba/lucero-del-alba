'use strict';


$(function() {
    let grado = sessionStorage.getItem("grado");
    let hashGrado = CryptoJS.SHA1(grado).toString();;
    if(hashGrado != 'da4b9237bacccdf19c0760cab7aec4a8359010b0'){
        window.location.href='../index.html';
    }
});

