<template>
    <main>
        <h1>Add book</h1>
        <form v-on:submit.prevent="bookSubmit(bookTitle, bookAuthor)" class="" action="#" method="POST">
            <input v-model="bookTitle" type="text" name="title" value="" placeholder="Book Title">
            <input v-model="bookAuthor" type="text" name="author" value="" placeholder="Book Author">
            <button type="submit" name="button">Add Book</button>
        </form>
        <!--<book-list @addBook='appendBook'></book-list>-->
    </main>
    
</template>

<script>
import BookItem from './BookItem';
import BookList from './BookList';


export default {
    name: "BookForm",
    components: {
        BookItem, BookList,
        
    },
    props:["books"],
    data(){
        return{
            bookTitle:"",
            bookAuthor:"",
        }
       
    },
    methods:{
        bookSubmit(bookTitle, bookAuthor){
            this.$emit('addBook', bookTitle, bookAuthor);
            console.log("Title: " +  bookTitle +" "+ "Author: " +bookAuthor)

        },
        
    },
}
</script>

<style>

</style>