module.exports = function reverse(n) {
    if (n > 0) {
        let str = n.toString();
        return str.split("").reverse().join("");
    } else {
        n *= -1;
        let str = n.toString();
        return str.split("").reverse().join("");
    }
}