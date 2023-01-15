import React from "react";

import { Helmet } from "react-helmet";

import Navigation from "../components/navigation";
import SpeakerCard from "../components/speaker-card";
import NumbersCard from "../components/numbers-card";
import EventCard from "../components/event-card";
import Slide from "../components/slide";
import Footer from "../components/footer";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Techlogix EMSC</title>
        <meta property="og:title" content="Techlogix EMSC" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text Heading1">
                <span>
                  HIGHLIGHTS FROM
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text02"> TECHLOGIX ANNUAL LUNCH</span>
                <br></br>
                {/* <span>AT ARENA</span> */}
                <span></span>
              </h1>
              <span className="home-text05">
                <span>
                  Techlogix Karachi celebrated another year of success with its
                  annual lunch event held at Arena, gathering employees and
                  management for a day of delicious food and camaraderie
                </span>
                <br></br>
              </span>
              {/* <div className="home-btns-container">
                <button className="home-primary button-primary button-lg button">
                  register now
                </button>
                <button className="button button-outline button-lg-border">
                  learn more
                </button>
              </div> */}
            </div>
            <div className="home-video-container">
              {/* <video
                src="https://www.youtube.com/watch?v=Cv_w0joyKTo&ab_channel=KarandaazPakistan"
                muted="true"
                poster="https://images.unsplash.com/photo-1564347288827-3e4293543e07?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxiZXJsaW58ZW58MHx8fHwxNjQzNzEzNjQ5&ixlib=rb-1.2.1&w=1500"
                autoPlay="true"
                controls="true"
                className="home-video"
              ></video> */}
              {/* <div className="iframe-container"> */}
              <iframe
                width="660"
                height="415"
                src="https://www.youtube.com/embed/Cv_w0joyKTo"
                title="Techlogix Annual Lunch"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              {/* </div> */}
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text49 Heading2">
                <span>previous events</span>
              </h1>
              <span className="home-text51">
                Take a tour of our previous events
              </span>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name4"></Slide>
            <Slide heading="" rootClassName="slide-root-class-name1"></Slide>
            <Slide heading="" rootClassName="slide-root-class-name"></Slide>
            <Slide heading="" rootClassName="slide-root-class-name3"></Slide>
            <Slide heading="" rootClassName="slide-root-class-name2"></Slide>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container">
              <span className="home-text11">
                16 speakers from 7 countries and 3 continents
              </span>
              <h1 className="home-text12 Heading2">
                <span>meet our speakers</span>
                <span className="home-text14"></span>
              </h1>
            </div>
            <div className="home-speakers-container">
              <SpeakerCard></SpeakerCard>
              <SpeakerCard
                role="digital marketing associate @ WPP"
                lastName="Simpson"
                firstName="Mellisa"
                image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="VP OF Marketing @ BUZZFEED"
                lastName="tevlenko"
                firstName="alina"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="HEAD OF DIGITAL @ HUBSPOT"
                lastName="iprovich"
                firstName="gregor"
                image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="marketing officer @ salesforce"
                lastName="daris"
                firstName="damian"
                image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="social media manager @ vodafone"
                lastName="warren"
                firstName="matt"
                image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="creative director @ BBDO"
                lastName="moore"
                firstName="kathie"
                image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="chan"
                firstName="erick"
                image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
              ></SpeakerCard>
            </div>
          </div>
        </div>
        <div className="home-numbers-banner section-container">
          <div className="home-container2 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text15">
                Our 12-year conference history in sharing digital marketing
                insights
              </span>
              <h1 className="home-text16 Heading2">
                <span>market1 SUMMIT IN NUMBERS</span>
              </h1>
            </div>
            <div className="home-numbers-container">
              <NumbersCard></NumbersCard>
              <NumbersCard
                text="years"
                number="12"
                image_src="/public/playground_assets/interface%20time%20reset-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="total events"
                number="64"
                image_src="/public/playground_assets/interface%20calendar%20favorite-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="companies"
                number="15,070"
                image_src="/public/playground_assets/shopping%20bag%20suit%20case-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="cities"
                number="14"
                image_src="/public/playground_assets/travel%20map%20location%20pin-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="speakers"
                number="1,071"
                image_src="/public/playground_assets/computer%20voice%20mail-200h.png"
              ></NumbersCard>
            </div>
          </div>
        </div>
        <div className="home-location">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1564347288827-3e4293543e07?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxiZXJsaW58ZW58MHx8fHwxNjQzNzEzNjQ5&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image6"
          />
          <div className="home-content-container1 section-container">
            <div className="home-container3">
              <span className="home-text18">berlin, germany</span>
              <span className="home-text19">7-8 MARCH 2023</span>
              <div className="home-container4">
                <span className="home-text20">
                  <span>— mob-x</span>
                </span>
                <span className="home-text22">
                  <span>conference</span>
                </span>
                <span className="home-text24">
                  <span>center</span>
                </span>
              </div>
              <div className="home-container5">
                <span className="home-text26">beautiful, vibrant berlin</span>
                <span className="home-text27">
                  <span>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Lorem Ipsum, Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                  </span>
                </span>
                <div className="home-btns-container1">
                  <button className="button-secondary button button-md">
                    register
                  </button>
                  <button className="home-learn-more button button-outline button-md-border">
                    learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="home-agenda section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container2">
              <h1 className="home-text31 Heading2">
                <span>key events agenda</span>
              </h1>
              <span className="home-text33">
                more announcements are coming soon
              </span>
            </div>
            <div className="home-events-container">
              <div className="home-column">
                <div className="home-column-header">
                  <span className="home-text34">
                    <span>tuesday - 7.03</span>
                  </span>
                  <div className="home-line"></div>
                </div>
                <EventCard></EventCard>
                <EventCard
                  title="tik tok or what?"
                  image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="sales + marketing duo"
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="best practices for more\ndata-driven results"
                  image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
              </div>
              <div className="home-column1">
                <div className="home-column-header1">
                  <span className="home-text36">
                    <span>wednesday - 8.03</span>
                  </span>
                  <div className="home-line1"></div>
                </div>
                <EventCard
                  title="digital marketing strategies"
                  image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="a new era of social media"
                  image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="growing a remote team"
                  image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="beyond the metaverse"
                  image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
              </div>
            </div>
          </div>
        </div> */}
        <div className="home-workshops">
          <div className="home-content-container2">
            <div className="home-container6">
              <h1 className="home-text38 Heading2">
                <span>
                  register for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text41">super insightful</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>
                  workshops for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <br></br>
                <span>your team</span>
              </h1>
              <span className="home-text47">
                get early discounts and group discounts
              </span>
              <span className="home-text48">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <button className="button button-md button-outline">
                learn more
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image7"
          />
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default Home;
