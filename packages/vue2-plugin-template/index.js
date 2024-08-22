// 引入组件
import Vue2PluginTemplate from './Vue2PluginTemplate.vue'

// 为组件提供 install 安装方法，供按需引入
Vue2PluginTemplate.install = (Vue) => {
    Vue.component(Vue2PluginTemplate.name, Vue2PluginTemplate)
}

// 导出组件
export default Vue2PluginTemplate
