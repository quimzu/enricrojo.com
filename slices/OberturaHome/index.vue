<template>
  <section class="obertura">
    <div class="obertura_1col">
    <PrismicRichText :field="slice.primary.parrafo_izquierda" />
    <figure class="mySlides">
      <PrismicImage :field="slice.primary.imagen_principal" />
    </figure>
    <template v-for="(item, i) in slice.items">    
      <figure class="mySlides">
        <PrismicImage :field="item.imagen" />
      </figure>
    </template>
    <PrismicRichText :field="slice.primary.parrafo_derecha" />
    </div>
    <h1 class="titol_obertura">{{slice.primary.titulo[0].text}}</h1>
    <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5714 27.4L10.5714 1.00002" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.14282 17.9715L10.5714 27.4" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20 17.9715L10.5714 27.4" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "OberturaHome",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  head() {
    return {
      script: [
        {
          src: '/sliderObertura.js',
          body: true
        }
      ]
    }
  }
}
</script>
