<template>
    <div>
    <h1>{{title}}</h1>
    
    <ul>
        <book-item v-for="book in books" :key="book.author" :book=book>{{book.title}}:{{book.author}}</book-item> 
    </ul>
   
    </div>    
</template>


<script>
import BookItem from './BookItem';
import BookItem from './components/BookItem';

export default {
    name: "BookList",
    components: {
        BookItem,
    },
    data(){
        return{
            title: "All Books",
            books: [
                {title: 'Self-Reliance', author:'Ralph Waldo Emerson'},
                {title: 'American Gods', author:'Niel Gaiman'},
                {title: 'Amusing Ourselves to Death', author:'Niel Postman'},
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
