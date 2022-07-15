const formulario = document.querySelector("form");
const nome = document.querySelector(".nome");
const cpf = document.querySelector(".cpf");
const modalidade = document.querySelector(".modalidade");
let sit;


function cadastrar () {
    fetch("http://localhost:8081/api/alunos",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(  {
      "nome": nome.value,
      "cpf": cpf.value,
      "modalidade": modalidade.value,
      "status": sit
    })
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })
}

function limpar () {
    nome.value="";
    cpf.value="";
}


formulario.addEventListener('submit', function (e){
    e.preventDefault();

 sit = document.querySelector('input[name="flexRadioDefault"]:checked').value;
  
  cadastrar();
  limpar();

})

