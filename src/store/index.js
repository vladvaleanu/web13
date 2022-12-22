import { createStore } from 'vuex'

export default createStore({
    state: {
        recipes: [
            {
                slug: 'katsu-curry',
                title: 'Katsu Curry',
                description: 'lorem ipsum dolores amet yum yum',
                ingredients: [
                    '1 kg pui',
                    '500g rosii la borcan',
                    'smantana',
                ],
                method: [
                    'faci curry-ul',
                    'mananci',
                ]
            },
            {
                slug: 'pizza',
                title: 'pizza',
                description: 'lorem ipsum dolores amet foarte yum yum',
                ingredients: [
                    'toppinguri',
                    'aluat',
                    'smantana',
                ],
                method: [
                    'faci pizza',
                    'bagi la cuptor',
                    'mananci',
                ]
            }
        ]
        
    },
    mutations: {
        ADD_RECIPE (state, recipe) {
            state.recipes.push(recipe)
          }
    }
})