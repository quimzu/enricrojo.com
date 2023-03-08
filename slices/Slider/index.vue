<template>
  <section class="slider">
        <div class='slideshow-container'>
          <template v-for="(item, i) in slice.items">
            <div class="mySlides fade">
              <PrismicImage :field="item.imatge" />
            </div>
          </template>
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
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
  head: {
    script: [
        {
            type: 'text/javascript',
            src: '/slider.js',
            body: true
        },
    ]
  }

}
</script>