/**
 * Created by Fairy on 2018/12/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../Views/About.vue'
import Home from '../Views/Home.vue'
import News from '../Views/News.vue'
import Messages from '../Views/Messages.vue'
import Message from '../Views/Message.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/about',
      component: About
    },
    {
      path:'/home',
      component: Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'messages',
          component:Messages,
          children:[
            {
              path:'/home/messages/:id',
              component:Message
            }
          ]
        },
        {
          path:'',
          redirect:'news'
        }
      ]
    },{
      path:'/',
      redirect:'/about'
    }
  ]
})
