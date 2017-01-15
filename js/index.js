let root = new Vue({
    el: '#app',
    data: {
        change: 1.14466106,
        euros: null,
        pounds: null
    },
    methods: {
        convert: function () {
            this.euros = this.change * this.pounds
        }
    }
})
