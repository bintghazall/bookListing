<template>
    <div>
        
        <h1>{{title}}</h1>
        <ul  v-for="book in books" :key="book.author" :book=book>
            <book-item>{{book.title}}:{{book.author}}</book-item> 
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
                {Title: 'Self-Reliance', Author:'Ralph Waldo Emerson'},
                {Title: 'American Gods', Author:'Niel Gaiman'},
                {Title: 'Amusing Ourselves to Death', Author:'Niel Postman'},
                {Title: 'Build interactive Applications: Autarky UI', Author:'Abdullah Isa-Bello Marufat'},
                {Title: 'Softwares served On a platter', Author:'Abdullah Isa-Bello Marufat'},
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
