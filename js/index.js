let root = new Vue({
    el: '#app',
    data: {
        changeGBPToEUR: 1.14466106,
        changeEURToGBP: 0.883888426,
        euros: 0,
        pounds: 0
    },
    methods: {
        convertToEuros: function () {
            this.euros = this.changeGBPToEUR * this.pounds;
            this.euros.toFixed(2);
        },

        convertToPounds: function () {
            this.pounds = this.changeEURToGBP * this.euros;
            this.pounds.toFixed(2);
        },

        convert: function () {
            this.convertToEuros();
            this.convertToPounds();
        }
    }
})
