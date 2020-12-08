<template>
    <div>
    <h1>{{title}}</h1>
    <ul>
        
    </ul>
   
    </div>    
</template>

<script>
export default {
    name: "BookList",
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