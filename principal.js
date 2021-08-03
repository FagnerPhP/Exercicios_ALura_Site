var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 500) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
        
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

let botao = document.querySelector("#adicionar-paciente").addEventListener("click", function(){
    event.preventDefault()
    let form = document.querySelector("#form-adiciona");

    console.log(form.nome.value)
    console.log(form.peso.value)
    console.log(form.altura.value)
    console.log(form.gordura.value)

    let nome = (form.nome.value);
    let peso = (form.peso.value);
    let altura = (form.altura.value);
    let gordura = (form.gordura.value);

    let tbody = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr")
    tr.classList.add("paciente")
    
    let tdNome = document.createElement("td");
    let tdPeso = document.createElement("td");
    let tdAltura = document.createElement("td");
    let tdGordura = document.createElement("td");
    let tdImc = document.createElement("td");

    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;
    tdImc.textContent = imc.toFixed(2);

   
    tr.appendChild(tdNome);
    tr.appendChild(tdPeso);
    tr.appendChild(tdAltura);
    tr.appendChild(tdGordura);
    tr.appendChild(tdImc);

    tbody.appendChild(tr)
    console.log(tr);
    
});
