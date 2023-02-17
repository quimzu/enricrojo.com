<template>
    <main>
      <SliceZone :slices="page.data.slices" :components="components" />
      <h1>Proyecto Boira</h1>
        <template v-for="post in posts">
            <h2><a :href="$route.path + '/' + post.slugs[0]">{{ post.data.titol_projecte[0].text }}</a></h2>
        </template>
    </main>
  </template>
  
  <script>
import { components } from '~/slices'

  export default {
  
    
    
    async asyncData({ $prismic, error , params, i18n}) {
      // Query last posts
      const lang = i18n.locale
      const page = await $prismic.api.getByUID('page', 'home', { lang })
        const posts = await $prismic.api.query(
            $prismic.predicate.at('document.type', 'projectes'),
            {lang}
      )
      

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
  