# refacto

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

dans public index.html, effacement de l'attribut style dans la balise body dont les propriétés sont reportées dans le fichier App.vue, selecteur #app pour cause :
- De doublon de propriété (background-color) .
- D'une pratique ancienne (Privilégier l'ajout de css dans des fichiers séparés ou dans le cadre de vue;js, au sein même du fichier )
- Risque de conflit ou d'étourderie avec #app.

Composant :
----------------------------------------- CategorySlider.vue (from 104 lignes à 77 lignes)
    CategorySlider.vue:
        Template:
            modification couleur ligne 28 (#FFFFFF vers #FFF).
            Effacement des fonctions scrollLeft() et scrollRight() (Non utilisées).
        CSS:
            Slider centré:
                .slider-container : ajout de margin: auto, effacement de la propriété position: relative;
                .slider: effacement des propriétés margin: 0, scroll-behavior: smooth, position: relative; et width: 400%;
            effacement de selecteurs non utilisés:
                selecteur a{} (bouton utilisé)
            effacement de propriétés ou valeurs :
                .slider-button: !important, font-size: 16px, box-sizing: border-box;
                .button-overlay: content: "", text-align: center;
            ajustement des espacements entre les seleteurs.
--------------------------------------- ComingSoon.vue ((from 70lignes à 70 lignes))
    ComingSoon:
        CSS:
            effacement de propriétés ou valeurs :
                .slider-container: width: 100%;
                  .slider: scroll-behavior: smooth, margin: 0
--------------------------------------- MenuSlider.vue ((from 764 lignes à 42 lignes))
    MenuSlider.vue
        script:
            effacement des fonctions scrollLeft() et scrollRight() Non utilisées.
        CSS:
            effacement de propriétés ou valeurs :
                .slider-container: width: 100%, align-items: center, position: relative;
                .slider: flex-wrap: nowrap, padding: 0, scroll-behavior: smooth, margin: 0;
             ajustement des espacements entre les seleteurs.
--------------------------------------- MovieCard.vue ((from 764 lignes à 42 lignes))
    MovieCard.vue
        script:
            effacement du paramètre id dans la fonction goToMovie (jamais utilisé)
        CSS:
            ajout de propriétés ou valeurs:
                .movieCard: cursor: pointer; (Sans analyser le code je n'aurais jamais cliqué dessus)
--------------------------------------- Popular.vue
    Popular.vue, TopRated.vue
        CSS:
            effacement de propriétés ou valeurs :
                .slider: padding: 0, scroll-behavior: smooth, flex-wrap: nowrap, margin: 0;
--------------------------------------- RankingCard.vue
    RankingCard.vue
        script:
            petite faute de frappe ligne 51 : type;
--------------------------------------- Navbar.vue
    Navbar.vue
        script:
            effacement de la variable route et de l'import, ligne 23 et 29 (non utilisée).
--------------------------------------- SearchBar.vue
    SearchBar.vue:
        script:
            réparation de la barre de recherche lors de l'écriture qui laissait apparaitre "Rechercher" par dessus la recherche. : ajout d'un v-model et modification de la transparence en css pour éviter la double écriture (Du au v-model de l'input et de la variable dans la div).

    