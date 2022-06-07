Vue.directive('mask', VueMask.VueMaskDirective);

const App = new Vue({
    el: '#app',
    data () {
        return {
            cep: '123'
        }
    } 
});