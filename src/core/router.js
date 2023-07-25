
import { createRouter as create, createWebHashHistory } from 'vue-router'
import pages from '@/pages'

export function createRouter() {
  return create({
    history: createWebHashHistory(),
    routes: [
      { path: '/private/account', component: pages.PrivateAccount },
      { path: '/private/billing', component: pages.PrivateBilling },
      { path: '/private/support', component: pages.PrivateSupport },
      { path: '/private', component: pages.PrivateUsage },

      { path: '/', component: pages.PublicHome },
      { path: '/forgot', component: pages.PublicForgot },
      { path: '/login', component: pages.PublicLogin },
      { path: '/privacy', component: pages.PublicPrivacy },
      { path: '/products', component: pages.PublicProducts },
      { path: '/register', component: pages.PublicRegister },
      { path: '/reset', component: pages.PublicReset },
      { path: '/terms', component: pages.PublicTerms },
    ],
  })
}
