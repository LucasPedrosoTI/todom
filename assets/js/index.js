let tarefas = [
  {
    id: 1,
    texto: "Escovar os dentes",
    prioridade: 3,
    feito: true,
  },
  {
    id: 2,
    texto: "Gravar desafio",
    prioridade: 1,
    feito: true,
  },
  {
    id: 3,
    texto: "Fazer almoço",
    prioridade: 2,
    feito: false,
  },
  {
    id: 4,
    texto: "Pagar boleto",
    prioridade: 3,
    feito: true,
  },
];

//objeto de prioridade
let prioridades = { 1: "baixa", 2: "média", 3: "alta" };

//capturar elementos importantes da pagina

const render = (tarefas) => {
  let table = document.getElementById("table");

  table.innerText = "";

  for (const tarefa of tarefas) {
    //criando uma linha na tabela
    let row = document.createElement("tr");

    //criar o input checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onchange", "toggle()");

    // criar a célula que vai conter o checkbox
    let tdCheck = document.createElement("td");
    tdCheck.appendChild(checkbox);

    // adicionar esse tdcheck a row
    row.appendChild(tdCheck);

    //criar td de texto
    let tdTexto = document.createElement("td");
    tdTexto.innerText = tarefa.texto;

    row.appendChild(tdTexto);

    //criar td prioridade
    let tdPrioridade = document.createElement("td");
    tdPrioridade.innerText = prioridades[tarefa.prioridade];

    row.appendChild(tdPrioridade);

    //criar td de ações
    let tdAcoes = document.createElement("td");
    let i = document.createElement("i");
    i.className = "material-icons";
    i.innerText = "delete";
    i.addEventListener("click", onDeleteClick);
    i.id = tarefa.id;

    tdAcoes.appendChild(i);
    row.appendChild(tdAcoes);

    //adicionar a linha a tabela
    table.appendChild(row);
  }
};

const onDeleteClick = (evt) => {
  //capturar id a tarefa a ser removida
  let id = Number(evt.target["id"]);

  //confirmar exclusão
  if (!window.confirm(`Tem certeza que deseja excluir a tarefa?`)) {
    //usurioa clicou em não, abortando
    return;
  }

  destroy(id);

  render(tarefas);
};

const destroy = (id) => {
  tarefas = tarefas.filter((t) => t.id != id);
};

const create = (texto, prioridade) => {
  let id = tarefas.length == 0 ? 1 : tarefas[tarefas.length - 1].id + 1;

  return {
    id,
    texto,
    prioridade,
    feito: false,
  };
};

let form = document.getElementById("form");

// FORMA 2

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //capturar texto digitado pelo usuário
  let texto = document.getElementById("tf_2do").value;

  if (!texto) {
    return window.alert("De um nome para sua tarefa");
  }
  //verificar se existe prioridade setada no texto
  let strInicio = texto.substr(0, 3);
  let prioridade;
  switch (strInicio) {
    case "#1 ":
      prioridade = 1;
      texto = texto.slice(3);
      break;
    case "#2 ":
      prioridade = 2;
      texto = texto.slice(3);
      break;
    case "#3 ":
      prioridade = 3;
      texto = texto.slice(3);
      break;
    default:
      prioridade = 1;
      break;
  }

  //criar o objeto tarefa sabendo o texto e a prioridade
  let novaTarefa = create(texto, prioridade);
  //Adicionar o obejto tarefa ao array de tarefas
  tarefas.push(novaTarefa);

  //renderizar a minha lista novamente
  render(tarefas);

  //limpar campo
  document.getElementById("tf_2do").value = "";
});

const toggle = (id) => {
  let t;
  for (const tarefa of tarefas) {
    if (tarefa.id == id) {
      t = tarefa;
    }
  }
  t.feito ? (t.feito = false) : (t.feito = true);
  return t;
};

let td = document.getElementsByTagName("td");

render(tarefas);

/*
const render = (tarefas) => {
  let tabela = document.getElementById("table");

  tarefas.forEach((e) => {
    let row = tabela.insertRow(0);
    let checkbox = row.insertCell(0);
    let texto = row.insertCell(1);
    let del = row.insertCell(2);
    // let prioridade = row.insertCell(1);
    // let feito = row.insertCell(2);

    checkbox.innerHTML = "<input type='checkbox'>";
    texto.innerHTML = e.texto;
    del.innerHTML = "<i class='material-icons'>delete</i>";
    // prioridade.innerHTML = e.prioridade;
    // feito.innerHTML = e.feito;
  });
};



const create = () => {
  let form = document.getElementById("form");
  let texto = document.getElementById("tf_2do");

  let novaTarefa = {
    id: tarefas.length - 1,
    texto: texto.value,
    prioridade: 1,
    feito: false,
  };

  tarefas = [...tarefas, novaTarefa];

  render(tarefas);

  texto.value = "";
  form.onsubmit = (e) => {
    e.preventDefault();
  };
};

*/
// const setPrioridade = (prio) => {
//   let prioridade;
//   switch (prio) {
//     case 2:
//       prioridade = "média";
//       break;
//     case 3:
//       prioridade = "alta";
//       break;
//     default:
//       prioridade = "baixa";
//       break;
//   }
//   return prioridade;
// };

// FORMA 1
// form.onsubmit = (e) => {
//   e.preventDefault();
// };
