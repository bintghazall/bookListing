<template>
    <div>
        
        <h1>{{title}}</h1>
        <ul  >
            <book-item v-for="(book, index) in books" :key="index" :book=book>
                Title: {{book.title}},
                By: {{book.author}}
            </book-item> 
        </ul> 
        <book-form @addBook='appendBook'></book-form> 
    </div>    
</template>


<script>
import BookItem from './BookItem';
import BookForm from './BookForm'


export default {
    name: "BookList",
    components: {
        BookItem, BookForm,
        
    },
    methods:{
        appendBook(bookTitle, bookAuthor){
            this.books.push({title: bookTitle, author: bookAuthor})
        }
    },
    data(){
        return{
            title: "All Books",
            books: [
                {title: 'Self-Reliance', author:'Ralph Waldo Emerson'},
                {title: 'American Gods', author:'Niel Gaiman'},
                {title: 'Amusing Ourselves to Death', author:'Niel Postman'},
                {title: 'Build interactive Applications: Autarky UI', author:'Abdullah Isa-Bello Marufat'},
                {title: 'Softwares served On a platter', author:'Abdullah Isa-Bello Marufat'},
            ]
        }
    }
}
</script>

<style>
    h1,h2{
        font-weight: normal;
    }
    
    
</style>
