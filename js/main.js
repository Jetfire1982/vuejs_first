const Counter = {
    data(){
        return{
            counter:0,
            r:1
        }
    },
    mounted(){
        setInterval(()=>{
            this.counter++
            this.r++
        }, 1000)
    }

}
Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
    data(){
        return {
            message: 'Страница загружена ' + new Date().toLocaleString()
        }
    }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')