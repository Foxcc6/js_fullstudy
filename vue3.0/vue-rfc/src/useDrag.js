import { ref } from 'vue'
// 多个地方需要拖拽  handleMove
// es-module: import export
// node commonJS: module.exports  require
export  default function useDrag() {
    const x = ref(0); // data  ref = reactive 把某个数据变成响应式
    const y = ref(0);
    const handMove =(e) =>{
        x.value = e.touches[0].pageX
        y.value = e.touches[0].pageY
    }
    return {
        x,y,handMove
    }
}