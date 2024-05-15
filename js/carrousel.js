(function (){
    document.addEventListener('DOMContentLoaded', function() {
        let carrousel = document.querySelector('.carrousel');
        let bouton = document.querySelector('.bouton__ouvrir');
        let carrousel__x = document.querySelector('.carrousel__x');
        let galerie__img = document.querySelectorAll('.galerie img');
        let carrousel__figure = document.createElement('div');
        carrousel__figure.classList.add('carrousel__figure');
        carrousel.appendChild(carrousel__figure);
        
        let carrousel__imgs = [];
        let index = 0;

        galerie__img.forEach((elm, idx) => {
            let carrousel__img = document.createElement('img');
            carrousel__img.src = elm.src;
            carrousel__img.classList.add('carrousel__img');
            carrousel__img.style.opacity = idx === 0 ? 1 : 0; // Rend la premiere image visible
            carrousel__figure.appendChild(carrousel__img);
            carrousel__imgs.push(carrousel__img);
        });

        let nextButton = document.createElement('button');
        nextButton.textContent = '>>>';
        nextButton.classList.add('next-button');
        carrousel.appendChild(nextButton);

        let previousButton = document.createElement('button');
        previousButton.textContent = '<<<';
        previousButton.classList.add('previous-button');
        carrousel.appendChild(previousButton);

        nextButton.addEventListener('click', function() {
            carrousel__imgs[index].style.opacity = 0;
            index = (index + 1) % carrousel__imgs.length;
            carrousel__imgs[index].style.opacity = 1;
        });

        previousButton.addEventListener('click', function() {
            carrousel__imgs[index].style.opacity = 0;
            index = (index - 1 + carrousel__imgs.length) % carrousel__imgs.length;
            carrousel__imgs[index].style.opacity = 1;
        });

        bouton.addEventListener('click', function() {
            carrousel.classList.add('carrousel--ouvrir');
        });

        carrousel__x.addEventListener('click', function() {
            carrousel.classList.remove('carrousel--ouvrir');
        });
    });
})();
