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
       


        <SliceZone :slices="post.data.slices" :components="components"/>
      <!--  <template v-if="post.data.slices[0].items[0] != null">
        <div class='slideshow-container'>
          <template v-for="img in post.data.slices[0].items ">
            <div class="mySlides fade">
                <img :src="img.imatge.url" style="width:100%">
            </div>
          </template>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</nuxt-link>
        <a class="next" onclick="plusSlides(1)">&#10095;</nuxt-link>
        <br>
        </div>
        </template>-->


    <template v-if="post.lang == 'ca'">
      <section class="projectes_relacionats" v-if="ProjecteRelacionat1 != null || ProjecteRelacionat2 != null">
        <div class="header_proy_relacionats">
          <h3>Otros proyectos</h3>
          <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5714 27.4L10.5714 1.00002" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.14282 17.9715L10.5714 27.4" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 17.9715L10.5714 27.4" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <article v-if="ProjecteRelacionat1 != null">
            <img :src="ProjecteRelacionat1.data.imatge_quadrada.url">
            <nuxt-link :to='"/projecte/"+post.data.projecte_relacionat_1.uid' ><h4>{{ ProjecteRelacionat1.data.titol_projecte[0].text }}</h4>
            <span>{{ ProjecteRelacionat1.data.codi_projecte }}</span></nuxt-link>
          </article>
          <article v-if="ProjecteRelacionat2 != null">
            <img :src="ProjecteRelacionat2.data.imatge_quadrada.url">
            <nuxt-link :to='"/projecte/"+post.data.projecte_relacionat_2.uid' ><h4>{{ ProjecteRelacionat2.data.titol_projecte[0].text }}</h4>
            <span>{{ ProjecteRelacionat2.data.codi_projecte }}</span></nuxt-link>
          </article>
        </div>
      </section>
    </template>
    <template v-else>
      <section class="projectes_relacionats" v-if="ProjecteRelacionat1 != null || ProjecteRelacionat2 != null">
        <div class="header_proy_relacionats">
          <h3>Altres projectes</h3>
          <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5714 27.4L10.5714 1.00002" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.14282 17.9715L10.5714 27.4" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 17.9715L10.5714 27.4" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <article v-if="ProjecteRelacionat1 != null">
            <img :src="ProjecteRelacionat1.data.imatge_quadrada.url">
            <nuxt-link :to='"/es-es/projecte/"+post.data.projecte_relacionat_1.uid' ><h4>{{ ProjecteRelacionat1.data.titol_projecte[0].text }}</h4>
            <span>{{ ProjecteRelacionat1.data.codi_projecte }}</span></nuxt-link>
          </article>
          <article v-if="ProjecteRelacionat2 != null">
            <img :src="ProjecteRelacionat2.data.imatge_quadrada.url">
            <nuxt-link :to='"/es-es/projecte/"+post.data.projecte_relacionat_2.uid' ><h4>{{ ProjecteRelacionat2.data.titol_projecte[0].text }}</h4>
            <span>{{ ProjecteRelacionat2.data.codi_projecte }}</span></nuxt-link>
          </article>
        </div>
      </section>
    </template>


    </main>
</template>
  
<script>

import { components } from '~/slices'

export default {
    async asyncData ({ $prismic, params, store, i18n }) {
        const lang = i18n.locale
        const post = await $prismic.api.getByUID("projectes", params.uid, { lang });
        const ProjecteRelacionat1 = await $prismic.api.getByUID("projectes", post.data.projecte_relacionat_1.uid, { lang });
        const ProjecteRelacionat2 = await $prismic.api.getByUID("projectes", post.data.projecte_relacionat_2.uid, { lang });
        await store.dispatch('prismic/load', { lang, page: post })
        return {
            post,
            ProjecteRelacionat1,
            ProjecteRelacionat2,
        };
    },
    data () {
     return { 
      components,


     }
    },
    head () {
    return {
      title: `${this.$prismic.asText(this.post.data.title)} | ${this.$prismic.asText(this.$store.state.prismic.settings.data.siteTitle)}`,
     script: [
        {
          hid: 'stripe', 
          src: '../slider.js', 
          defer: true,
          body: true,

        }
      ]
    }
  }, 
  mounted: () => {
    console.log('mounted')
  },

}
</script>
