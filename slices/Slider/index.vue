<template>
  <section class="slider">
        <div class='slideshow-container'>
          <template v-for="(item, i) in slice.items">
            <div v-if="i == 0 " class="mySlides fade" style="display:block">
              <PrismicImage :field="item.imatge" />
            </div>


            <div v-else class="mySlides fade" style="display:none">
              <PrismicImage :field="item.imatge" />
            </div>
          </template>
          <a class="prev" onclick="plusSlides(-1)">
            <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10.4282L27.4 10.4282" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.4286 1L1 10.4286" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.4286 19.8573L1 10.4287" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a class="next" onclick="plusSlides(1)">
            <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 10.4292L1.6 10.4292" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5714 19.8574L28 10.4289" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5714 1.00014L28 10.4287" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        <br>
      </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Slider",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  

}
</script>