import vueCanvasPoster from './canvas-poster'

export function install (Vue) {
	Vue.component('vue-canvas-poster', vueCanvasPoster)
}

export {
	vueCanvasPoster,
}

var myPlugin = {
	install,
}

export default myPlugin

// Auto-install
var GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(myPlugin)
}
