db.enablePersistence()
    .catch(function(err) {
        if (err.code == 'failed-precondition') {
            console.log('persistance failed');
        } else if (err.code == 'unimplemented') {
            console.log('persistance not available');
        }
    });

db.collection('doces').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            renderRecipe(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
        }
    });
});

// adicionar um novo doce
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const doces = {
        nome: form.docesTitulo.value,
        descricao: form.docesDescricao.value,
        endereco_imagem: form.docesArquivo.value
    };

    db.collection('doces').add(doces)
        .catch(err => console.log(err));

    //reseta o formulario
    form.docesTitulo.value = '';
    form.docesDescricao.value = '';
    form.docesArquivo.value = '';

});
