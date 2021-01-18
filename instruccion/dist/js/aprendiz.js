'use strict';

$(function() {
    let grado = sessionStorage.getItem("grado");
    let hashGrado = CryptoJS.SHA1(grado).toString();
    if(hashGrado != '356a192b7913b04c54574d18c28d46e6395428ab'){
        window.location.href='../index.html';
    }

    $('.special.cards .image').dimmer({
        on: 'hover'
      });
});
