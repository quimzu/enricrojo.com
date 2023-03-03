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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"orientacio_imatge":"Dreta","imatge":{"dimensions":{"width":12288,"height":16384},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab"},"text":[{"type":"paragraph","text":"Labore aliquip aliqua velit irure ex incididunt duis anim.","spans":[]}],"sigles":[{"type":"paragraph","text":"Non minim et mollit labore sit laboris sit cupidatat mollit ex.","spans":[]}],"link_projecte":{"id":"mock_document_id","link_type":"Document","type":"mock","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}},"id":"_Default","slice_type":"proyecto_destacado"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
