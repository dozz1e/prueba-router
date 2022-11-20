<template>
  <q-item :to="`/propiedad/${propiedad.slug}`">
    {{propiedad.title}}
  </q-item>
</template>

<script>
export default {
  name: 'Card',
  props: {
    propiedad: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
