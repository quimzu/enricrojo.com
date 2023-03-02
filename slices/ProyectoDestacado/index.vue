<template>
  <section class="projecte_destacat" v-if="slice.primary.orientacio_imatge == 'Esquerra'">
    <div class="columna_esquerra">
      <PrismicImage :field="slice.primary.imatge" />
    </div>
    <div class="columna_dreta">
      <div class="text">
        <PrismicRichText :field="slice.primary.text" />
        <PrismicRichText :field="slice.primary.sigles" />
      </div>
    </div>
  </section>
  <section class="projecte_destacat" v-else>
    <div class="columna_esquerra">
      <div class="text">
        <PrismicRichText :field="slice.primary.text" />
        <PrismicRichText :field="slice.primary.sigles" />
      </div>
    </div>
    <div class="columna_dreta">
      <PrismicImage :field="slice.primary.imatge" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "ProyectoDestacado",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  async asyncData ({ $prismic, params, store }) {
    const lang = slice.primary.projecte.lang
    const post = await $prismic.api.getByUID("projectes", slice.primary.projecte.uid);
    await store.dispatch('prismic/load', { lang, post })
    return {
        post
    };
    },
}
</script>