<template>
  <section class="doble_col">
    <template v-if="slice.primary.orientacio_imatge == 'Dreta'">
      <template v-if="slice.primary.tipus_imatge == 'Horizontal'">
        <div class="texto_2col">
          <PrismicRichText :field="slice.primary.text" />
        </div>
        <figure>
            <PrismicImage :field="slice.primary.imatge" />
        </figure>
        </template>
          <template v-else>
            <div class="texto_2col vertical">
          <PrismicRichText :field="slice.primary.text" />
        </div>
      <figure>
          <PrismicImage :field="slice.primary.imatge" />
      </figure>
        </template>
    </template>
    <template v-else>
      <template v-if="slice.primary.tipus_imatge == 'Horizontal'">
      <figure>
          <PrismicImage :field="slice.primary.imatge" />
      </figure>
      <div class="texto_2col">
        <PrismicRichText :field="slice.primary.text" />
      </div>
    </template>
    <template v-else>
      <figure>
          <PrismicImage :field="slice.primary.imatge" />
      </figure>
      <div class="texto_2col vertical">
        <PrismicRichText :field="slice.primary.text" />
      </div>
    </template>
    </template>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "DobleColumna",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
