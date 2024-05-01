<template>
     <div class='footer' id='footer'>
     <div class="footer-content">
          <div class="footer-content-left">
               <img :src=assets.logo alt="" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, assumenda ea omnis placeat veritatis tempore.</p>
               <div className="footer-social-icons">
                    <img :src=assets.facebook_icon alt="" />
                    <img :src=assets.twitter_icon alt="" />
                    <img :src=assets.linkedin_icon alt="" />
               </div>
          </div>
          <div class="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
               </ul>
          </div>
          <div class="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                    <li>+91 9481212966</li>
                    <li>yakshithkumar948@gmail.com</li>
               </ul>
          </div>
          
     </div>
     </div>
</template>
<script>
import { assets } from '../../assets/assets.js';
export default {
     data()
     {
          return{
               assets
          }
     }
     
}
</script>

<style scoped>
.footer{
     color: #d9d9d9;
     background-color: #323232;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 20px;
     padding: 20px 8vw;
     padding-top: 80px;
     margin-top: 100px;
}

.footer-content{
     width: 100%;
     display: grid;
     grid-template-columns: 2fr 1fr 1fr;
     gap: 80px;
}

.footer-content-left, .footer-content-right, .footer-content-center{
     display: flex;
     flex-direction: column;
     align-items: start;
     gap: 20px;
}
.footer-content-left li, .footer-content-right li, .footer-content-center li{
     list-style: none;
     margin-bottom: 10px;
     cursor: pointer;

}
.footer-content-right h2, .footer-content-center h2{
     color: white;
}
.footer-social-icons img{
     width: 40px;
     margin-right: 15px;
}

.footer hr{
     width: 100%;
     height: 2px;
     margin: 30px 0;
     background-color: grey;
     border:none ;
}
@media (max-width:750px){
     .footer-content{
          display: flex;
          flex-direction: column;
          gap: 35px;
     }
     .footer-copyright{
          text-align: center;
     }

}
</style>