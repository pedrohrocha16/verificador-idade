var disp = window.document.getElementById('verificar')

disp.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')

    var resultado = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('sex')
        var imgF = document.getElementById('img')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked){
            if (idade >= 0 && idade < 10){
                gênero = 'um bebe menino'
                img.src = 'img/bebe-menino.jpg'
            } else if (idade < 21){
                gênero = 'um homem jovem'
                img.src = 'img/jovem-homem.jpg'
            } else if (idade <50){
                gênero = 'um homem adulto'
                img.src = 'img/homem-adulto.jpg'
            } else {
                gênero = 'um homem idoso'
                img.src = 'img/homem-idoso.jpeg'
            }

        } else if (fsex[1].checked){
            if (idade >= 0 && idade < 10){
                gênero = 'uma bebe menina'
                img.src = 'img/bebe-menina.jpg'
            } else if (idade < 21){
                gênero = 'uma mulher jovem'
                img.src = 'img/jovem-mulher.jpg'
            } else if (idade <50){
                gênero = 'uma mulher adulta'
                img.src = 'img/mulher-adulta.jpg'
            } else {
                gênero = 'uma mulher idosa'
                img.src = 'img/mulher-idosa.jpeg'
            }
        }
        resultado.innerHTML = `O sistema detectou ${gênero} de ${idade} ano(s) de idade.`
    }
}
