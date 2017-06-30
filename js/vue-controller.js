window.onload = function() {
    var app = new Vue({
        router:router,
        el:"#app",
        data:{
        	link:"123",
        },
    }).$mount('#app');
};
