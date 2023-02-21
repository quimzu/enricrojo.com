import MyComponent from '../../../../slices/Slider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Slider'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"imatge":{"dimensions":{"width":4016,"height":6016},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482"}}],"primary":{},"id":"_Default","slice_type":"slider"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
