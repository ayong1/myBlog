import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Message from './components/Message'
import Picture from './components/Picture'
import About from './components/About'
import authorAbout from './components/author/authorAbout'
import Skill from './components/author/Skill'
import authorMessage from './components/author/authorMessage'
import Admin from './components/Admin'
import AdminControl from './components/admin/AdminControl'
import Welcome from './components/admin/Welcome'
import addArticle from './components/admin/addArticle'
import Edit from './components/admin/Edit'

export default[
    {path:'/',component:Home},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/picture',component:Picture},
    {path:'/message',component:Message,},
    {
        path:'/about/authorabout',
        component:About,
        children:[
            {path:'/',component:authorAbout},
            {path:'/about/skill',component:Skill},
            {path:'/about/message',component:Skill},
            {path:'/about/authormessage',component:authorMessage}
        ]
    },
    {path:'/admin',component:Admin,},
    {
        path:'/admincontrol',
        component:AdminControl,
        redirect:'/welcome',
        children:[
            {path:'/welcome',component:Welcome},
            {path:'/addarticle',component:addArticle},
            {path:'/edit/:article_title',component:Edit},
        ]
    },
]