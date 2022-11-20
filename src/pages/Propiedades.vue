<template>
  <div>
    <h1>Propiedades</h1>
    <q-list bordered separator>
      <Card v-for="(propi,i) in listadoPropiedades" :key="i" :propiedad="propi"/>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "../components/Card.vue"

export default {
  components:{
    Card
  },
  computed: {
    ...mapGetters(["listadoPropiedades"])
  },
}
</script>

<style lang="scss" scoped>

</style>
