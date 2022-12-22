<template>
    <main class="home-page">
        <h1>Recipes</h1>
        <p>This is the recipes page.</p>
        <button @click="togglePopup">Add new Recipe</button>
        <div class="recipes">
            <div class="card" v-for="recipe in $store.state.recipes"
            :key="recipe.slug">
                <h2>{{ recipe.title }}</h2>
                <p>{{ recipe.description }}</p>
                <router-link :to="`/recipe/${recipe.slug}`">
                    <button class="button">View Recipe</button>
                </router-link>
            </div>
        </div>

        <div class="add-recipe-popup" v-if="popupOpen">
            <div class="popup-content">
                <h2>Add new recipe</h2>

                <form @submit.prevent="addNewRecipe">
                    <div class="group">
                        <label>Title</label>
                        <input type="text" v-model="newRecipe.title" />
                    </div>

                    <div class="group">
                        <label>Description</label>
                        <textarea v-model="newRecipe.description"></textarea>
                    </div>

                    <div class="group">
                        <label>Ingredients</label>
                        <div class="ingredient" v-for="i in newRecipe.ingredientRows"
                        :key="i">
                            <input type="text" v-model="newRecipe.ingredients[i - 1]" />
                        </div>
                        <button type="button" class="button" @click="addNewIngredient">Add Ingredient</button>
                    </div>

                    <div class="group">
                        <label>Method</label>
                        <div class="method" v-for="i in newRecipe.methodRows"
                        :key="i">
                            <textarea v-model="newRecipe.method[i-1]"></textarea>
                        </div>
                        <button class="button" @click="addNewStep">Add Step</button>
                    </div>
                    <button class="button" type="submit">Add Recipe</button>
                    <button type="button" @click="togglePopup">Close</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Recipes',
    setup() {
        const newRecipe = ref(
            {
                title: '',
                description: '',
                ingredients: [],
                method: [],
                ingredientRows: 1,
                methodRows: 1
            }
        );
        const popupOpen = ref(false);
        const store = useStore();

        const togglePopup = () => {
            popupOpen.value = !popupOpen.value;
        }
 
        const addNewIngredient = () => {
            newRecipe.value.ingredientRows++;
        }

        const addNewStep = () => {
            newRecipe.value.methodRows++;
        }

        const addNewRecipe = () => {
            newRecipe.value.slug = newRecipe.value.title.toLowerCase().replace(/\s/g, '-');
            
            if(newRecipe.value.slug == '') {
                alert("Please enter a title");
                return;
            }

            store.commit('ADD_RECIPE', { ...newRecipe.value });

            newRecipe.value = {
                title: '',
                description: '',
                ingredients: [],
                method: [],
                ingredientRows: 1,
                methodRows: 1
            }

            togglePopup();
        }

        return {
            newRecipe,
            togglePopup,
            popupOpen,
            addNewIngredient,
            addNewStep,
            addNewRecipe
        }
    }

}
</script>

<style lang="scss" scoped>

    .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            
    }

    .card {
        h2, p {
        color: #FFF;
        }
    }

</style>