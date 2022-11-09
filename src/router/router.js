import { createRouter, createWebHashHistory} from "vue-router";

import vIndexPage from "./v-index-page";
import vPostPage from "./v-post-page";
import vAboutPage from "./v-about-page";
import vCardPostPage from "./v-card-post-page";
import vCardPostPageWithStore from "./v-post-page-with-store";
import vPostPageCompositionApi from "./v-post-page-composition-api"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", component: vIndexPage },
        { path: "/posts", component: vPostPage},
        { path: "/about", component: vAboutPage},
        { path: "/posts/:id", component: vCardPostPage},
        { path: "/store", component: vCardPostPageWithStore},
        { path: "/composition", component: vPostPageCompositionApi}
    ]
})