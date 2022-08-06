import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import styles from "../styles/Modal.module.css";

const Modal = ({ isModalOpen, modalRef, hideModal }) => {
  return (
    <dialog
      open={isModalOpen}
      ref={modalRef}
      className={styles.modal}
      style={{
        display: isModalOpen ? "grid" : "none",
      }}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalTopbar}>
          <button onClick={hideModal} className={styles.modalClose}>
            <AiOutlineClose />
          </button>
          <button>
            <BiHelpCircle />
          </button>
        </div>
        <h3 className={styles.modalTitle}>Sign up for Tyerra!</h3>
        <p className={styles.modalDescription}>
          Create a profile, put up listings and find the house of your dreams!
        </p>
        <button className={styles.modalButton}>
          Continue with phone or email
        </button>
        <div className={styles.modalDivider}>
          <Divider />
          <p>Or continue with</p>
          <Divider />
        </div>
        <div className={styles.modalOptions}>
          <BsFacebook />
          <BsGoogle />
          <BsTwitter />
        </div>
        <p className={styles.modalDisclaimer}>
          By continuing, you agree to our <a>Terms of Service</a>, acknowledging
          the <a>Privacy Policy</a> to learn about how we use your data.
        </p>
        <div className={styles.modalSecondaryCta}>
          Already have an account? <a>Log in</a>
        </div>
      </div>
    </dialog>
  );
};

const Divider = () => {
  return <div className={styles.divider} />;
};

export default Modal;
