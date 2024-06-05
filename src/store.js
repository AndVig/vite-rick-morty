import { reactive } from "vue";
export const store=reactive({
    results:[],
    meta:[],
    apiUrl:'https://rickandmortyapi.com/api/character'
})