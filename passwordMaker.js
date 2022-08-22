// passwordMaker.js

let mkpassWord = function(chrs1, nmbs1, chrs2, spchrs1, chrs3) {
   let result           = '';
   let letters          = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   let numbers          = '0123456789';
   let spchars          = '#&^%$@!~_-?*+=';
   let lettersLength = letters.length;
   let numbersLength = numbers.length;
   let spcharsLength = spchars.length;

   for ( let i = 0; i < chrs1; i++ ) {
     result += letters.charAt(Math.floor(Math.random() * lettersLength));
   };
   for ( let i = 0; i < nmbs1; i++ ) {
     result += numbers.charAt(Math.floor(Math.random() * numbersLength));
   };
   for ( let i = 0; i < chrs2; i++ ) {
    result += letters.charAt(Math.floor(Math.random() * lettersLength));
   };
   for ( let i = 0; i < spchrs1; i++ ) {
     result += spchars.charAt(Math.floor(Math.random() * spcharsLength));
   };
   for ( let i = 0; i < chrs3; i++ ) {
     result += letters.charAt(Math.floor(Math.random() * lettersLength));
   };

   document.getElementById("htmlRanPass").innerHTML = result;
};


let getStructuredPW = function() {
    let formReturn = document.getElementById("frm");
    console.log("formReturn: "+formReturn);
    let pwStruct = "";

    for (i = 0; i < formReturn.length; i++) {
        pwStruct+= formReturn.elements[i].value ;
    }
    pw = pwg(pwStruct);
    document.getElementById("newpw").innerHTML = pw;
};


let u = function () {
    let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
    return result;
};


let l = function () {
    let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let result = lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
    return result;
};


let s = function () {
    let symbolchar = `!@#$%?~^&*()_+=-`;
    let result = symbolchar.charAt(Math.floor(Math.random() * symbolchar.length));
    return result;
};


let n = function () {
    return Math.floor(Math.random() * 10).toString();
};

let pwg = function (x) {
  let finalPW = '';
    for (i of x) {
      switch (i) {
        case "U":
        case "u":
          finalPW += u();
          break;
        case "L":
        case "l":
          finalPW += l();
          break;
        case "N":
        case "n":
          finalPW += n();
          break;
        case "S":
        case "s":
          finalPW += s();
          break;
      };
    };
    console.log(finalPW);

    return finalPW;
};


function timeFunction() {
  document.getElementById("htmlTime").innerHTML = new Date();
};


function timedMsg() {
  let t=setInterval("timeFunction();",1000);
};


timedMsg();
