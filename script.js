const pedirPalabras = () => {
    let palabra = [];
    let resultados = ["r1", "r2", "r3"];

    for (let i = 0; i <= 2; i++) {
        palabra.push(prompt("Ingresa la palabra " + (i + 1) + "º: "));
    }

    /*Guarda en resultados[0] la segunda letra de la primera palabra*/
    resultados[0] = "La segunda letra de la palabra " + palabra[0] + " es " + palabra[0][1] + ".";

    /*Guarda el length de la segunda palabra en resultados[1]*/
    resultados[1] = "La longitud de la palabra " + palabra[1] + " es " + palabra[1].length + ".";

    /*Guarda las voacles de la tercera palabra en posiciones impares en resultados[2]*/
    resultados[2] = palabra[2] & "\n";
    for (let i = 0; i <= palabra[2].length; i++) {
        if ((palabra[2][i] == "a" || palabra[2][i] == "e" || palabra[2][i] == "i" || palabra[2][i] == "o" || palabra[2][i] == "u" ) && (i%2 != 0)) {
            resultados[2] += "Posicion: " + i + ", letra " + palabra[2][i] + ". \n";
        }

    }    
    alert(resultados[0]);
    alert(resultados[1]);
    alert(resultados[2]);

}