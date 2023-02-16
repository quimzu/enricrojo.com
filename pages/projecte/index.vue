<template>
    <main>
      <h1>Proyecto Boira</h1>
        <template v-for="post in posts">
            <h2><a :href="$route.path + '/' + post.slugs[0]">{{ post.data.titol_projecte[0].text }}</a></h2>
        </template>
    </main>
  </template>
  
  <script>


  export default {
    
    
    async asyncData({ $prismic, error , params}) {
      // Query last posts
       const posts = await $prismic.api.query(
            $prismic.predicate.at('document.type', 'projectes'),
      { lang: params.lang},
      )
      

      // Returns data to be used in template 
      return {
        posts: posts.results,
      };
      
    }
  }
  </script>
  