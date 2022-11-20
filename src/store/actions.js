import { api } from 'boot/axios'

export default {
  async listaPropiedades({ commit, state }) { // Hecho con Graphql
    const propiedades = await api.post(
      "/data/graphql",
      {
        query: `{
          propiedades(where: {categoryId: 2}, first: 100) {
            nodes {
              title
              slug
              precio {
                precio
                precioUf
              }
              operacion {
                operacion
              }
              importancia {
                importancia
              }
              featuredImage {
                node {
                  sourceUrl(size: MEDIUM)
                  altText
                  link
                }
              }
              direccion {
                ciudad
                direccion
              }
              datos {
                areaTotal
                banos
                habitaciones
              }
              categoriaGraphql {
                categoria
              }
            }
          }
        }`
      }
    )
    commit("SET_PROPIEDADES", propiedades.data.data.propiedades.nodes);
  },
};
