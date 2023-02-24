<template>
    <main>
      <h1 v-if="page.lang == 'ca'">Projectes</h1>
      <h1 v-if="page.lang == 'es-es'">Proyectos</h1>
     
      <section>
        <article v-for="post in posts">
          1
        <!--<PrismicImage :field="post.data.imatge_destacada" />
        {{ post.results.data.imatge_destacada }} 
        -->
        <PrismicImage :field="post.data.imatge_destacada" />
        {{ post.data }}
        </article>
      </section>
    </main>
  </template>
  
  <script>
import { components } from '~/slices'

  export default {
     
    
    async asyncData({ $prismic, store, error , params, i18n}) {
      // Query last posts
      const lang = i18n.locale
      const page = await $prismic.api.getByUID('page', 'projecte', { lang })
      const posts = await $prismic.api.query(
            $prismic.predicate.at('document.type', 'projectes'),
            {lang}
      )
      await store.dispatch('prismic/load', { lang, page, posts })

      

      // Returns data to be used in template 
      return {
        posts: posts.results,
        page
      };
      
    },
    data () {
    return { components }
    },
    head () {
    return {
      title: `${this.$prismic.asText(this.page.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.siteTitle)}`
    }
  }
  }
  </script>
  