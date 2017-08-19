"use strict";

var el = '#app';
var data;
var methods;
var computed;

data = {
    favico: document.querySelector("link[rel='shortcut icon']").href,
    name: 'Star Application Builder',
    title: document.title,
    authorName: 'Muhammad Akhtar Shamim',
    authorLink: 'https://github.com/MuhammadShamim',
    icon: 'fa fa-star',
    githubRepo: 'https://github.com/MuhammadShamim/star_application_builder',
    githubDoc: 'https://github.com/MuhammadShamim/star_application_builder/blob/master/README.md',
    // partialArtsLink: '<a href="https://shamina.us">Partial Arts</a>',
    love: 0,
    x: 0,
    y: 0
};

methods = {
    changeTitle: function (event) {
        this.title = event.target.value
        document.title = event.target.value
    },
    changeFavicon: function (event) {
        this.favico = event.target.value
        document.querySelector("link[rel='shortcut icon']").href = event.target.value
    },
    changeIcon: function (event) {
        this.icon = event.target.value
    },
    changeName: function (event) {
        this.name = event.target.value
    },

    lovePlus: function (step, event) {
        this.love += step;
    },
    updateCoordinates: function (event) {
        this.x = event.clientX
        this.y = event.clientY
    }
};
computed = {
    bonus: function() {
        return 10
    },
    bonusHit: function () {
        return this.love >= 50 ? `Yo Wong! We love you!` : `you dont love me :(` //${this.title}
    }
}

new Vue({
    el,
    data,
    methods,
    computed
});