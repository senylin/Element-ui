/**
 * Created by senyilin on 17-2-23.
 */
import activeArticle from './pages/Article.vue'
import activeLive from './pages/Live.vue'
import activeTopic from './pages/Topic.vue'
import activeUsers from './pages/Users.vue'
import activeSheet from './pages/Sheet.vue'

import articleView from './pages/ArticleManager/views.vue'
import articleSheet from './pages/ArticleManager/sheets.vue'
import articleTable from './pages/ArticleManager/tables.vue'
import userInfo from './pages/UsersManager/userinfos.vue'
import userAuth from './pages/UsersManager/auths.vue'
import userRecord from './pages/UsersManager/records.vue'
import userService from './pages/UsersManager/services.vue'
import userReturn from './pages/UsersManager/returns.vue'
import liveList from './pages/LiveManager/List.vue'
import liveTable from './pages/LiveManager/Table.vue'
import liveForm from './pages/LiveManager/Form.vue'
import topicList from './pages/TopicManager/List.vue'
import topicTable from './pages/TopicManager/Table.vue'
import sheet1 from './pages/SheetManager/Sheet1.vue'
import sheet2 from './pages/SheetManager/Sheet2.vue'
import sheet3 from './pages/SheetManager/Sheet3.vue'
import authsForm from './pages/UsersManager/auths-form.vue'
import authin1 from './pages/UsersManager/authin/authin1.vue'

export default [
  {
    path: '/activeArticle', component: activeArticle,
    children:[
      {path: 'view',component: articleView},
      {path:'sheet',component: articleSheet},
      {path: 'table',component:articleTable}
    ]
  },
  {
    path: '/activeLive', component: activeLive,
    children:[
      {path: 'list',component: liveList},
      {path:'table',component: liveTable},
      {path: 'form',component:liveForm}
    ]
  },
  {
    path: '/activeTopic', component: activeTopic,
    children:[
      {path: 'list',component: topicList},
      {path:'table',component: topicTable}
      ]
  },
  {
    path: '/activeUsers', component: activeUsers,
    children:[
      {path: 'userinfo', component: userInfo},
      {path: 'userauth', component: userAuth},
      {path: 'record', component: userRecord},
      {path: 'service', component: userService},
      {path: 'recall', component: userReturn},
      {
        path: 'authin', component:authsForm,
        children:[{path:'step1',component: authin1}]

      }
    ]
  },
  {
    path: '/activeSheet', component: activeSheet,
    children:[
      {path:'sheet1',component: sheet1},
      {path:'sheet2',component: sheet2},
      {path:'sheet3',component: sheet3}
    ]
  }
]

