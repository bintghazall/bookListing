<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Book List</router-link></li>
            <li><router-link to="/add" exact>Add New Book</router-link></li>
        </ul>
    </nav>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin:0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 0 8px 0 8px;
    /*color: #6FFFA2;
    color: #1D433C;*/
}
nav{
    background: #1D433C;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background:#6FFFA2; 
    color: #1D433C;
}
</style>>

</style>