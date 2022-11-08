/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../styles/explore-page.module.css";

const ExplorePage = () => {
  const router = useRouter();

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

  const onMadiunImageClick = useCallback(() => {
    router.push("/madiun3");
  }, [router]);

  const onLogoJamJiwaContainer1Click = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  return (
    <div className={styles.explorePageDiv}>
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
                src="../faceboookcircle1.svg"
                onClick={onFaceboookCircleIconClick}
              />
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../twitter1.svg"
                onClick={onTwitterIconClick}
              />
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../youtube.svg"
                onClick={onYoutubeIconClick}
              />
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../instagram4.svg"
                onClick={onInstagramIconClick}
              />
              <img
                className={styles.iconsBxlLinkedin}
                alt=""
                src="../icons--bxllinkedin4.svg"
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
        <b className={styles.lOCATIONB}>LOCATION</b>
        <b className={styles.whereB}>Where</b>
        <b className={styles.areYouNow}>Are You Now?</b>
      </div>
      <img className={styles.mapIcon} alt="" src="../map@2x.png" />
      <div className={styles.malangDiv}>
        <img className={styles.malangIcon} alt="" src="../malang@2x.png" />
      </div>
      <div className={styles.madiunDiv}>
        <img
          className={styles.madiunIcon}
          alt=""
          src="../madiun5@2x.png"
          onClick={onMadiunImageClick}
        />
      </div>
      <div className={styles.surabayaDiv}>
        <img className={styles.malangIcon} alt="" src="../surabaya1@2x.png" />
      </div>
      <div className={styles.banyuwangiDiv}>
        <img className={styles.malangIcon} alt="" src="../banyuwangi1@2x.png" />
      </div>
      <div className={styles.maduraDiv}>
        <img className={styles.malangIcon} alt="" src="../madura@2x.png" />
      </div>
      <div className={styles.cardDiv}>
        <div className={styles.cardSectionDiv}>
          <div className={styles.textSectionDiv}>
            <b className={styles.headingsH4}>Tips! #1</b>
            <div className={styles.body14pt}>
              Hover on your desired location!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDiv1}>
        <div className={styles.cardSectionDiv}>
          <div className={styles.textSectionDiv}>
            <b className={styles.headingsH4}>Tips! #2</b>
            <div className={styles.body14pt}>
              Is it what you want? Click it!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerNavBarDiv}>
        <div className={styles.rectangleDiv1} />
        <div
          className={styles.logoJamJiwaDiv1}
          onClick={onLogoJamJiwaContainer1Click}
        >
          <b className={styles.jamJiwaB}>JamJiwa</b>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.buttonDiv}>
            <div className={styles.body14pt2}>Home</div>
          </div>
          <div className={styles.buttonDiv}>
            <div className={styles.body14pt2}>Explore Jatim</div>
          </div>
          <div className={styles.buttonDiv2}>
            <div className={styles.body14pt2}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
