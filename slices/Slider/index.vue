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
  

}
</script>