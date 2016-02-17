function showFibon(number) {
    if (number < 3) {
        return 1;
    } else {
        return showFibon(number - 1) + showFibon(number - 2);
    }
}
console.log(showFibon(9));
