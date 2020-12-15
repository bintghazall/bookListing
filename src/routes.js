import BookList from './components/BookList.vue'
import BookForm from './components/BookForm.vue'

export default[
    {
        path: '/',
        component: BookList
    },
    {
        path:'/add',
        component: BookForm
    }
]