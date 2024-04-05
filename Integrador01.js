/* Crear un array multidimensional que contenga los nombres de los cursos y su
precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react,
7000”, “nodejs, 15000”. */

let cursosPrecios = [['html5', 4000], ['css3', 5000], ['javascript', 10000], ['react',
7000], ['nodejs', 15000]];

/* Crear un array que contenga los cursos que el alumno quiere tomar con DH.
Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre
HTML5, CSS3, JAVASCRIPT, REACT y NODEJS. */

let cursosDeseados = ['HTML5','CSS3','REACT','JAVASCRIPT']

/* Crear una función (Callback) que reciba como parámetros el array
multidimensional de los cursos y el otro array que indica los cursos que
quiere hacer el alumno. La función tendrá la responsabilidad de calcular y
devolver el monto total a pagar por el alumno en función de los cursos que
quiere realizar. No olvides que en el array multidimensional los nombres de los
cursos están escritos en letras minúsculas y tienes que pasarlas a
MAYÚSCULAS. */

function calculoDePrecios(cursosPrecios, cursosDeseados) {
    let sumados = [];
    for (let i = 0; i < cursosPrecios.length; i++) {
        if(cursosDeseados.includes(cursosPrecios[i][0].toUpperCase())){
            sumados = +sumados + cursosPrecios[i][1]
        }
    }return sumados
} //console.log(calculoDePrecios(cursosPrecios, cursosDeseados));

function msjFinal(nombre,apellido,cursosPrecios,cursosDeseados) {
    let listaDeCursosDeseados = [];
    for (let i = 0; i < cursosDeseados.length; i++) {
        listaDeCursosDeseados.push(`${i + 1}.- ${cursosDeseados[i]}`)
    }return console.log(`Estimado ${nombre+' '+apellido}, en función de los cursos seleccionados:
${listaDeCursosDeseados.join(`
`)}
Elmonto total a pagar es de: $${calculoDePrecios(cursosPrecios, cursosDeseados)}. 
Bienvenido a la gran aventura Digital House.`)
}



msjFinal('Kevin', 'Espinola',cursosPrecios,cursosDeseados)