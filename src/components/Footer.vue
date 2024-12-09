<template>
    <footer class="footer">
      <div class="p-grid">
        <!-- SPA Center Info -->
        <div class="p-col-12 p-md-4">
          <h2>SPA <span class="highlight">Center</span></h2>
          <p>
            Our mission is to provide a sanctuary of tranquility and wellness. Relax, renew, and rejuvenate.
          </p>
          <p>
            <i class="pi pi-map-marker"></i> Calle 180 e/ 1ra y 5ta Rpto. Flore, Playa, La Habana
          </p>
          <p>
            <i class="pi pi-phone"></i> +53 53612685
          </p>
          <p>
            <i class="pi pi-envelope"></i> spacenter@gmail.com
          </p>
          <div class="social-icons">
            <Button icon="pi pi-twitter" class="p-button-rounded p-button-text" />
            <Button icon="pi pi-facebook" class="p-button-rounded p-button-text" />
            <Button icon="pi pi-linkedin" class="p-button-rounded p-button-text" />
            <Button icon="pi pi-instagram" class="p-button-rounded p-button-text" />
          </div>
        </div>
  
        <!-- Quick Links -->
        <div class="p-col-12 p-md-2">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
          </ul>
        </div>
  
        <!-- Services -->
        <div class="p-col-12 p-md-2">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Body Massage</a></li>
            <li><a href="#">Stone Therapy</a></li>
            <li><a href="#">Facial Therapy</a></li>
            <li><a href="#">Skin Care</a></li>
            <li><a href="#">Nail Care</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© Your Site Name. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import Button from "primevue/button";
  import InputText from "primevue/inputtext";
  </script>
  
  <style scoped>
  
  .footer {
  background: #211e1c;
  color: #fff;
  padding: 2rem 1rem;
  padding-bottom: 0;
}

.footer h2 {
  color: #f9a392;
}

.footer .highlight {
  color: #f9a392;
}

.footer a {
  color: #fff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
  color: #f9a392;
}

.footer p {
  margin: 0.5rem 0;
}

.social-icons .p-button {
  margin-right: 0.5rem;
}

.footer-bottom {
  text-align: center;
  padding: 1rem 0;
  background: #1a1817;
  color: #ccc;
  font-size: 0.9rem;
}

/* Flexbox para la disposición del footer */
.footer .p-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer .p-col-12 {
  flex: 1 1 100%; /* Ancho completo en pantallas pequeñas */
}

.footer .p-md-4 {
  flex: 1 1 33.33%; /* Un tercio en pantallas medianas */
}

.footer .p-md-2 {
  flex: 1 1 16.66%; 
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 0.5rem;
}

.footer ul li a {
  display: inline-block;
}

  </style>
  