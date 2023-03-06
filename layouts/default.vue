<template>
  <div class="text-slate-800">
  
    <Header

      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"

    />
    <Esquerra
    :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
    />
    <main><nuxt /></main>
    <Dreta
    :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
    />
   
    <Footer
      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
    />
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

