import { BsMusicNoteBeamed } from "react-icons/bs";

import styles from "../styles/Content.module.css";

const Content = ({ author, description, audio, action }) => {
  return (
    <div className={styles.overlayContent}>
      <h3>{author.tag}</h3>
      <p>{description}</p>
      <marquee style={{ marginBottom: action ? 0 : "1em" }}>
        <p style={{ display: "flex", alignItems: "center" }}>
          <BsMusicNoteBeamed /> <span>&nbsp;- {audio.title}</span>
        </p>
      </marquee>
      {action && (
        <a href={action.url} className={styles.overlaySocialButton}>
          {action.label}
        </a>
      )}
    </div>
  );
};

export default Content;
