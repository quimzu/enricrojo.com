import MyComponent from '../../../../slices/TripleColumna';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TripleColumna'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"imatge_1":{"dimensions":{"width":4076,"height":2712},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"},"imatge_2":{"dimensions":{"width":5000,"height":4613},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea"},"imatge_3":{"dimensions":{"width":8640,"height":8640},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"}},"id":"_Default","slice_type":"triple_columna"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
