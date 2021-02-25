<template>
    <div>
        Statistics.vue
        <Nav />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Nav from "../components/Nav.vue"
import Statistics from '@views/Statistics.vue';

    export default Vue.extend({
        components: {Nav}   
    })
</script>

<style lang="scss" scoped>

</style>