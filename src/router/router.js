import { createRouter, createWebHashHistory} from "vue-router";

import vIndexPage from "./v-index-page";
import vPostPage from "./v-post-page";
import vAboutPage from "./v-about-page";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: vIndexPage },
        { path: "/posts", component: vPostPage},
        { path: "/about", component: vAboutPage}
    ]
})