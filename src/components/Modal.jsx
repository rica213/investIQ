import { useDispatch } from 'react-redux';
import { closeModal, searchByName } from '../redux/modal/modalSlice';
import styles from '../styles/Modal.module.css';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.overlay}>
      <span
        className={styles.closeBtn}
        onClick={() => dispatch(closeModal())}
        onKeyDown={() => dispatch(closeModal())}
        role="button"
        tabIndex="0"
      >
        &times;
      </span>
      <div className={styles.modal}>
        <fieldset>
          <legend>Search by:</legend>
          <div>
            <label htmlFor="symbol">
              <input
                type="radio"
                id="symbol"
                name="searchBy"
                value="symbol"
                onChange={(e) => dispatch(searchByName(e.target.value))}
              />
              Symbol
            </label>
          </div>
          <div>
            <label htmlFor="name">
              <input
                type="radio"
                id="name"
                name="searchBy"
                value="name"
                onChange={(e) => dispatch(searchByName(e.target.value))}
              />
              Name
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Modal;
