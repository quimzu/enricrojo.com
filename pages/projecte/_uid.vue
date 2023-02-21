<template>
    <main>
        <h2>{{post.data.titol_projecte[0].text}}</h2>
        <SliceZone
            :slices="post.data.slices"
            :components="{
            text_slice: Slider,
            }"
        />
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
import Slider from '/slices/Slider'

export default {
    async asyncData({ $prismic, $content, params,  i18n, store }) {
        const lang = i18n.locale
        
        const post = await $prismic.api.getByUID("projectes", params.uid, { lang });
        await store.dispatch('prismic/load', { lang, post })

        return {
            post,
            Slider
        };
    },
    layout: 'default',
    head() {
        return{
            script: [
                {
                    src: "/slider.js",
                    body: true
                }
            ]
        }
        
    }
}
</script>
