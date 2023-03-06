<template>
  <div>

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
