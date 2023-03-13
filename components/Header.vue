<template>
  <Bounded class="main" as="header" y-padding="sm">
    <div class="">
      <NuxtLink :to="localePath('/')" class="logo">
		<PrismicImage :field="settings.data.logo" />
      </NuxtLink>
      <nav>
        <ul class="">
          <li
            v-for="item in navigation.data.links"
            :key="$prismic.asText(item.label)"
            class="font-semibold tracking-tight text-slate-800"
          >
              <PrismicLink :field="item.link">
                {{ $prismic.asText(item.label ) }}
              </PrismicLink>
          </li>

         
        </ul>
      </nav>
      <ul>
          <template  v-if="alternateLanguages[0].lang == 'es-es'">
            <li>
              <template>
                <span class="activo sr-only">CA</span>
              </template>
            </li>
            <li
            v-for="lang in alternateLanguages"
            :key="lang.lang"
          >
            <PrismicLink :field="{ ...lang, link_type: 'Document' }">
              <template>
                <span class="sr-only">ES</span>
              </template>
            </PrismicLink>

            </li>
          </template>
          <template  v-else>
            <li
            v-for="lang in alternateLanguages"
            :key="lang.lang"
          >
            <PrismicLink :field="{ ...lang, link_type: 'Document' }">
              <template>
                <span class="sr-only">CA</span>
              </template>
            </PrismicLink>

            </li>
            <li>
              <template>
                <span class="activo sr-only">ES</span>
              </template>
            </li>
            
          </template>
	  </ul>
	  
    
    
  <!--   <h2>Redes Sociales</h2>
      <ul>
      <li v-for="xxss in navigation.data.xxss_menu">
        <PrismicLink :field="xxss.link_xxss">
          <span>{{ xxss.nom_xxss[0].text }}</span>
        </PrismicLink>
      </li>
    </ul>
    -->
    </div>
  </Bounded>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      required: true
    },
    alternateLanguages: {
      type: Array,
      default: () => []
    }
  } 
}
</script>
