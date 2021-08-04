
let botao = document.querySelector("#botao").addEventListener("click", function(){
    event.preventDefault();
    let form = document.querySelector("#form")
    console.log(form)

    let nome = form.nome.value
    let tel = form.tel.value
    let data = form.data.value
    console.log(nome)
    console.log(tel)
    console.log(data)

    let tbody = document.querySelector("tbody")
    let tr = document.createElement("tr");

    let tdNome = document.createElement("td")
    let tdTel = document.createElement("td")
    let tdData = document.createElement("td")

    tdNome.textContent = nome;
    tdTel.textContent = tel;
    tdData.textContent = data;

    tr.appendChild(tdNome);
    tr.appendChild(tdTel);
    tr.appendChild(tdData);

    tbody.appendChild(tr)


});