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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Copper","spans":[]}],"description":[{"type":"paragraph","text":"Culpa ut enim eiusmod mollit sint qui in sunt amet laborum nisi.","spans":[]}]},"id":"_Default","slice_type":"columna_individual"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
