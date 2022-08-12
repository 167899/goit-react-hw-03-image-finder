import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, id, toggleModal }) => {
  return (
    <>
      <li onClick={toggleModal} className={styles.galleryItem} id={id}>
        <img src={src} alt={id} className={styles.galleryItemImage} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
