var message = "Olá Hello World";
console.log(message);
var episode = 4;
console.log("Episodio: " + episode);
episode = episode + 1;
console.log("Episodio: " + episode);
var favoritDroid = 'DB8';
//favoritDroid = 7;
console.log("favoritDroid : " + favoritDroid);
var isEnought = function (parsecs) {
    return parsecs < 12;
};
var distance = 1;
//template string com crase
console.log("is " + distance + " parsecs lasdad ? " + (isEnought(distance) ? ' SIM ' : ' NÃO'));
//chamada de função com arroy function
var call = function (name) { return console.log("Do not copy, " + name); };
call('R2');
//parametros padroes
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    if (inc === void 0) {
        inc = 1;
    }
    return speed + inc;
}
console.log("inc (6,1) = " + inc(6, 1));
console.log("inc (6) = " + inc(6));
