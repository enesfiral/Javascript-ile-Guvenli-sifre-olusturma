const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);    /*String fromCharCode () yöntemi, belirtilen UTF-16 kod
                                                                          birimleri dizisinden oluşturulan bir dize döndürür. 
                                                                          26 karakter dizisi oluştuğu için 26 ile çarpılıyor ve
                                                                          karakter kodu üzerinden toplama yapılıyor ...
                                                                          97'den sonraki 26 karakter üzerine seçim işlemini yapacak*/
                                                                          
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = () => {
    const symbols = '!`${[}[$#'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunction = {getRandomLower,getRandomUpper,getRandomNumber,getRandomSymbol}


const topla = () => {
    let sonuc;
    for(let x = 0; x < 16; x++){
        sonuc += Object.values (randomFunction) [Math.floor(Math.random() * 4)] ()
    }


    return sonuc.slice(9,24)

}



// const spanResult = document.getElementById('result')


const olusturButton = document.getElementById('generate');


olusturButton.addEventListener ('click', () => {
    document.getElementById('clipboard').innerText = topla();
})

const copy = document.getElementById('copy')

copy.addEventListener('click',() => {

    const password = document.getElementById('clipboard').innerText;
    console.log(password)



    const textarea = document.createElement ('textarea')
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    console.log('Parola kopyalandı olum..')
})
