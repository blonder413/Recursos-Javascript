/**
 * Las expresiones regulares nos permiten validar a estructura de una cadena de texto
 * deben empezar y teminar con /
 * el + fuera de los paréntesis indica que a menos debe existir una coincidencia en el bloque
 * el \ escapa el punto, de tal forma que lo toma literal
 */
const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
correo = 'jvalentine@bsaa.org'

if (expresionRegular.test(correo)) {
    console.log('válido');
} else {
    console.log('inválido');
}