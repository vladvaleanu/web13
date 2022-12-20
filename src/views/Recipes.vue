<template>
    <main class="home-page">
        <h1>Recipes</h1>
        <p>This is the recipes page.</p>
        <button @click="togglePopup">Add new Recipe</button>
        <div class="recipes">
            <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.slug">
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

                <form @submit.prevent="">
                    <div class="group">
                        <label>Title</label>
                        <input type="text">
                    </div>

                    <div class="group">
                        <label>Description</label>
                        <textarea></textarea>
                    </div>

                    <div class="group">
                        <label>Ingredients</label>
                        <div class="ingredients">
                            <input type="text">
                        </div>
                        <button class="button">Add Ingredient</button>
                    </div>

                    <div class="group">
                        <label>Method</label>
                        <div class="method">
                            <textarea></textarea>
                        </div>
                        <button class="button">Add Step</button>
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

export default {
    name: 'Recipes',
    setup() {
        const newRecipe = ref(
            {
                title: '',
                description: '',
                ingredients: [],
                method: [],
                ingredientsRows: 1,
                methodRows: 1
            }
        );
        const popupOpen = ref(false);

        const togglePopup = () => {
            popupOpen.value = !popupOpen.value;
        }

        return {
            newRecipe,
            togglePopup,
            popupOpen
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