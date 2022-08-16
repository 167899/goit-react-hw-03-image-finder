import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hendlKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendlKeyDown);
  }

  hendlKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };
  hendlBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className={styles.overlay} onClick={this.hendlBackdropClick}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
