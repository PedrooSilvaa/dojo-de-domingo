import "./App.css";
import "./assets/index.jsx";
import {
  amazon,
  box,
  chat1,
  chat2,
  chat3,
  discord,
  face,
  insta,
  logo,
  main,
  netflix,
  okay,
  reddit,
  second,
  spotiy,
  twt,
  user,
  world,
} from "./assets/index.jsx";

function App() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src={logo}></img>
          <h1>
            Lasles<strong>VPN</strong>
          </h1>
        </div>

        <nav>
          <p>About</p>
          <p>Feature</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>Help</p>
        </nav>

        <div className="container-button">
          <a>Sign In</a>
          <button>Sign Up</button>
        </div>
      </header>

      <main>
        <section className="box-main">
          <div className="box-text-main">
            <h1 className="h1-main">
              Want anything to be easy with <strong>LaslesVPN.</strong>
            </h1>
            <p className="p-main">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
            <button className="button-main">Get started</button>
          </div>
          <article>
            <img src={main} />
          </article>
        </section>

        <section className="container-section">
          
          <div>
            <img src={user} alt="" />
            <div>
              <p>90 +</p>
              <p>Users</p>
            </div>
          </div>

          <div>
            <img src={user} alt="" />
            <div>
              <p>30 +</p>
              <p>locations</p>
            </div>
          </div>

          <div>
            <img src={user} alt="" />
            <div>
              <p>50 +</p>
              <p>servers</p>
            </div>
          </div>
        </section>

        <div className="container-second">
          <img src={second} />
          <div >
            <h1>We Provide Many Features You Can Use</h1>
            <p>
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <div>
              <p> 
                <img src={okay} alt="" />
                Powerfull online protection.
                </p>
              <p><img src={okay} alt="" />Internet without borders.</p>
              <p><img src={okay} alt="" />Supercharged VPN</p>
              <p><img src={okay} alt="" />No specific time limits.</p>
            </div>
          </div>
        </div>

        <section className="choose-your-plan">
          <div className="h1-choose">
            <h1>Choose Your Plan</h1>
            <p>
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>

          <div className="box-plan-content">
            <div className="box-plan">
              <img src={box} />
              <h2>Free Plan</h2>
              
              <nav>
                <p>
                  <img src={okay} />
                  Encrypted Connection
                </p>
                <p>
                  <img src={okay} />
                  No Traffic Logs
                </p>
                <p>
                  <img src={okay} />
                  Works on All Devices
                </p>
              </nav>

              <div>
                <h1>Free</h1>
                <button>Select</button>
              </div>
            </div>
            <div className="box-plan">
              <img src={box} />
              <h2>Standard Plan</h2>

              <nav>
                <p>
                  <img src={okay} />
                  Encrypted Connection
                </p>
                <p>
                  <img src={okay} />
                  No Traffic Logs
                </p>
                <p>
                  <img src={okay} />
                  Works on All Devices
                </p>
                <p>
                  <img src={okay} />
                  Connect Anyware
                </p>
              </nav>

              <div>
                <h1>$9 / mo</h1>
                <button>Select</button>
              </div>
            </div>
            <div className="box-plan">
              <img src={box} />
              <h2>Premium Plan</h2>

              <nav>
                <p>
                  <img src={okay} />
                  Encrypted Connection
                </p>
                <p>
                  <img src={okay} />
                  No Traffic Logs
                </p>
                <p>
                  <img src={okay} />
                  Connect Anyware
                </p>
                <p>
                  <img src={okay} />
                  Get New Features
                </p>
              </nav>

            <div>
              <h1>$12 / mo</h1>
              <button>Select</button>
            </div>
          </div>
          </div>
        </section>

        <section className="section-world">
          <div className="world-text">
          <h1>Huge Global Network of Fast VPN</h1>
          <p>
            See <strong>LaslesVPN</strong> everywhere to make it easier for you
            when you move locations.
          </p>
          </div>
          <div>
            <img src={world} />
          </div>
          <div className="container-images">
            <img src={netflix} />
            <img src={reddit} />
            <img src={amazon} />
            <img src={discord} />
            <img src={spotiy} />
          </div>
        </section>
        <section className="container-chats">
          <div className="chats-text">
            <h1>Trusted by Thousands of Happy Customer</h1>
            <p>
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>
          <div>
            <img src={chat2} />
            <img src={chat2} />
            <img src={chat3} />
          </div>
          <div>
            <div>
              <h1>Subscribe Now for Get Special Features!</h1>
              <p>Let's subscribe with us and find the fun.</p>
            </div>
            <button>Subscribe Now</button>
          </div>
        </section>
      </main>

      <footer>
        <section className="section-footer">
          <div className="footer-text">
            <div className="footer-logo">
              <img src={logo} />
              <p>
                Lasles<strong>VPN</strong>
              </p>
            </div>
            <div className="footer-information">
              <p>
                <strong>LaslesVPN</strong> is a private virtual network that has unique features
                and has high security.
              </p>
            </div>
            <div>
              <div className="footer-logo">
                <img src={face} />
                <img src={twt} />
                <img src={insta} />
              </div>
              <p>©2020LaslesVPN</p>
            </div>
          </div>

            

            
            
          

          <div className="div-box">
            <div className="box-product">
              <h1>Product</h1>
              <div>
                <p>Download</p>
                <p>Pricing</p>
                <p>Locations</p>
                <p>Server</p>
                <p>Countries</p>
                <p>Blog</p>
              </div>
            </div>
            <div className="box-enage">
              <h1>Engage</h1>
              <div>
                <p>LaslesVPN ?</p>
                <p>FAQ</p>
                <p>Tutorials</p>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
            <div className="box-earn-money">
              <h1>Earn Money</h1>
              <div>
                <p>Affiliate</p>
                <p>Become Partner</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
