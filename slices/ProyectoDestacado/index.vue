<template>
  <section class="projecte_destacat" v-if="slice.primary.orientacio_imatge == 'Esquerra'">
    <div class="columna_esquerra">
      <PrismicImage :field="slice.primary.imatge" />
    </div>
    <div class="columna_dreta">
      <div class="text">
        <div class="row_dreta">
          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10.4282L27.4 10.4282" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4286 1L1 10.4286" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4286 19.8573L1 10.4287" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          <template v-if="slice.primary.link_projecte.lang == 'ca'">
            <NuxtLink :to='"/projecte/"+slice.primary.link_projecte.uid'>
              <PrismicRichText :field="slice.primary.text" />
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink :to='slice.primary.link_projecte.lang+"/projecte/"+slice.primary.link_projecte.uid'>
              <PrismicRichText :field="slice.primary.text" />
            </NuxtLink>
          </template>
            
        </div>
       
        <div><span>{{ slice.primary.sigles[0].text }}</span></div>
      </div>
    </div>
  </section>
  <section class="projecte_destacat" v-else>
    <div class="columna_esquerra">
      <div class="text">
        <div class="row_esquerra">
          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 10.4292L1.6 10.4292" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.5714 19.8574L28 10.4289" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.5714 1.00014L28 10.4287" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <template v-if="slice.primary.link_projecte.lang == 'ca'">
            <NuxtLink :to='"/projecte/"+slice.primary.link_projecte.uid'>
              <PrismicRichText :field="slice.primary.text" />
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink :to='slice.primary.link_projecte.lang+"/projecte/"+slice.primary.link_projecte.uid'>
              <PrismicRichText :field="slice.primary.text" />
            </NuxtLink>
          </template>
        </div>
        
        <div><span>{{ slice.primary.sigles[0].text }}</span></div>
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
}
</script>