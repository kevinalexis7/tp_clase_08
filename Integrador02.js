/* integrador 2 */
let html5 = '30 45 25 34 18 23 16 50 72 70'
let css3 = '50 45 71 34 23 45 65 75 63 43 74 70'
let javascript = '70 65 58 45 23 57 34 17 72'
let nodejs = '45 56 73 34 65 72 70 32'

let graduados = [html5.split(' '), css3.split(' '),javascript.split(' '),nodejs.split(' ')]


curso = process.argv[2]
function promedios(curso){

    if (curso > 4 || curso < 1){
        return console.log(`NÚMERO INVALIDO!
Elija uno de los siguientes:
1=HTML5
2=CSS3
3=JAVASCRIPT
4=NODEJS`)
}

let promediar = [];

for (let i = 0; i < graduados[curso - 1].length; i++) {
    promediar = (+promediar + +graduados[curso - 1][i]) 
    }
    return console.log(promediar / graduados[curso - 1].length)
}
promedios(curso)