import MyComponent from '../../../../slices/ColumnaIndividual';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ColumnaIndividual'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"columna":[{"type":"paragraph","text":"Mollit ea sint cupidatat aliquip aute exercitation est aute proident nostrud laborum non eu velit amet.","spans":[]}]},"id":"_Default","slice_type":"columna_individual"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
