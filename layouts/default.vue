<template>
  <div class="text-slate-800">
  
    <Header
      v-if="navigation.data && settings.data"
      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
      :menuXarxes="menuXarxes"
    />
    <main><nuxt /></main>
    
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
    },
    settings () {
      return this.$store.state.prismic.menuXarxes
    }
  }
}
</script>

<style>
body {
  @apply overflow-x-hidden antialiased;
}
</style>
