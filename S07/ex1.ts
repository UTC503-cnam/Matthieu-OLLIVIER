// Ecrivez une version curryfiée de la fonction suivante
// à l'aide de fonctions lambda 
function format_message(from, to, message){
    return "From: " + from + ", To: " + to + "Msg: " + message;
}
function sender(from:string){
    function dest(to:string){
        function log(message:string){
            console.log("From: " + from + ", To: " + to + ", Msg: " + message);
        }
        return log;

    }
    return dest;
}
let my_sender = sender("moi");
let my_mail = my_sender("kelkun");
my_mail("ceci est un message test");

