<template>
  <section class="triple_col">
    <PrismicImage :field="slice.primary.imatge_1" />
    <PrismicImage :field="slice.primary.imatge_2" />
    <PrismicImage :field="slice.primary.imatge_3" />
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