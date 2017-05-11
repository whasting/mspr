import React from 'react';
import { Link, withRouter } from 'react-router';
import Footer from '../footer/footer';

const Home = () => (
  <div className="view-port">
    <div className="hero-img">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-text">Mendo Shelter Pets Rescue</h1>
          <a href="#mini-about"><button className="about-button" type="button" name="button">Learn More</button></a>
          <div className="announcement">

          </div>
        </div>
      </div>
    </div>
    <div className="information">
      <div className="icon-container">
        <div className="line">

        </div>
        <img className="info-icon" src="https://res.cloudinary.com/whasting/image/upload/v1494023887/jack-russell-terrier_jgrfru.png" alt=""></img>
        <div className="line">

        </div>
      </div>
      <div className="pets">
        <h2 className="info-title">Newest Arrivals</h2>
        <div className="pets-container">
          <div className="pet-container">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_200,h_160/v1494005624/sherman4_aqitl3.jpg" className="pet-img" alt="Sherman" title="Sherman"></img>
            <h2 className="pet-name">Sherman</h2>
          </div>
          <div className="pet-container">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_200,h_160/v1494005629/jack11_ygtmxa.jpg" className="pet-img" alt="Jack" title="Jack"></img>
            <h2 className="pet-name">Jack</h2>
          </div>
          <div className="pet-container">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_200,h_160/v1494005634/cookie1_ixukin.jpg" className="pet-img" alt="Cookie" title="Cookie"></img>
            <h2 className="pet-name">Cookie</h2>
          </div>
          <div className="pet-container">
            <img src="https://res.cloudinary.com/whasting/image/upload/c_scale,w_200,h_160/v1494005639/maui1_uq8yzr.jpg" className="pet-img" alt="Maui" title="Maui"></img>
            <h2 className="pet-name">Maui</h2>
          </div>
        </div>
        <div className="pet-buttons">
          <button className="all-pets-button" type="button" name="button">See All Pets</button>
          <button className="adopt-foster-button" type="button" name="button">Adopt/Foster</button>
        </div>
      </div>
    </div>
    <div className="events">
      <div className="icon-container">
        <div className="line">
        </div>
        <img className="info-icon" src="https://res.cloudinary.com/whasting/image/upload/v1494025484/newspaper-folded_xdqqff.png" alt=""></img>
        <div className="line">

        </div>
      </div>
      <div className="pets">
        <h2 className="info-title">News & Events</h2>
        <div className="pets-container">
          <div className="article-container">
            <div className="article">
              <h3 className="article-title">Don't Buy, Adopt!</h3>
              <p className="article-text">We created this problem, now help solve it by adopting instead of buying!</p>
            </div>
            <div className="article-image-container">
              <img className="article-image" src="https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_75/v1494102373/14202740_10155149904305130_8008883969351186154_n_etyvvc.jpg" alt=""></img>
            </div>
          </div>
          <div className="article-container">
            <div className="article">
              <h3 className="article-title">MSPR Anniversary</h3>
              <p className="article-text">Come celebrate MSPR's 2yr anniversary at the Willits fairgrounds on Jun 27th!</p>
            </div>
            <div className="article-image-container">
              <img className="article-image" src="https://res.cloudinary.com/whasting/image/upload/c_scale,h_75,w_75/v1494102490/mspr_group_ggfs8o.png" alt=""></img>
            </div>
          </div>
          <div className="article-container">
            <div className="article">
              <h3 className="article-title">Weekly Dog Walking Group</h3>
              <p className="article-text">Join us at 5pm on Fridays for our weekly Dog Walking event!</p>
            </div>
            <div className="article-image-container">
              <img className="article-image" src="https://res.cloudinary.com/whasting/image/upload/c_thumb,g_faces,h_75,w_75/v1494102594/josie-580x390_jwbw1j.jpg" alt=""></img>
            </div>
          </div>
          <div className="article-container">
            <div className="article">
              <h3 className="article-title">5 Kittens Discovered</h3>
              <p className="article-text">Come meet lucy and her 5 kittens! These balls of fluff will go fast.</p>
            </div>
            <div className="article-image-container">
              <img className="article-image" src="https://res.cloudinary.com/whasting/image/upload/c_thumb,h_75,w_75/v1494102768/800_eqthoe.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="mini-about" className="mini-about">
      <div className="icon-container">
        <div className="line">

        </div>
        <img className="info-icon" src="https://res.cloudinary.com/whasting/image/upload/v1494024230/open-book_hnvdqe.png" alt=""></img>
        <div className="line">

        </div>
      </div>
      <div className="pets">
        <h2 className="info-title">About MSPR</h2>
        <p className="mini-about-text">Welcome to Mendo Shelter Pets Rescue (MSPR), an animal rescue by the people for the people! We are a foster-based 501(c)(3) registered nonprofit animal organization focusing on helping pets within Mendocino County, California and surrounding areas. Our journey began volunteering at our local animal shelters, which has led us to expanding our efforts so that we can help even more animals. We are made up of a dedicated and compassionate group of animal lovers, volunteers and community members of Mendocino County hoping to continue to make a difference in our animal loving community.</p>
        <div className="mini-about-button-container">
          <button className="mini-about-button" type="button" name="button">More About MSPR</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
