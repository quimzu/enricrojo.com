import MyComponent from '../../../../slices/OberturaHome';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/OberturaHome'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"parrafo_izquierda":[{"type":"paragraph","text":"Qui esse quis ut laboris. Nulla consectetur ullamco consectetur voluptate aute aliquip duis pariatur sint voluptate ad do exercitation ad fugiat.","spans":[]}],"imagen":{"dimensions":{"width":6000,"height":4000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e"},"parrafo_derecha":[{"type":"paragraph","text":"Cupidatat ut veniam excepteur incididunt mollit incididunt non. Labore magna et esse proident sint eu esse in voluptate irure nulla. Voluptate eiusmod commodo dolor ad laborum reprehenderit in Lorem nostrud nulla cillum.","spans":[]}]},"id":"_Default","slice_type":"obertura_home"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
