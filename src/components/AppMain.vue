<script>
import CardsFound from './CardsFound.vue';
import CardsList from './CardsList.vue';

export default{ 
   name:'MainComponent',
   components: {
    CardsFound,
    CardsList
   }
};
</script>

<template>
    <main>
        <div class="container">
            <div>ricerca</div>
            <CardsFound />
            <CardsList />
        </div>

    </main>
</template>