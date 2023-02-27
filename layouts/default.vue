<template>
  <div class="text-slate-800">
  
    <Header

      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"

    />
    <nav class="xarxes_vertical"><ul class>
      <li v-for="xxss in navigation.data.xxss_menu">
        <PrismicLink :field="xxss.link_xxss">
          <span>{{ xxss.nom_xxss[0].text }}</span>
        </PrismicLink>
      </li>
    </ul></nav>
    <main><nuxt /></main>
    <nav class="contactes_vertical"><ul class>
      <li v-for="contacte in navigation.data.contacte_menu">
        <PrismicLink :field="contacte.link_contacte">
          <span>{{ contacte.nom_contacte[0].text }}</span>
        </PrismicLink>
      </li>
    </ul></nav>
    
  </div>
</template>

<script>
export default {
  computed: {
    alternateLanguages () {
      return this.$store.state.prismic.alternateLanguages
    },
    navigation () {
      return this.$store.state.prismic.navigation
    },
    settings () {
      return this.$store.state.prismic.settings
    }
  }
}
</script>

