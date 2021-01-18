'use strict';

$(function() {
    let grado = sessionStorage.getItem("grado");
    let hashGrado = CryptoJS.SHA1(grado).toString();;
    if(hashGrado != '77de68daecd823babbb58edb1c8e14d7106e83bb'){
        window.location.href='../index.html';
    }
});

