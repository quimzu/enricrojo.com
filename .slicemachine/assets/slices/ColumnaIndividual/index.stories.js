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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"columna":[{"type":"paragraph","text":"Ea adipisicing velit laboris incididunt ea culpa esse consectetur qui esse aute laborum voluptate ullamco excepteur. Nisi minim excepteur tempor magna minim proident excepteur. Et est consectetur reprehenderit consequat cillum consectetur consectetur ullamco velit duis in cupidatat.","spans":[]}]},"id":"_Default","slice_type":"columna_individual"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
