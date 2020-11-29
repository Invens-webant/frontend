import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OfferList from '../views/OfferList.vue'
import OfferContainer from '../views/OfferContainer.vue'

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
    path: "/accepted",
    name: "AcceptedOffers",
    component: OfferList
  },
  {
    path: "/reestr",
    name: "FullAcceptedOffers",
    component: OfferList
  },
  {
    path: '/offer/:id',
    name: "OfferContainer",
    component: OfferContainer
  },
  {
    path: "/idea-form",
    name: "ideaForm",
    component: () =>
      import("../components/ideaForm.vue")
  },
  {
    path: "/model",
    name: "Model",
    component: () =>
      import("../views/3DModel.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
