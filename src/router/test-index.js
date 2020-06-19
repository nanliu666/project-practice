import Vue from "vue";
import VueRouter from "@/util/router.js";
VueRouter.install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if(this.$options.router) {
        // this是当前组件的实例
        Vue.prototype.$router= this.$options.router
      }
    }
  })
}
Vue.use(VueRouter);
const FormTest = (resolve) => require(['../pages/form-test'], resolve)
const treeTest = (resolve) => require(['../pages/tree-test'], resolve)
export default new VueRouter({
  routes: [
    {
      path: "",
      redirect: "/treeTest"
    },
    {
      path: "/formTest",
      component: FormTest,
      name: "FormTest"
    },
    {
      path: "/treeTest",
      component: treeTest,
      name: "treeTest"
    }
  ]
});
