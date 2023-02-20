<template>
    <main>
      <h1>Proyecto Boira</h1>
      <section>
        <template v-for="post in posts">
          <div class="projecte"><a :href="$route.path + '/' + post.slugs[0]">
            <figure class="img_projecte">
              <img :src="post.data.imatge_destacada.url">
            </figure>
            <h2>{{ post.data.titol_projecte[0].text }}</h2>
            <p>{{ post.data.codi_projecte }}</p>
          </a></div>
        </template>
      </section>
    </main>
  </template>
  
  <script>
import { components } from '~/slices'

  export default {
  
    
    
    async asyncData({ $prismic, store, error , params, i18n}) {
      // Query last posts
      const lang = i18n.locale
      const page = await $prismic.api.getByUID('page', 'home', { lang })
        const posts = await $prismic.api.query(
            $prismic.predicate.at('document.type', 'projectes'),
            {lang}
      )
      await store.dispatch('prismic/load', { lang, page })

      

      // Returns data to be used in template 
      return {
        posts: posts.results,
        page
      };
      
    },
    data () {
    return { components }
    },
    layout: 'default'
  }
  </script>
  