/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import styles from "../styles/madiun.module.css";

const Madiun = () => {
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
                src="../faceboookcircle.svg"
                onClick={onFaceboookCircleIconClick}
              />
              <img
                className={styles.faceboookCircleIcon}
                alt=""
                src="../twitter.svg"
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
                src="../instagram.svg"
                onClick={onInstagramIconClick}
              />
              <img
                className={styles.iconsBxlLinkedin}
                alt=""
                src="../icons--bxllinkedin.svg"
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
      <img className={styles.madiunIcon} alt="" src="../madiun1@2x.png" />
      <div className={styles.modalDiv}>
        <div className={styles.dropdownDiv}>
          <div className={styles.dropdownParentDiv}>
            <div className={styles.body14pt}>Greetings</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more.svg"
              />
            </div>
          </div>
          <div className={styles.dropdownChild1}>
            <div className={styles.body14pt1}>Wilujeng Enjing</div>
            <i className={styles.body14pt2}>Selamat Pagi</i>
            <img
              className={styles.iconSoundWave}
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className={styles.dropdownChild1}>
            <div className={styles.body14pt1}>Wilujeng Sumping</div>
            <i className={styles.body14pt2}>Selamat Sumping</i>
            <img
              className={styles.iconSoundWave}
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className={styles.dropdownChild1}>
            <div className={styles.body14pt1}>Wilujeng Siang</div>
            <i className={styles.body14pt2}>Selamat Siang</i>
            <img
              className={styles.iconSoundWave}
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className={styles.dropdownChild1}>
            <div className={styles.body14pt1}>Wilujeng Dalu</div>
            <i className={styles.body14pt2}>Selamat Malam</i>
            <img
              className={styles.iconSoundWave}
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
          <div className={styles.dropdownChild1}>
            <div className={styles.body14pt1}>Wilujeng Sedoyo</div>
            <i className={styles.body14pt2}>Halo Semuanya</i>
            <img
              className={styles.iconSoundWave}
              alt=""
              src="../-icon-sound-wave.svg"
            />
          </div>
        </div>
        <div className={styles.dropdownDiv1}>
          <div className={styles.dropdownParentDiv1}>
            <div className={styles.body14pt}>Daily Conversation</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 2</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 3</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 4</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 5</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 6</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 7</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 8</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 9</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 10</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 11</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 12</div>
          </div>
        </div>
        <div className={styles.dropdownDiv1}>
          <div className={styles.dropdownParentDiv1}>
            <div className={styles.body14pt}>Asking for Helps</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 2</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 3</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 4</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 5</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 6</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 7</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 8</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 9</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 10</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 11</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 12</div>
          </div>
        </div>
        <div className={styles.dropdownDiv1}>
          <div className={styles.dropdownParentDiv1}>
            <div className={styles.body14pt}>Thank You</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 2</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 3</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 4</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 5</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 6</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 7</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 8</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 9</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 10</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 11</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 12</div>
          </div>
        </div>
        <div className={styles.dropdownDiv1}>
          <div className={styles.dropdownParentDiv1}>
            <div className={styles.body14pt}>Unique Phrase or Vocabulary</div>
            <div className={styles.verticalTabsvuesaxlinearPrDiv}>
              <img
                className={styles.expandMoreIcon}
                alt=""
                src="../expand-more1.svg"
              />
            </div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 2</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 3</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 4</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 5</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 6</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 7</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 8</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 9</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 10</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 11</div>
          </div>
          <div className={styles.dropdownChild11}>
            <div className={styles.body14pt12}>Label 12</div>
          </div>
        </div>
      </div>
      <img className={styles.xIcon} alt="" src="../x.svg" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.modalDiv1}>
        <div className={styles.frameDiv3}>
          <img className={styles.xIcon1} alt="" src="../x1.svg" />
        </div>
        <div className={styles.imageDiv}>
          <img
            className={styles.iconSpeaker}
            alt=""
            src="../-icon-speaker.svg"
          />
          <div className={styles.sugengEnjing}>
            <span>{`Sugeng Enjing `}</span>
            <span className={styles.span}>|</span>
          </div>
          <div className={styles.jawaTimurMadiun}>Jawa Timur - Madiun</div>
          <img
            className={styles.iconKeyboardArrowDown}
            alt=""
            src="../-icon-keyboard-arrow-down.svg"
          />
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.body14pt}>Translate!</div>
        </div>
        <div className={styles.imageDiv}>
          <img
            className={styles.iconSpeaker}
            alt=""
            src="../-icon-speaker.svg"
          />
          <div className={styles.sugengEnjing}>
            <span>{`Selamat Pagi `}</span>
            <span className={styles.span}>...</span>
          </div>
          <div className={styles.bahasaIndonesiaDiv}>Bahasa Indonesia</div>
          <img
            className={styles.iconKeyboardArrowDown}
            alt=""
            src="../-icon-keyboard-arrow-down.svg"
          />
        </div>
      </div>
      <div className={styles.headerNavBarDiv}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.logoJamJiwaDiv1}>
          <b className={styles.jamJiwaB}>JamJiwa</b>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.frameDiv4}>
          <div className={styles.buttonDiv1}>
            <div className={styles.body14pt60}>Home</div>
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.body14pt60}>Explore Jatim</div>
          </div>
          <div className={styles.buttonDiv3}>
            <div className={styles.body14pt60}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Madiun;
