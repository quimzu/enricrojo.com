import MyComponent from '../../../../slices/ProyectoDestacado';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ProyectoDestacado'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"projecte":{"id":"mock_document_id","link_type":"Document","type":"projectes","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"},"sigles":[{"type":"paragraph","text":"Non minim et mollit labore sit laboris sit cupidatat mollit ex.","spans":[]}],"orientacio_imatge":"Dreta"},"id":"_Default","slice_type":"proyecto_destacado"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
