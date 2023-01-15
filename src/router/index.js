import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";

const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
          meta:{
            title: 'Hjem',
            requiresAuth: false,
          }
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/AboutView.vue"),
          meta:{
            title: 'Omkring',
            requiresAuth: false,
          }
        },
        {
          path: "/Faqs",
          name: "Faqs",
          component: () => import("../views/FaqsView.vue"),
          meta:{
            title: 'Faqs',
            requiresAuth: false,
          }
        },
        {
          path: "/contact",
          name: "contact",
          component: () => import("../views/ContactView.vue"),
          meta:{
            title: 'Kontakt',
            requiresAuth: false,
          }
        },
        {
          path: "/recipes",
          name: "recipes",
          component: () => import("../views/RecipesView.vue"),
          meta:{
            title: 'Opskrifter',
            requiresAuth: true,
          }
        },
        {
          path: "/singleRecipe",
          name: "singleRecipe",
          component: () => import("../views/SingleRecipeView.vue"),
          meta:{
            title: 'Opskrift',
            requiresAuth: true,
          }
        },
        {
          path: "/booking",
          name: "booking",
          component: () => import("../views/BookingView.vue"),
          meta:{
            title: 'Booking',
            requiresAuth: false,
          }
        },
        {
          path: "/videos",
          name: "videos",
          component: () => import("../views/VideosView.vue"),
          meta:{
            title: 'Træningsvideoer',
            requiresAuth: true,
          }
        },
        {
          path: "/login",
          name: "login",
          component: () => import("../views/LoginView.vue"),
          meta:{
            title: 'Login',
            requiresAuth: false,
          }
        },
        {
          path: "/blog",
          name: "blog",
          component: () => import("../views/BlogView.vue"),
          meta:{
            title: 'Blog',
            requiresAuth: true,
          }
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/RegisterView.vue"),
          meta:{
            title: 'Opret bruger',
            requiresAuth: false,
          }
        },
        {
          path: "/forgotPassword",
          name: "forgotPassword",
          component: () => import("../views/ForgotPasswordView.vue"),
          meta: {
            title: 'Glemt kodeord',
            requiresAuth: false,
          }
        },
        {
          path: "/admin",
          name: "admin",
          component: () => import("../views/AdminView.vue"),
          meta: {
            title: 'Admin profil',
            requiresAuth: true,
            requiresAdmin: true,
          }
        },{
          path: "/userProfile",
          name: "userProfile",
          component: () => import("../views/ProfileView.vue"),
          meta:{
            title: 'Din profil',
            requiresAuth: true
          }
        },
        {
          path: "/createPost",
          name: "createPost",
          component: () => import("../views/CreatePostView.vue"),
          meta: {
            title: 'Opret blog post',
            requiresAuth: true,
            requiresAdmin: true,
          }
        },
        {
          path: "/postPreview",
          name: "postPreview",
          component: () => import("../views/BlogPreviewView.vue"),
          meta: {
            title: 'Se blog post',
            requiresAuth: true,
            requiresAdmin: true,
          }
        },
        {
          path: "/singleBlog/:blogid",
          name: "singleBlog",
          component: () => import("../views/SingleBlogView.vue"),
          meta: {
            title: 'Læs blog',
            requiresAuth: true,
          }
        },
        {
          path: "/editBlog/:blogid",
          name: "editBlog",
          component: () => import("../views/EditBlogView.vue"),
          meta: {
            title: 'Rediger blog',
            requiresAuth: true,
            requiresAdmin: true,
          }
        },
      ],
    }

);

router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title} | FitByJulius`;
  next();
})

router.beforeEach(async (to, from, next) => {
  let user = getAuth().currentUser;
  let admin = null;
  if (user) {
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      if (to.matched.some((res) => res.meta.requiresAdmin)) {
        if (admin) {
          return next();
        }
        return next({ name: "home" });
      }
      return next();
    }
    return next({ name: "home" });
  }
  return next();
});

export default router