/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../styles/madiun3.module.css";

const Madiun3 = () => {
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

  const onScrollContainerClick = useCallback(() => {
    router.push("/madiun2");
  }, [router]);

  const onLogoJamJiwaContainer1Click = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  return (
    <div className={styles.madiunDiv}>
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
                src="../instagram1.svg"
                onClick={onInstagramIconClick}
              />
              <img
                className={styles.iconsBxlLinkedin}
                alt=""
                src="../icons--bxllinkedin1.svg"
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
        <b className={styles.madiunB}>Madiun</b>
        <b className={styles.welcomeToB}>Welcome to</b>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.madiunIcon} alt="" src="../madiun1@2x.png" />
        <div className={styles.disclosureDiv}>
          <div className={styles.disclosureHeaderDiv}>
            <div className={styles.body14pt}>Madiun</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more6.svg"
              />
            </div>
          </div>
          <div className={styles.disclosureBodyDiv} />
        </div>
        <div className={styles.disclosureDiv1}>
          <div className={styles.disclosureHeaderDiv}>
            <div className={styles.body14pt}>Pacitan</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more6.svg"
              />
            </div>
          </div>
          <div className={styles.disclosureBodyDiv} />
        </div>
        <div className={styles.disclosureDiv2}>
          <div className={styles.disclosureHeaderDiv}>
            <div className={styles.body14pt}>Ngawi</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more6.svg"
              />
            </div>
          </div>
          <div className={styles.disclosureBodyDiv} />
        </div>
        <div className={styles.disclosureDiv3}>
          <div className={styles.disclosureHeaderDiv}>
            <div className={styles.body14pt}>Nganjuk</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more6.svg"
              />
            </div>
          </div>
          <div className={styles.disclosureBodyDiv} />
        </div>
        <div className={styles.disclosureDiv4}>
          <div className={styles.disclosureHeaderDiv}>
            <div className={styles.body14pt}>Bojonegoro</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img className={styles.expandMoreIcon} alt="" />
            </div>
          </div>
          <div className={styles.disclosureBodyDiv} />
        </div>
        <div className={styles.disclosureDiv5}>
          <div className={styles.disclosureHeaderDiv}>
            <div className={styles.body14pt}>Magetan</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more6.svg"
              />
            </div>
          </div>
          <div className={styles.disclosureBodyDiv} />
        </div>
        <div className={styles.disclosureDiv6}>
          <div className={styles.disclosureHeaderDiv}>
            <div className={styles.body14pt}>Ponorogo</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more20.svg"
              />
            </div>
          </div>
          <div className={styles.disclosureBodyDiv} />
        </div>
      </div>
      <div className={styles.scrollDiv} onClick={onScrollContainerClick}>
        <div className={styles.scrollToHaveFun}>Scroll to have fun!</div>
        <img
          className={styles.chevronCompactDoubleDownIcon}
          alt=""
          src="../chevroncompactdoubledown.svg"
        />
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
            <div className={styles.body14pt7}>Home</div>
          </div>
          <div className={styles.buttonDiv}>
            <div className={styles.body14pt7}>Explore Jatim</div>
          </div>
          <div className={styles.buttonDiv2}>
            <div className={styles.body14pt7}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Madiun3;
