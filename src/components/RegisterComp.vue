<template>
    <div class="fondo">
        
        <div class="contenedorLogin">
          <h2 class="titulo">REGISTER</h2>
          <form class="formularioLogin">
            <input class="inputLogin" type="text" placeholder="Username" required/>
            <input class="inputLogin" type="email" placeholder="Email" required/>
            <input class="inputLogin" type="password" placeholder="Password" required/>
            <input class="inputLogin" type="password" placeholder="Confirm password" required/>
            <div class="nuevita">
                <input type="checkbox"  required/>I agree to all the terms
            </div>
           
            <a class="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Sign up</a>
            
          </form>
        </div>
    </div>
    
    <RouterView/>
    </template>
    
    <script setup>
       
        
      
    </script>
    
    <style scoped>
    .nuevita{
        align-items: stretch;
        width: 500px;
    }

    .fondo{
        background-image: url('../img/carousel-3.jpg');
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 100vh;
        margin:0;
        padding: 100px;
        padding-top: 200px;
    }
    
    .contenedorLogin{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 550px;
        background-color: rgba(red, 255, 255, 0.5);
        backdrop-filter: blur(5px);
        border: 2px solid white;
        border-radius: 15px;
        width: 400px;
        text-align: center;
        padding: 15px;
        padding-top: 25px;
        
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
        display: flex;
    
    }

    
    input::placeholder{
        color: rgb(245, 234, 234);
        opacity: 1;
    }
    
    .formularioLogin{
        background-position: center;
        justify-content: center;
         display: flex;
         flex-direction: column;
         gap: 20px;
         padding: 15px;
         width: 90%;
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