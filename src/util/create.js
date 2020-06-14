import Vue from 'vue'
export default function create(component, props) {
  // 先创建实例
  const vm = new Vue({
    // 生成一个虚拟DOM
    render(h) {
      // h是createElement，返回vNode
      console.log('h==', h)
      return h(component, {props})
    }
  }).$mount()
  // 手动挂载
  document.body.appendChild(vm.$el)
  // 销毁实例
  const comp = vm.$children[0]
  comp.remove = function() {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
  return comp
}