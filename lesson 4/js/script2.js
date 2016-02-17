function checkSpam(str) {
    return (str.indexOf('spam') || str.indexOf('sex') );
}
console.log(checkSpam('I was here. Where was spam?'));
