<template>
    <main>
        <PrismicRichText :field="post.data.titol_projecte" />

        <PrismicImage :field="post.data.imatge_destacada" />

        <span>{{ post.data.codi_projecte }}</span>
        <PrismicRichText :field="post.data.descripcio_projecte" />


        <SliceZone :slices="post.data.slices" :components="components" />

        <ul>
		<h2>idioma</h2>
		<li
            v-for="lang in alternateLanguages"
            :key="lang.lang"
          >
            <PrismicLink :field="{ ...lang, link_type: 'Document' }">
              <span class="sr-only">{{ lang.lang }}</span>
            </PrismicLink>
          </li>
	  </ul>
      <!--  <template v-if="post.data.slices[0].items[0] != null">
        <div class='slideshow-container'>
          <template v-for="img in post.data.slices[0].items ">
            <div class="mySlides fade">
                <img :src="img.imatge.url" style="width:100%">
            </div>
          </template>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        <br>
        </div>
        </template>-->
    </main>
</template>
  
<script>

import { components } from '~/slices'

export default {
    async asyncData ({ $prismic, params, store, i18n }) {
        const lang = i18n.locale
        const post = await $prismic.api.getByUID("projectes", params.uid, { lang });
        await store.dispatch('prismic/load', { lang, post })
        return {
            post,
        };
    },
    data () {
     return { components }
    },
    head () {
    return {
      title: `${this.$prismic.asText(this.post.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.siteTitle)}`
    }
  }
}
</script>
