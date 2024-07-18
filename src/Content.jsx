import React from "react";
import "./App.css";

const Content = () => {
  return (
    <div>
      <section class="hero-section">
        <div class="img">
          <img src="images/Bannerimg.jpeg" alt="banner" />
        </div>
        <div class="description">
          <div className="heading">
            <h1>A HOME</h1>
            <h1>FOR HINDU</h1>
            <h1>DEVOTEES</h1>
          </div>
        </div>
      </section>
      <div class="om-section">
        <div className="img">
          <img src="images/chakra.png" alt="om-namah-shivaya_new.png" />
        </div>
        <p>
          "The soul can never be cut to pieces by any weapon,
          <br />
          nor burned by fire, nor moistened by water, nor
          <br />
          withered by the wind"
        </p>
      </div>
      <div class="classes">
        <h1>Classes</h1>
        <p class="para">
          All classes take place in the temple, contact our staff for more info.
        </p>
        <div class="boxes">
          <div class="box1">
            <img
              src="https://static.wixstatic.com/media/0b340f_291110ec6f9a4c9089b6a6deebd5d2d8~mv2_d_4256_2832_s_4_2.jpg/v1/fill/w_267,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_291110ec6f9a4c9089b6a6deebd5d2d8~mv2_d_4256_2832_s_4_2.jpg"
              alt="GettyImages-109731760.jpg"
            />
            <h4>Hindu</h4>

            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button>INFO</button>
          </div>
          <div class="box1">
            <img
              src="https://static.wixstatic.com/media/0b340f_85619dd8ad0846bbbc89739199b50609~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_267,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_85619dd8ad0846bbbc89739199b50609~mv2_d_5472_3648_s_4_2.jpg"
              alt="GettyImages-677411651.jpg"
            />
            <h4>Meditation</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button>INFO</button>
          </div>
          <div class="box1">
            <img
              src="https://static.wixstatic.com/media/0b340f_203e9cd9cc874c61887f3a83c6422390~mv2_d_4494_3051_s_4_2.jpg/v1/fill/w_267,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_203e9cd9cc874c61887f3a83c6422390~mv2_d_4494_3051_s_4_2.jpg"
              alt="GettyImages-471762160.jpg"
            />
            <h4>Gita</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button>INFO</button>
          </div>
          <div class="box1">
            <img
              src="https://static.wixstatic.com/media/0b340f_1426d765aaa44724ace93032ef049dfb~mv2_d_3888_2592_s_4_2.jpeg/v1/fill/w_267,h_460,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_1426d765aaa44724ace93032ef049dfb~mv2_d_3888_2592_s_4_2.jpeg"
              alt="AdobeStock_117787456.jpeg"
            />
            <h4>Music</h4>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button>INFO</button>
          </div>
        </div>
      </div>
      <div class="mission">
        <img
          src="https://static.wixstatic.com/media/0b340f_26b3a6b6dd524cfeb884e303f47fcd10~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_26b3a6b6dd524cfeb884e303f47fcd10~mv2.png"
          alt=""
        />
        <h2>Mission</h2>
        <h4>Religious, Moral & Spiritual Growth</h4>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
        <button>Learn More</button>
      </div>
      <div class="images">
        <div class="image1">
          <img src="images/img1.JPG" alt="plant" class="plant" />
          <img src="images/img2.JPG" alt="ganesh" class="ganesha" />
        </div>
        <div class="image2">
          <img src="images/img3.JPG" alt="agora" />
          <img src="images/img4.JPG" alt="" />
        </div>
        <div class="image3">
          <img src="images/img5.JPG" alt="rama" class="rama" />
          <img src="images/img6.JPG" alt="amma" class="amma" />
        </div>
      </div>
      <div class="socialmedia">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-instagram"></i>
      </div>
      <div class="footer">
        <p>©2035 by Hindu Temple. Powered and secured by Wix</p>
      </div>
    </div>
  );
};

export default Content;
