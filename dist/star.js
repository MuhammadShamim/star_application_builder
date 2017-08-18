"use strict";
let el = '#app';
let data;
let methods;

data = {
    favico: document.querySelector("link[rel='shortcut icon']").href,
    title: document.title,
    icon: 'fa fa-star',
    githubLink: 'https://github.com/MuhammadShamim/star_application_builder',
    partialArtsLink: '<a href="https://shamina.us">Partial Arts</a>',
    love: 0,
    bonus: 10,
    x: 0,
    y: 0
};
methods = {
    changeTitle(event) {
        this.title = event.target.value
        document.title = event.target.value
    },
    changeFavicon(event) {
        this.favico = event.target.value
        document.querySelector("link[rel='shortcut icon']").href = event.target.value
    },
    changeIcon(event) {
        this.icon = event.target.value
    },
    bonusHit() {
        return `Hello Star! You love ${this.title}`
    },
    lovePlus(step, event) {
        this.love += step;
    },
    updateCoordinates(event) {
        this.x = event.clientX
        this.y = event.clientY
    }
};

new Vue({
    el,
    data,
    methods
});