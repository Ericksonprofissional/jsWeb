import BotaoConcluir from './componentes/concluirTarefas.js';
import BotaoDelete from './componentes/deletaTarefa.js';

const criarTarefa = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const lista = document.querySelector('[data-list]');
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDelete());
    lista.appendChild(tarefa);
    input.value = "";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener( 'click', criarTarefa);
