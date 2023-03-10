<template>
  <section class="triple_col">
    <div class="triple_imgs">
    <PrismicImage :field="slice.primary.imatge_1" />
    <PrismicImage :field="slice.primary.imatge_2" />
    <PrismicImage :field="slice.primary.imatge_3" />
    </div>
    <p>{{ slice.primary.paragraf[0].text }}</p>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TripleColumna",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>