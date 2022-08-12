import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <>
      <ul className={styles.gallery}>
        {images.map(img => (
          <ImageGalleryItem
            toggleModal={toggleModal}
            key={img.id}
            id={img.id}
            src={img.webformatURL}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      src: PropTypes.string,
    })
  ),
  toggleModal: PropTypes.func.isRequired,
};
