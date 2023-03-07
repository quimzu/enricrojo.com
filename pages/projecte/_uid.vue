<template>
    <main>
        
      <section class="capcalera_detall">
        <PrismicImage class="img_detall" :field="post.data.imatge_detall" />
        <div class="col_info">
        <div><span>{{ post.data.codi_projecte }}</span></div>
        <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4286 1L10.4286 27.4" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.8572 10.4286L10.4286 1" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.00002 10.4286L10.4286 1" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <PrismicRichText class="titol_projecte" :field="post.data.titol_projecte" />
        <PrismicRichText :field="post.data.descripcio_projecte" />
      </div>
      </section>
       


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
        await store.dispatch('prismic/load', { lang, page: post })
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
