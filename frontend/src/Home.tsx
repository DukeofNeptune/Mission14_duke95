import React from 'react';
import styles from './Home.module.css';

//Creates a Banner for the Home Page
function TopBanner(props: any) {
  return (
    <>
      <div>
        <h1 className={styles.h1}>{props.saying}</h1>
      </div>
    </>
  );
}

// Home Page, sorry if the colors are awful, I am colorblind so it might not look good
function Home() {
  return (
    <div className="Home" style={{ backgroundColor: 'aliceblue' }}>
      <div>
        <img
          src="./JoelHiltonHeadshot.jpg"
          alt="Photo of our CEO"
          width={400}
        ></img>
      </div>
      <TopBanner saying="Joel Hilton Film Collection - Main Page" />
      <br></br>
      <h4>
        This website is about my love for films, you can see my Film Collection
        or listen to my podcasts by clicking the links above!
      </h4>
      <h6>Come for the movies stay for the smile!</h6>
    </div>
  );
}

export default Home;
