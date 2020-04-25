// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 
function format_message(from, to, message) {
    return "From: " + from + ", To: " + to + "Msg: " + message;
}
var sender = function (from) { return function (to) { return function (message) { return console.log("From: " + from + ", To: " + to + ", Msg: " + message); }; }; };
var my_sender = sender("moi");
var my_mail = my_sender("kelkun");
my_mail("ceci est un message test");
//# sourceMappingURL=ex1-v2.js.map