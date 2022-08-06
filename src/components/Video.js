import { useEffect, useRef, useState } from "react";

import styles from "../styles/Video.module.css";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import Content from "./Content";
import SocialActions from "./SocialActions";
import Modal from "./Modal";

const Video = ({ post }) => {
  let {
    id,
    author,
    title,
    description,
    video_url,
    likes,
    comments,
    shares,
    audio,
    action,
  } = post;
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const play = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      let x = window.scrollX;
      let y = window.scrollY;

      window.addEventListener("wheel", function () {
        window.scrollTo(x, y);
      });
      return () => window.removeEventListener("wheel", function () {});
    }

    let touchstartY = 0,
      touchendY = 0;

    window.addEventListener("wheel", () => {
      videoRef.current.pause();
    });

    window.addEventListener(
      "touchstart",
      function (event) {
        touchstartY = event.changedTouches[0].screenY;
      },
      false
    );

    window.addEventListener(
      "touchend",
      function (event) {
        touchendY = event.changedTouches[0].screenY;
        handleSwipe();
      },
      false
    );

    const handleSwipe = () => {
      if (touchendY > touchstartY || touchendY < touchstartY) {
        videoRef.current.pause();
      }
    };

    return () => {
      window.removeEventListener("wheel", () => {});
      window.removeEventListener("touchstart", () => {});
      window.removeEventListener("touchend", () => {});
    };
  });

  const showModal = () => {
    setIsModalOpen(true);
    modalRef.current.showModal();
  };

  const hideModal = () => {
    setIsModalOpen(false);
    modalRef.current.close();
  };

  return (
    <div className={styles.container} id="container">
      <video className={styles.video} src={video_url} ref={videoRef} muted />
      <div className={styles.overlay}>
        <button className={styles.overlayPlay} onClick={play}>
          <div style={{ cursor: "pointer" }}>
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </div>
        </button>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            alignItems: "flex-end",
            zIndex: 50,
            gap: "1em",
            padding: "0.5em",
          }}
        >
          <Content {...{ author, description, audio, action }} />
          <SocialActions
            {...{ likes, comments, shares, author, audio, showModal }}
          />
        </div>

        <Modal {...{ isModalOpen, modalRef, hideModal }} />
      </div>
    </div>
  );
};

export default Video;
