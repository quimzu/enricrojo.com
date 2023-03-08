<template>
    <div>
      <SliceZone :slices="page.data.slices" :components="components" />

      <section class="llista_projectes" v-if="isProjectes">
        <h1>Projectes</h1>
        <div class="projectes">
       <article class="projecte" v-for="post in posts">
        <section class="projecte_info">
          <div class="imgs_proj">
          <PrismicImage :field="post.data.imatge_destacada_1" />
          <PrismicImage :field="post.data.imatge_destacada_2" />
          <PrismicImage :field="post.data.imatge_destacada_3" />
          </div>
          <div class="text_proj">
          <div class="text_arriba">
          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10.4282L27.4 10.4282" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4286 1L1 10.4286" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4286 19.8573L1 10.4287" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <nuxt-link :to='"/projecte/"+post.uid'><h2>{{ post.data.titol_projecte[0].text }}</h2></nuxt-link>
          </div>
          <span>{{ post.data.codi_projecte }}</span>
        </div>

      </section>   
        </article>
      </div>
      </section>
      <section class="llista_projectes" v-if="isProyectos">
        <h1>Proyectos</h1>
        <div class="projectes">
       <article class="projecte" v-for="post in posts">
        <nuxt-link class="img_projecte" :to='"/es-es/projecte/"+post.uid'>
          <PrismicImage :field="post.data.imatge_destacada_1" />
          <PrismicImage :field="post.data.imatge_destacada_2" />
          <PrismicImage :field="post.data.imatge_destacada_3" />
          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10.4282L27.4 10.4282" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4286 1L1 10.4286" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4286 19.8573L1 10.4287" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <PrismicRichText :field="post.data.titol_projecte" />
          <span>{{ post.data.codi_projecte }}</span>
        </nuxt-link>   
        </article>
      </div>
      </section>
    </div>
</template>

<script>
import { components } from '~/slices'

export default {
  data () {
    return { components }
  },
  async asyncData ({ $prismic, params, store, i18n }) {
    const lang = i18n.locale
    const page = await $prismic.api.getByUID('page', params.uid, { lang })
    const { results: posts } = await $prismic.api.query($prismic.predicate.at('document.type', 'projectes'),{lang}
      )
      await store.dispatch('prismic/load', { lang, page })

    return {
      page,
      posts
    }
  },

  head () {
    return {
      title: `${this.$prismic.asText(this.page.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.siteTitle)}`
    }
  },
  computed: {
    isProjectes() {
     return this.$route.params.uid === 'projectes'
  },
  isProyectos() {
     return this.$route.params.uid === 'proyectos'
  }
  }
}
</script>
