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
            desenhaCard(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed') {
            removeCard(change.doc.id);
        }
    });
});

// adicionar um novo doce
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const doce = {
        nome: form.docesTitulo.value,
        descricao: form.docesDescricao.value,
        endereco_imagem: filePath
    };

    db.collection('doces').add(doce)
        .catch(err => console.log(err));

    //reseta o formulario
    form.docesTitulo.value = '';
    form.docesDescricao.value = '';
    form.docesArquivo.value = '';

});

const doces1 = document.querySelector('.doces');
doces1.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('doces').doc(id).delete();
  }
})
