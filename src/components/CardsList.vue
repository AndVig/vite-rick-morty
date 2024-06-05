<script>
import { store } from '../store';
export default {
    name: "CardsList",
    data(){
        return {
            store
        }
    },
}


</script>

<template>
    <div>
        <ul>
            <li class="personaggi" v-for="character in store.results">
                {{ character.name }}
            </li>
        </ul>
    </div>
</template>