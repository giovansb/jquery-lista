$(document).ready(function(){

    //função para texto rasurado
    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    });

    //função para adicionar cada nova tarefa
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefa = $('#nomeDaTarefa').val();
        const novoItem = $('<li></li>');

        $(`<p>${nomeDaTarefa}</p>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $('#nomeDaTarefa').val('');

    })










})