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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"imagen":{"dimensions":{"width":3500,"height":2338},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea"}}],"primary":{"parrafo_izquierda":[{"type":"paragraph","text":"Qui esse quis ut laboris. Nulla consectetur ullamco consectetur voluptate aute aliquip duis pariatur sint voluptate ad do exercitation ad fugiat.","spans":[]}],"parrafo_derecha":[{"type":"paragraph","text":"Cupidatat ut veniam excepteur incididunt mollit incididunt non. Labore magna et esse proident sint eu esse in voluptate irure nulla. Voluptate eiusmod commodo dolor ad laborum reprehenderit in Lorem nostrud nulla cillum.","spans":[]}],"titulo":[{"type":"paragraph","text":"Adipisicing nisi culpa irure in mollit officia nulla nisi laborum esse nisi ea. Consequat duis dolor et elit labore reprehenderit reprehenderit deserunt culpa dolor culpa reprehenderit fugiat voluptate.","spans":[]}],"imagen_principal":{"dimensions":{"width":2747,"height":4120},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa"}},"id":"_Default","slice_type":"obertura_home"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
