const doces = document.querySelector('.doces');
   
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
         // formulario para adicionar doce
   
	const forms = document.querySelectorAll('.side-form');
	var instances2 = M.Sidenav.init(forms, {edge:'right'});
});

//funcao para desenhar o card da receita na tela
//id, nome, descricao, endereco_imagem
const desenhaCard = (data, id) => {

    const html = `
  <div class="col s12 m6 l3 doces" data-id="${id}">
	    <div class="card" style="background-color: #A59C94FF;">
		    <div class="card-image doces-imagem">
	            <img src="images/${data.endereco_imagem}">
	            <span class="card-title doces-titulo">"${data.nome}"</span>
	        </div>
	        <div class="card-content doces-descricao">
	            <p>"${data.descricao}"</p>
	        </div>
	        <div class="doces-deletar">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
	    </div>
   </div>`;
    doces.innerHTML += html;

};
 
