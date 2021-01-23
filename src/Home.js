import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg'
          alt='amazon-home-img'
        />
        <div className='home__row'>
          <Product
            id='1'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={249.99}
            image='https://cdn.shopify.com/s/files/1/0172/8692/2294/products/ER_KitchenAid-Stand-Mixer-KSM150-empire_red-01_880x_crop_center.jpg?v=1608886827'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='2'
            title='Nintendo Switch Console [Neon Blue/Red]'
            price={200}
            image='https://images-na.ssl-images-amazon.com/images/I/51vKlrdRKYL._AC_SL1200_.jpg'
            rating={3}
          />
          <Product
            id='3'
            title='Echo Dot (3rd Gen) – Smart speaker with Alexa - Charcoal Fabric'
            price={100}
            image='https://images-na.ssl-images-amazon.com/images/I/61MdyHSbxHL._AC_SL1100_.jpg'
            rating={4}
          />
          <Product
            id='4'
            title='Apple iPad Pro 11" 2020 Version (256GB, Wi-Fi, Space Grey)'
            price={600}
            image='https://images-na.ssl-images-amazon.com/images/I/51sxj9BUJRL._AC_SL1200_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='5'
            title='
            LG Ultragear 34GL750-B 34” Curved Gaming Monitor, 5ms (GTG) 1ms (MBR), 144Hz, HDMI, G-Sync Compatible, HDR10, Black'
            price={500}
            image='https://images-na.ssl-images-amazon.com/images/I/71TNmnADM6L._AC_SL1500_.jpg'
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
