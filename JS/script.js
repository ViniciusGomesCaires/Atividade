function mostraGaleria(){
    let imagens = ['dog1.jpg','dog2.jpg', 'dog3.jpg'];
    let galeria = document.getElementById('galeria');
    imagens.forEach(img =>{
        let imgElement = document.createElement('img');
        imgElement.src = img;
        galeria.appendChild(imgElement);
});
}
document.onload = mostarGaleria();

function exibirRaca(raca){
    let info = {
        'Labrador': 'Amigável, inteligente e enérgico.',
        'Bulldog': 'Calmo. dócil e sociável.',
        'Poodle': 'Extremamente inteligente e ativo.'
    }
    document.getElementById('infoRaca').innerText = info[raca];
}

function pesquisarRaca(){
    let pesquisa = document.getElementById('campoPesquisa').ariaValueMax.toLowerCase();
    let racas = ['labrador', 'bulldog','poodle'];
    let resultado = racas.incluides(pesquisa) ? 'Raça encontrada!' : 'Raça não encontrada';
    documnet.getElementById('resultadoPesquisa').innerText = resultado;
}
