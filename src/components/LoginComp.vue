<template>
<div class="fondo">
    
    <div class="contenedorLogin">
      <h2 class="titulo">LOGIN</h2>
      <form class="formularioLogin">
        <input class="inputLogin" type="text" placeholder="Username" required/>
        <input class="inputLogin" type="email" placeholder="Email" required/>
        <input class="inputLogin" type="password" placeholder="Password" required/>
        <a class="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Access</a>
        <router-link to="/reg" class="text-primary text-uppercase bg-light py-1 px-2">Create Account</router-link>
      </form>
    </div>
</div>

<RouterView/>
</template>

<script setup>
 

</script>

<style scoped>
.fondo{
    background-image: url('../img/carousel-3.jpg');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    margin:0;
    padding: 100px;
}

.contenedorLogin{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-color: rgba(red, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    border: 2px solid white;
    border-radius: 15px;
    width: 400px;
    text-align: center;
    padding: 15px;
    
}

.inputLogin{
    border: none;
    background: transparent;
    border-bottom: 2px solid white;
    padding: 10px;
    outline: none;
    font-size: 16px;
    color: white(0, 0, 0);
    width: 90%;

}

input::placeholder{
    color: rgb(241, 230, 230);
    opacity: 1;
}

.formularioLogin{
    background-position: center;
    justify-content: center;
     display: flex;
     flex-direction: column;
     gap: 20px;
     padding: 15px;
     width: 80%;
     border-radius: 8px;
     border-color: white;
     align-items: center;
     color:white;
}

.titulo{
    text-align: center;
    color: white;
    padding: 0;
    margin: 5px;
}
</style>