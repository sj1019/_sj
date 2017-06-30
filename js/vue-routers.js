// 内容；
var Home = {
	template: "<div class='home'><h1>Home</h1></div>"
};
var About = {
	template: "<div class='home'><h1>About</h1></div>"
};
var Experience = {
	template: "<div class='home'><h1>Experience</he></div>"
};
var Technology = {
	template: "<div class='home'><h1>Technology</he></div>"
};
var Contact = {
	template: "<div class='home'><h1>Contact</he></div>"
};

// 路由；
var routes = [
    { path: "/",component: Home,redirect:"/home" },
    { path: "/home",component: Home,name:"首页" },
    { path: "/about",component: About,name:"关于我" },
    { path: "/experience",component: Experience,name:"工作经历" },
    { path: "/technology",component: Technology,name:"专业技能" },
    { path: "/contact",component: Contact,name:"联系我" },
    { path: "/*",component: Home, },
];
var router = new VueRouter({
    routes
});
