<template>
  <div>
    <div v-if="soloPropiedad">
      <h1>{{soloPropiedad.title}}</h1>
    </div>
    <q-list bordered separator>
      <Card v-for="(propi,i) in listadoPropiedades" :key="i" :propiedad="propi"/>
    </q-list>
  </div>
</template>

<script>
import { api } from 'boot/axios'
import { mapGetters } from "vuex";
import Card from "../../components/Card.vue"

export default {
  components:{
    Card
  },
  data() {
    return {
      soloPropiedad: null
    }
  },
  mounted() {
    this.getData()
  },
  computed: {
    ...mapGetters(["listadoPropiedades"])
  },
  methods: {
    getData() {
      api.post("/data/graphql",{
        query: `{
          propiedad(id: "${this.$route.params.slug}", idType: URI) {
            databaseId
            title
            agentes {
              agentes
            }
            categoriaGraphql {
              categoria
            }
            datos {
              banos
              habitaciones
              areaTotal
            }
            detallesAdicionales {
              detalles
            }
            direccion {
              ciudad
              direccion
            }
            espaciosComunes {
              espaciosComunes
            }
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
            importancia {
              importancia
            }
            incluye {
              incluye
            }
            operacion {
              operacion
            }
            precio {
              precio
              precioUf
            }
            seo {
              metaDesc
              metaKeywords
              title
            }
            slug
            youtube {
              youtube
            }
          }
        }`
      })
      .then(result => {
        this.soloPropiedad = result.data.data.propiedad
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
