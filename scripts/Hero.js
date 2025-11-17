class Hero {
    selectors = {
        root: '[data-js-hero]',
        buttonPortfolio: '[data-js-button-portfolio]',
        buttonContact: '[data-js-button-contact]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.buttonPortfolio = this.rootElement.querySelector(this.selectors.buttonPortfolio);
        this.buttonContact = this.rootElement.querySelector(this.selectors.buttonContact);
        this.setDefaultActiveButton();
        this.bindEvents();
    }

    setDefaultActiveButton() {
        this.buttonPortfolio.classList.add(this.stateClasses.isActive); 
    }

    onButtonMouseEnter = (event) => {
        if (this.buttonPortfolio.classList.contains(this.stateClasses.isActive)) {
            this.buttonPortfolio.classList.remove(this.stateClasses.isActive);
        }
        event.currentTarget.classList.add(this.stateClasses.isActive);
    }

    onButtonMouseLeave = (event) => {
        event.currentTarget.classList.remove(this.stateClasses.isActive);
        if (!this.buttonContact.classList.contains(this.stateClasses.isActive)) {
            this.buttonPortfolio.classList.add(this.stateClasses.isActive);
        }
    }

    bindEvents() {
        this.buttonPortfolio.addEventListener('mouseenter', this.onButtonMouseEnter);
        this.buttonPortfolio.addEventListener('mouseleave', this.onButtonMouseLeave);
        this.buttonContact.addEventListener('mouseenter', this.onButtonMouseEnter);
        this.buttonContact.addEventListener('mouseleave', this.onButtonMouseLeave);
    }
}

export default Hero;