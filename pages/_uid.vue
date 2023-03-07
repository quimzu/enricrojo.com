<template>
    <div>
      <SliceZone :slices="page.data.slices" :components="components" />

      <section class="llista_projectes" v-if="isProjectes">
        <h1>Projectes</h1>
        <div class="projectes">
       <article class="projecte" v-for="post in posts">
        <nuxt-link class="img_projecte" :to='"/projecte/"+post.uid'>
          <PrismicImage :field="post.data.imatge_destacada" />
        </nuxt-link>   
        </article>
      </div>
      </section>
      <section class="llista_projectes" v-if="isProyectos">
        <h1>Proyectos</h1>
        <div class="projectes">
       <article class="projecte" v-for="post in posts">
        <nuxt-link class="img_projecte" :to='"/es-es/projecte/"+post.uid'>
          <PrismicImage :field="post.data.imatge_destacada" />
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
