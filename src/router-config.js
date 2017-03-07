/**
 * Created by senyilin on 17-2-23.
 */
import activeArticle from './pages/Article.vue'
import activeLive from './pages/Live.vue'
import activeTopic from './pages/Topic.vue'
import activeUsers from './pages/Users.vue'
import activeSheet from './pages/Sheet.vue'

import  articleView from './pages/ArticleManager/views.vue';

export default [
  {
    path: '/activeArticle', component: activeArticle,
    children:[
      {path: '',component: articleView}
    ]
  },
  {
    path: '/activeLive', component: activeLive,
    children:[

    ]
  },
  {
    path: '/activeTopic', component: activeTopic,
    children:[
    ]
  },
  {
    path: '/activeUsers', component: activeUsers,
    children:[

    ]
  },
  {
    path: '/activeSheet', component: activeSheet,
    children:[

    ]
  }
]

