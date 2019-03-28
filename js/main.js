$(document).ready(function(){
    if (!localStorage.getItem("carrsArray")){
        localStorage.setItem("carrsArray", JSON.stringify([{
            company: "mazda",
            modelo: "mazda 6",
            color: "rojo obscuro",
            potencia: "210hp",
            cilindros: "6 cilindros"
        }]));
        mazdaCars=localStorage.getItem("carrsArray");
        mazdaCars=JSON.parse(mazdaCars);
    printCars();
    } else{
        mazdaCars=localStorage.getItem("carrsArray");
        mazdaCars=JSON.parse(mazdaCars);
    printCars();
    }
})

/*
alert("Hola mundo");
console.log("KodeCamp");
var x=5;
var y=10;
var logico=true;
var nombre="Memo";
var decimales=2.5698
console.log(x+y);
console.log(x*y);
console.log(x%y);
console.log(typeof logico);
*/
var unArray=["mazda", "chevrolet", "ford", "renault"]
/*
var mazdaCars=[
    {
        company: "mazda",
        modelo: "mazda 6",
        color: "rojo",
        potencia: "210hp",
        cilindros: "6 cilindros"
    },
    {
        company: "mazda",
        modelo: "mazda 4",
        color: "verde",
        potencia: "110hp",
        cilindros: "4 cilindros"
    },
    {
        company: "mazda",
        modelo: "mazda 5",
        color: "gris",
        potencia: "210hp",
        cilindros: "6 cilindros"
    },
    {
        company: "mazda",
        modelo: "mazda 10",
        color: "guinda",
        potencia: "110hp",
        cilindros: "4 cilindros"
    }    
]
*/
var mazdaCars;

function printCars(){
    $("#cars-list tbody").empty();
    for(i=0;i<mazdaCars.length;i++){
        var objeto1 = mazdaCars[i];
        console.log(objeto1);
        var carCompany=objeto1.company;
        var carModelo=objeto1.modelo;
        var carColor=objeto1.color;
        var carPotencia=objeto1.potencia;
        var carCilindros=objeto1.cilindros;
        console.log(carCompany, carModelo, carColor, carPotencia, carCilindros)
        var rowHtml = "<tr>" +
                    "<td>" + carCompany + "</td>" +
                    "<td>" + carModelo + "</td>" +
                    "<td>" + carColor + "</td>" +
                    "<td>" + carPotencia + "</td>" +
                    "<td>" + carCilindros + "</td>" +
                    "</tr>"
                    $("#cars-list tbody").append(rowHtml);
        }
}
function getCarData(){
    var carCompany = $("#car-company").val();
    var carModelo = $("#car-modelo").val();
    var carColor = $("#car-color").val();
    var carPotencia = $("#car-potencia").val();
    var carCilindros = $("#car-cilindros").val();
    console.log(carCompany, carModelo, carColor, carPotencia, carCilindros);
    var objetoCar = {
        company: carCompany,
        modelo: carModelo,
        color: carColor,
        potencia: carPotencia,
        cilindros: carCilindros
    }
    mazdaCars.push(objetoCar);
    printCars();
    console.log(mazdaCars);
    $("#alta-carros input").val("");
    var carroString = JSON.stringify(mazdaCars);
    localStorage.setItem("carrsArray", carroString);
}
$("#guardar-auto").on("click",function(){
    getCarData();
});