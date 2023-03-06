<template>


    <nav class="xarxes_vertical"><ul class>
      <li v-for="xxss in navigation.data.xxss_menu">
        <PrismicLink :field="xxss.link_xxss">
          <span>{{ xxss.nom_xxss[0].text }}</span>
        </PrismicLink>
      </li>
    </ul></nav>

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
