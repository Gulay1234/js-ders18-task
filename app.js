let text = prompt("Mətni daxil edin:");
for (let i = 0; i < text.length; i++) {
    if ("0123456789".includes(text[i])) { 
        console.log("Metnde reqem var");
        break;
    }
    if ("0123456789".split("")!==(element=> element[i])) { 
        console.log("Metnde reqem yoxdu");
    }
}



let a = 0;
for (let i = 1; i < 51 ; i++) {
    a += i
}
console.log(a);