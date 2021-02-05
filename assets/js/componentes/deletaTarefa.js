const BotaoDelete = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deleta';
    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
}

const deletarTarefa = (evento) =>{
    const  botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    return botaoDeleta;
}

export default BotaoDelete;