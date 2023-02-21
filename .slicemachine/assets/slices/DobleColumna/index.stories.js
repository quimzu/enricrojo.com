import MyComponent from '../../../../slices/DobleColumna';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/DobleColumna'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"orientacio_imatge":"Esquerra","imatge":{"dimensions":{"width":8640,"height":8640},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"},"text":[{"type":"paragraph","text":"Dolore duis occaecat laboris cillum sint deserunt voluptate non ex. Sunt ea commodo labore qui exercitation ullamco dolore excepteur anim magna minim ex.","spans":[]}]},"id":"_Default","slice_type":"doble_columna"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
