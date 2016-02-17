function checkLength(str, maxChars) {
    if (str.lenght > maxChars) {
        return str.slice(0, maxChars - 3) + "...";
    } else {
        return str;
    }
}
console.log(checkLength('hello world, bla-bla-bla, ok-ok-ok-ok-k-kk-oo', 20));
