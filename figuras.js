// Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Tringulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo
console.group("Círculos")

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

//Interactuamos con HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triágulo
function calcularperimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = input4.value;

    const area = areaTriangulo(value3, value4);
    alert(area)
}

//Círculo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}