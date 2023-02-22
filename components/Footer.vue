<template>
  <Bounded as="footer" class="bg-gray-800 pb-12 text-slate-300 md:pb-12">
<h2>footer</h2>
  </Bounded>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
