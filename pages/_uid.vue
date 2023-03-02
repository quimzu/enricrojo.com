<template>
    <div>
      <SliceZone :slices="page.data.slices" :components="components" />

      <section v-if="isProjectes">
        <h1 v-if="page.lang == 'ca'">Projectes</h1>
        <h1 v-if="page.lang == 'es-es'">Proyectos</h1>
       <article  v-for="post in posts">
        <nuxt-link :to='$route.fullPath+"/"+post.slugs[0]'>
          <PrismicImage :field="post.data.imatge_destacada" />
        </nuxt-link>   
        </article>
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
  }
  }
}
</script>
