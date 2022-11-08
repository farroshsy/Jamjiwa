/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import styles from "../styles/landing-page.module.css";

const LandingPage = () => {
  const onFaceboookCircleIconClick = useCallback(() => {
    window.open("https://www.facebook.com/COMPFEST/");
  }, []);

  const onTwitterIconClick = useCallback(() => {
    window.open("https://twitter.com/compfest");
  }, []);

  const onYoutubeIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw");
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/compfest/?hl=en");
  }, []);

  const onIconsBxlLinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/company/compfest");
  }, []);

  const onFrameIconClick = useCallback(() => {
    window.open("https://line.me/R/ti/p/%40compfest");
  }, []);

  const onFrameIcon1Click = useCallback(() => {
    window.open("https://medium.com/compfest");
  }, []);

  const onScrollContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='textJumbotronContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.landingPageDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.footerDiv1}>
          <div className={styles.frameDiv}>
            <div className={styles.compfestLogoDiv}>
              <img className={styles.icon} alt="" src="../icon.svg" />
              <img
                className={styles.wordmarkIcon}
                alt=""
                src="../wordmark.svg"
              />
            </div>
            <div className={styles.cOMPFESTAllRightsReserved}>
              © 2022 JamJiwa. All rights reserved.
            </div>
          </div>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../faceboookcircle5.svg"
                onClick={onFaceboookCircleIconClick}
              />
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../twitter5.svg"
                onClick={onTwitterIconClick}
              />
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../youtube5.svg"
                onClick={onYoutubeIconClick}
              />
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../instagram5.svg"
                onClick={onInstagramIconClick}
              />
              <img
                className={styles.iconsBxlLinkedin}
                alt=""
                src="../icons--bxllinkedin5.svg"
                onClick={onIconsBxlLinkedinClick}
              />
              <img
                className={styles.iconsBxlLinkedin}
                alt=""
                src="../frame-9.svg"
                onClick={onFrameIconClick}
              />
              <img
                className={styles.iconsBxlLinkedin}
                alt=""
                src="../frame-10.svg"
                onClick={onFrameIcon1Click}
              />
            </div>
          </div>
        </div>
        <div className={styles.logoJamJiwaDiv}>
          <b className={styles.jamJiwaB}>JamJiwa</b>
          <div className={styles.rectangleDiv} />
        </div>
      </div>
      <div className={styles.textJumbotronDiv}>
        <b className={styles.bEST}>BEST</b>
        <b className={styles.theB}>The</b>
        <b className={styles.jawaTimurDictionaryToHelp}>
          Jawa Timur dictionary to help you!
        </b>
      </div>
      <div className={styles.fotoJumbotronDiv}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-15@2x.png"
        />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-16@2x.png"
        />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-17@2x.png"
        />
      </div>
      <div
        className={styles.textJumbotronDiv1}
        data-scroll-to="textJumbotronContainer"
      >
        <b className={styles.jamJiwaB1}>JamJiwa</b>
        <b className={styles.theB}>What’s Inside of</b>
        <img className={styles.groupIcon} alt="" src="../group-1@2x.png" />
        <b className={styles.b}>?</b>
      </div>
      <div className={styles.scrollDiv} onClick={onScrollContainerClick}>
        <div className={styles.scrollToHaveFun}>Scroll to have fun!</div>
        <img
          className={styles.chevronCompactDoubleDownIcon}
          alt=""
          src="../chevroncompactdoubledown1.svg"
        />
      </div>
      <div className={styles.buttonDiv}>
        <div className={styles.body14pt}>Explore Now!</div>
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.sliderDiv}>
          <div className={styles.cardDiv}>
            <img
              className={styles.rectangleIcon3}
              alt=""
              src="../rectangle-18@2x.png"
            />
            <b className={styles.findCommonWords}>Find Common Words!</b>
            <div className={styles.whenYouTravelToAPlaceIn}>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`When you travel to a place in East Java, you must have experienced confusion about the general vocabulary that is there. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`Moreover, a different accent from what you have will be more difficult to understand. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.jamJiwaWillBeTheAnswerTo}>
                <b className={styles.jamJiwaB2}>JamJiwa</b>
                <span className={styles.whenYouTravel}>
                  {" "}
                  will be the answer to your problem!
                </span>
              </p>
            </div>
          </div>
          <div className={styles.cardDiv1}>
            <img
              className={styles.rectangleIcon4}
              alt=""
              src="../rectangle-18@2x.png"
            />
            <b className={styles.speakItLikeThem}>Speak it Like Them!</b>
            <div className={styles.whenYouTravelToAPlaceIn2}>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`When you travel to a place in East Java, you must have experienced confusion about the general vocabulary that is there. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`Moreover, a different accent from what you have will be more difficult to understand. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.jamJiwaWillBeTheAnswerTo}>
                <b className={styles.jamJiwaB2}>JamJiwa</b>
                <span className={styles.whenYouTravel}>
                  {" "}
                  will be the answer to your problem!
                </span>
              </p>
            </div>
          </div>
          <div className={styles.cardDiv2}>
            <img
              className={styles.rectangleIcon4}
              alt=""
              src="../rectangle-18@2x.png"
            />
            <b className={styles.speakItLikeThem}>Translate to Yours!</b>
            <div className={styles.whenYouTravelToAPlaceIn2}>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`When you travel to a place in East Java, you must have experienced confusion about the general vocabulary that is there. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`Moreover, a different accent from what you have will be more difficult to understand. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.jamJiwaWillBeTheAnswerTo}>
                <b className={styles.jamJiwaB2}>JamJiwa</b>
                <span className={styles.whenYouTravel}>
                  {" "}
                  will be the answer to your problem!
                </span>
              </p>
            </div>
          </div>
          <div className={styles.cardDiv3}>
            <img
              className={styles.rectangleIcon4}
              alt=""
              src="../rectangle-183@2x.png"
            />
            <b className={styles.speakItLikeThem}>Find Common Words!</b>
            <div className={styles.whenYouTravelToAPlaceIn2}>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`When you travel to a place in East Java, you must have experienced confusion about the general vocabulary that is there. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.blankLineP}>
                <span
                  className={styles.whenYouTravel}
                >{`Moreover, a different accent from what you have will be more difficult to understand. `}</span>
              </p>
              <p className={styles.blankLineP}>
                <span className={styles.whenYouTravel}>&nbsp;</span>
              </p>
              <p className={styles.jamJiwaWillBeTheAnswerTo}>
                <b className={styles.jamJiwaB2}>JamJiwa</b>
                <span className={styles.whenYouTravel}>
                  {" "}
                  will be the answer to your problem!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerNavBarDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.logoJamJiwaDiv1}>
          <b className={styles.jamJiwaB}>JamJiwa</b>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.buttonDiv1}>
            <div className={styles.body14pt}>Home</div>
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.body14pt}>Explore Jatim</div>
          </div>
          <div className={styles.buttonDiv3}>
            <div className={styles.body14pt}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
