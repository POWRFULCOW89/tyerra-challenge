import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import { FaRegCommentDots, FaShare } from "react-icons/fa";

import styles from "../styles/SocialActions.module.css";

import getShortNumber from "../utils/getShortNumber";

const SocialActions = ({
  audio,
  author,
  likes,
  comments,
  shares,
  showModal,
}) => {
  return (
    <div className={styles.overlaySocial}>
      <button onClick={showModal} className={styles.overlaySocialIcon}>
        <Image
          src={audio.author.avatar_url ?? "/default-avatar.png"}
          alt="User avatar"
          width={50}
          height={50}
          className={styles.overlaySocialAvatarImage}
        />
      </button>
      <button onClick={showModal} className={styles.overlaySocialIcon}>
        <BsHeart size={30} />
        {getShortNumber(likes)}
      </button>
      <button onClick={showModal} className={styles.overlaySocialIcon}>
        <FaRegCommentDots size={30} />
        {getShortNumber(comments)}
      </button>
      <button onClick={showModal} className={styles.overlaySocialIcon}>
        <FaShare size={30} />
        {getShortNumber(shares)}
      </button>
      <button onClick={showModal} className={styles.overlaySocialIcon}>
        <div className={styles.overlaySocialDisk}>
          <Image
            src={author.avatar_url ?? "/default-avatar.png"}
            alt="User avatar"
            width={40}
            height={40}
            className={styles.overlaySocialAvatarImage}
          />
        </div>
      </button>
    </div>
  );
};

export default SocialActions;
