const data = "Jul 30, 2022 el $ cotiza a Bs. 5,91 y el € a Bs. 6,68";
/*
 . El carácter ? después del cuantificador hace que este sea "no codicioso": 
 lo cual significa que se detendrá tan pronto como encuentre una concordancia. 
 Por ejemplo, dada una cadena "algo como <foo> <bar> new </bar> </foo>":

/<.*>/ reconocerá "<foo> <bar> nuevo </bar> </foo>"
/<.*?>/ encajará "<foo>"

*/

let re = new RegExp("cotiza a Bs. " + "(.+?)" + " y");

hallado = data.match(re);
//hallarNum = hallado.match(expresiont);
numDecimal = parseFloat(hallado[1].replace(/,/g, "."));

console.log(numDecimal + 3);
