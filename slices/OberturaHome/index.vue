<template>
  <section class="obertura">
    <PrismicRichText :field="slice.primary.parrafo_izquierda" />
    <PrismicImage :field="slice.primary.imagen" />
    <PrismicRichText :field="slice.primary.parrafo_derecha" />
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "OberturaHome",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
