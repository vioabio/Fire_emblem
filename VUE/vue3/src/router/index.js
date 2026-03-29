import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/history',
      name: 'history',
      redirect: '/history/kaga',
      children: [
        {
          path: 'kaga',
          name: 'history-kaga',
          component: () => import('../views/history/KagaView.vue')
        },
        {
          path: 'cheng',
          name: 'history-cheng',
          component: () => import('../views/history/ChengView.vue')
        }
      ]
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/WorksView.vue')
    },
    {
      path: '/systems',
      name: 'systems',
      redirect: '/systems/battle',
      children: [
        {
          path: 'battle',
          name: 'systems-battle',
          component: () => import('../views/systems/BattleView.vue')
        },
        {
          path: 'career',
          name: 'systems-career',
          component: () => import('../views/systems/CareerView.vue')
        },
        {
          path: 'weapon',
          name: 'systems-weapon',
          component: () => import('../views/systems/WeaponView.vue')
        },
        {
          path: 'character',
          name: 'systems-character',
          component: () => import('../views/systems/CharacterView.vue')
        },
        {
          path: 'support',
          name: 'systems-support',
          component: () => import('../views/systems/SupportView.vue')
        }
      ]
    },
    {
      path: '/versions',
      name: 'versions',
      component: () => import('../views/VersionsView.vue')
    },
    {
      path: '/translation',
      name: 'translation',
      redirect: '/translation/alien',
      children: [
        {
          path: 'alien',
          name: 'translation-alien',
          component: () => import('../views/translation/AlienView.vue')
        },
        {
          path: 'spark',
          name: 'translation-spark',
          component: () => import('../views/translation/SparkView.vue')
        }
      ]
    }
  ]
})

export default router
