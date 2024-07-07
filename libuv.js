import crypto from "crypto";

const processStart = Date.now();
function process(num){
    crypto.pbkdf2("abc","bcd",100000,512,"sha512", ()=>{console.log(`${num}:`,Date.now() - processStart);})
}

process(1);
process(2);
process(3);
process(4);