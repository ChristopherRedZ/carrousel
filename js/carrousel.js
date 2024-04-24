(function (){
    console.log("C'est du javascript ici")
    let carrousel = document.querySelector('.carrousel')
    console.log("conteneur carrousel = " + carrousel.tagName)
    let bouton = document.querySelector('.bouton__ouvrir')
    console.log("bouton = " + bouton.tagName)
    let carrousel__x = document.querySelector('.carrousel__x')
    console.log("carrousel__x " + carrousel__x.tagName)


    let carrousel__figure = document.querySelector('.carrousel__figure')
    //create dynamique dune image du carrousel
    


    let galerie__img = galerie.querySelectorAll('img')

    console.log(galerie__img)

    let index = 0

    console.log(galerie__img)

    for (const elm of galerie__img){

        creer_image_carrousel(index,elm)
        creer_radio_carrousel(index)

        index = index + 1
    }
/**
 * creer l<image du carrousel a partir de la galerie 
 * @param {*} index le numero de l'image
 */
    function creer_image_carrousel(index,elm){
        console.log(elm.src)

        console.log(carrousel__figure)

        let carrousel__img = document.createElement('img')

        carrousel__img.src = elm.src

        carrousel__img.classList.add('carrousel__img')

        carrousel__img.dataset.index = index

        carrousel__figure.appendChild(carrousel__img)

        console.log(carrousel__figure)
    }
/**
 * creation d'un radio bouton du carrousel
 * @param {*} index le numero de la radio
 */
    function creer_radio_carrousel(index){
        let carrousel__radio = document.createElement('input')
        //class

        //index

        //type

        //name

        //ajouter dans carrousel_form (append ?)

        //ajouter un ecouteur qui permettra de changer l'opacité de l'image index

        // carrousel__img.children[index].style.opacity = 1
    }

    // console.log("premiere image = " + galerie__img.innerHTML)

    // carrousel__img.src = galerie__img.src

    // console.log("premiere image carrousel = " + carrousel__img.src)

    // carrousel__figure.appendChild(carrousel__img)


   
   
    bouton.addEventListener('mousedown' , function(){
        carrousel.classList.add('carrousel--ouvrir')
        console.log(carrousel.classList)
    })

    carrousel__x.addEventListener('mousedown',function(){
        carrousel.classList.remove('carrousel--ouvrir')
        console.log(carrousel.classList)
    })
})()