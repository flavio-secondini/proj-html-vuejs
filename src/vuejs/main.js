Vue.config.devtools = true;

var app = new Vue ({
  el:'#category-display',
  data: {
    categoriaAttiva: 'uomo',

    listaElementi: [
      {
        categoria: 'Uomo',
        valore: 'uomo',
      },
      {
        categoria: 'Donna',
        valore: 'donna',
      },
      {
        categoria: 'Accessori',
        valore: 'accessori',
      },
    ],

    offerteStagionaliUomo: [
      {
        immagine: './assets/img/black_elegant_leather_jacket-200x260.jpg',
        nome: 'Elegant Leather Jacket',
        descrizione: 'lorem ipsum',
        vecchioPrezzo: '678$',
        nuovoPrezzo: '453$',
      },
      {
        immagine: './assets/img/black_leather_suit-200x260.jpg',
        nome: 'Leather suit',
        descrizione: 'dolor sit amet',
        vecchioPrezzo: '789$',
        nuovoPrezzo: '342$',
      },
      {
        immagine: './assets/img/blue_jacket_and_white_stripe_tee-200x260.jpg',
        nome: 'Blue jacket',
        descrizione: 'lorem ipsum dolor',
        vecchioPrezzo: '',
        nuovoPrezzo: '345$',
      },
      {
        immagine: './assets/img/modern_black_leather_suit-200x260.jpg',
        nome: 'Modern black suit',
        descrizione: 'sit amet lorem',
        vecchioPrezzo: '547$',
        nuovoPrezzo: '132$',
      },
    ],

    offerteStagionaliDonna: [
      {
        immagine: './assets/img/black_leather_jacket-200x260.jpg',
        nome: 'Leather jacket',
        descrizione: 'giacca pelle nera',
        vecchioPrezzo: '',
        nuovoPrezzo: '659$',
      },
      {
        immagine: './assets/img/spring_printed_dress-200x260.jpg',
        nome: 'Spring dress',
        descrizione: 'vestito colore chiaro',
        vecchioPrezzo: '',
        nuovoPrezzo: '451$',
      },
      {
        immagine: './assets/img/hipster_black_top-200x260.jpg',
        nome: 'Black top',
        descrizione: 'top hipster nero',
        vecchioPrezzo: '859$',
        nuovoPrezzo: '534$',
      },
      {
        immagine: './assets/img/modern_love_tee-200x260.jpg',
        nome: 'Love tee',
        descrizione: 'indumento moderno',
        vecchioPrezzo: '954$',
        nuovoPrezzo: '451$',
      },
    ],

    offerteStagionaliAccessori: [
      {
        immagine: './assets/img/brown_dress_shoes-200x260.jpg',
        nome: 'Brown shoes',
        descrizione: 'scarpe eleganti marroni',
        vecchioPrezzo: '746$',
        nuovoPrezzo: '453$',
      },
      {
        immagine: './assets/img/casual_leather_belts-200x260.jpg',
        nome: 'Leather belt',
        descrizione: 'cintura da abito casual',
        vecchioPrezzo: '457$',
        nuovoPrezzo: '319$',
      },
      {
        immagine: './assets/img/modern_leather_boots-200x260.jpg',
        nome: 'Brown boots',
        descrizione: 'stivali marroni moderni',
        vecchioPrezzo: '',
        nuovoPrezzo: '348$',
      },
      {
        immagine: './assets/img/leather_gloves-200x260.jpg',
        nome: 'Leather gloves',
        descrizione: 'guanti marroni in pelle',
        vecchioPrezzo: '',
        nuovoPrezzo: '129$',
      },
    ],
  },
  mounted () {
  },
  methods: {
    // categoriaUomo: function () {
    //   this.categoriaAttiva = 'uomo'
    // },
    // categoriaDonna: function () {
    //   this.categoriaAttiva = 'donna'
    // },
    // categoriaAccessori: function () {
    //   this.categoriaAttiva = 'accessori'
    // },
    cambioCategoria: function (index) {
      this.categoriaAttiva = this.listaElementi[index].valore;
    }
  }
})

var app = new Vue ({
  el:'#arrow-display-small',
  data: {
    galleriaModelliSmall: [
      './assets/img/black_elegant_leather_jacket-120x156.jpg',
      './assets/img/black_leather_jacket-120x156.jpg',
      './assets/img/blue_leather_jacket-120x156.jpg',
      './assets/img/hipster_black_top-120x156.jpg',
      './assets/img/spring_printed_dress-120x156.jpg',
      './assets/img/leather_gloves-120x156.jpg',
      './assets/img/modern_leather_boots-120x156.jpg',
    ]
  },
  methods: {
  }
})

var app = new Vue ({
  el:'#arrow-display-large',
  data: {
    galleriaModelliLarge: [
      './assets/img/black_elegant_leather_jacket-400x520.jpg',
      './assets/img/black_leather_jacket-400x520.jpg',
      './assets/img/blue_leather_jacket-400x520.jpg',
      './assets/img/hipster_black_top-400x520.jpg',
      './assets/img/spring_printed_dress-400x520.jpg',
      './assets/img/leather_gloves-400x520.jpg',
      './assets/img/modern_leather_boots-400x520.jpg',
      './assets/img/modern_black_leather_suit-400x520.jpg',
      './assets/img/blue_jacket_and_white_stripe_tee-400x520.jpg',
      './assets/img/spring_printed_dress-400x520.jpg',
    ]
  },
  methods: {
  }
})

var app = new Vue ({
  el:'#testimonial',
  data: {
    categoriaAttiva:'1',

    testimonial1: {
      foto:'./assets/img/man_testimonial.png',
      descrizione:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      nome:'Dario Pineda',
      impiego:'Theme Fusion',
    },

    testimonial2: {
      foto:'./assets/img/woman_testimonial.png',
      descrizione:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      nome:'Lucia Pineda',
      impiego:'Writer',
    },
  },
  methods: {
    elemento1: function () {
      this.categoriaAttiva = '1';
    },
    elemento2: function () {
      this.categoriaAttiva = '2';
    },
  }
})
