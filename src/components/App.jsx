import { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';

import { ThreeDots } from 'react-loader-spinner';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    name: '',
    images: null,
    loading: false,
    perPage: 12,
    showModal: false,
    largeImageURL: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.perPage !== this.state.perPage) {
      this.fetch();
    }
    if (prevState.name !== this.state.name && this.state.name === '') {
      this.setState({
        images: null,
      });
    }
  }

  hendleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };

  fetch = () => {
    const key = '27831105-5e5b5e1ddfe0fd39cdbde4893';
    const URL = `https://pixabay.com/api/`;
    const perPage = this.state.perPage;
    const option = {
      params: {
        key: `${key}`,
        q: `${this.state.name}`,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: `${perPage}`,
      },
    };
    this.setState({ loading: true });
    axios
      .get(URL, option)
      .then(images => this.setState({ images: images.data, loading: false }));
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.fetch();
    this.setState({
      images: null,
      perPage: 12,
    });
  };

  hendleLoade = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      perPage: prevState.perPage + 12,
    }));
  };

  onClickModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  toggleModal = e => {
    this.onClickModal();
    const ID = e.currentTarget.id;
    const img = this.state.images.hits.find(e => e.id === Number(ID));
    this.setState({ largeImageURL: img.largeImageURL });
  };

  render() {
    return (
      <div className={styles.app}>
        <Searchbar
          onSubmit={this.hendleSubmit}
          name={this.state.name}
          onChange={this.hendleChange}
        />

        {this.state.images && (
          <>
            <ImageGallery
              images={this.state.images.hits}
              toggleModal={this.toggleModal}
            />
            {this.state.loading && (
              <ThreeDots
                height="80"
                s
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
                wrapperClassName=""
                visible={true}
              />
            )}
            <Button onClick={this.hendleLoade} />
          </>
        )}
        {this.state.showModal && (
          <Modal onClick={this.onClickModal}>
            <img src={this.state.largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
