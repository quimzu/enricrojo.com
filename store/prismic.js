export const state = () => ({
  alternateLanguages: [],
  settings: {},
  navigation: {},
  menuXarxes: {}
})

export const mutations = {
  setAlternateLanguages (state, alternateLanguages) {
    state.alternateLanguages = alternateLanguages
  },
  setSettings (state, settings) {
    state.settings = settings
  },
  setNavigation (state, navigation) {
    state.navigation = navigation
  },
  setMenuXarxes (state, menuXarxes) {
    state.menuXarxes = menuXarxes
  }
}

export const actions = {
  async load (store, { lang, page = { alternate_languages: [] } }) {
    const navigation = await this.$prismic.api.getSingle('navigation', { lang })
    const settings = await this.$prismic.api.getSingle('settings', { lang })
    const menuXarxes = await this.$prismic.api.getSingle('menu_xarxes', { lang })
    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
    store.commit('setMenuXarxes', menuXarxes)
  }
}
