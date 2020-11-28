import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OfferList from '../views/OfferList.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/new",
    name: "NewOffers",
    component: OfferList
  },
  {
    path: "/idea-form",
    name: "ideaForm",
    component: () =>
      import("../components/ideaForm.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
