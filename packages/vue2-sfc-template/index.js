// 引入组件
import Vue2SfcTemplate from './Vue2SfcTemplate.vue'

// 为组件提供 install 安装方法，供按需引入
Vue2SfcTemplate.install = (Vue) => {
    Vue.component(Vue2SfcTemplate.name, Vue2SfcTemplate)
}

// 导出组件
export default Vue2SfcTemplate
