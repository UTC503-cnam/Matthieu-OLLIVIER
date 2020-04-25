function logger(name) {
    var separator = ":";
    function log(message) {
        console.log(name + separator + message);
    }
    // return log
}
var my_logger = logger("UTC503");
my_logger("J'ai capturé name et separator !");
//# sourceMappingURL=closure-1.js.map