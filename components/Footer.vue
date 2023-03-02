<template>
  <Bounded as="footer" class="bg-gray-800 pb-12 text-slate-300 md:pb-12">
    <section class="col_1">
      <NuxtLink :to="localePath('/')" class="logo">
        <PrismicImage :field="settings.data.logo" />
      </NuxtLink>
    </section>
    <section class="col_2">
      <ul class="altres">
        <li v-for="contacte in navigation.data.contacte_menu">
          <PrismicLink :field="contacte.link_contacte">
            <span>{{ contacte.nom_contacte[0].text }}</span>
          </PrismicLink>
        </li>
      </ul>
      <ul class="xarxes">
        <li v-for="xxss in navigation.data.xxss_menu">
          <PrismicLink :field="xxss.link_xxss">
            <span>{{ xxss.nom_xxss[0].text }}</span>
          </PrismicLink>
        </li>
      </ul>
     <!-- <ul class="lang_switcher">
      <template v-if="alternateLanguages[0].lang == 'es-es'">
        <li>
          <nuxt-link to="/">
            <span class="activo sr-only">CA</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/es-es">
            <span class="sr-only">ES</span>
          </nuxt-link>
        </li>
      </template>
      <template v-else>
        <li>
          <nuxt-link to="/">
            <span class="sr-only">CA</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/es-es">
            <span class="activo sr-only">ES</span>
          </nuxt-link>
        </li>
      </template>
	  </ul> -->
    <ul class="lang_switcher">
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

  </section>
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
