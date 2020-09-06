const main = {
    buttonDroit: null,
    buttonGauche: null,
    ecranGauche: null,
    ecranDroit: null,
    textDroit: null,
    textGauche: null,

    init() {
        this.buttonDroit = document.querySelector('.btnRight')
        this.buttonGauche = document.getElementById('btnLeft')
        this.ecranGauche = document.querySelector('.left')
        this.ecranDroit = document.querySelector('.right')
        this.textDroit = document.querySelector('.contenuDroit')
        this.textGauche = document.querySelector('.contenuGauche')
        this.apparitionDroit()
        this.apparitionGauche()
    },

    apparitionDroit() {
        this.buttonDroit.addEventListener('click', (e) => {
            this.ecranGauche.classList.add('disparition')
            this.ecranDroit.classList.add('elargissement')
            this.textDroit.classList.remove('disparitionDroite')
            this.textDroit.classList.add('apparitionDroite')

        })
    },
    apparitionGauche() {
            this.buttonGauche.addEventListener('click', (e) => {
                this.ecranDroit.classList.add('disparition')
                this.ecranGauche.classList.add('elargissement')
                this.textGauche.classList.remove('disparition')
        })
    },
}
main.init()
