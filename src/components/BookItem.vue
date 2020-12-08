<template>
    <li>
        Title: <b>{{book.title}} </b>  <i>  By: {{book.author}}</i></li>
    
</template>

<script>
export default {
    name: "BookItem",
    props: ["book"],
}
</script>

<style>
ul{
        list-style-type: none;
        padding: 0;
        text-align: center;
    }
li{
        display: block;
        margin: 0 10px;
        background-color: rgba(0, 0, 0, 0.158);
        background-size: 30% 30%;
        line-height: 1.6;
        margin-top: 2px;        
    }

</style>