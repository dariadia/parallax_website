"use strict"

new Vue({
    el: '#app',
    data: {

    },
    computed: {
        getDate() {
            let date = new Date(),
                minutes = date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes(),
                hours = date.getHours().toString().length == 1 ? '0' + date.getHours() : date.getHours(),
                ampm = date.getHours() >= 12 ? 'pm' : 'am',
                months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + hours + ':' + minutes + ampm;
        },
    },
})