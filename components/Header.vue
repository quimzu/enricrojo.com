<template>
  <Bounded as="header" y-padding="sm">
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
		<h2>idioma</h2>
		<li
            v-for="lang in alternateLanguages"
            :key="lang.lang"
          >
            <PrismicLink :field="{ ...lang, link_type: 'Document' }">
              <span class="sr-only">{{ lang.lang }}</span>
            </PrismicLink>
          </li>
	  </ul>
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
