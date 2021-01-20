/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addHouses } from '../../redux/actions/houseAction';

const AddHouse = ({ addHouses }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: '',
  });
  const { name, description, image_url } = formData;

  const history = useHistory();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addHouses({
      name,
      description,
      image_url,
    });
    history.push('/houses');
  };

  return (
    <div>
      <div className="row mx-0">
        <div className="w-100 px-0">
          <div className="header-title">Add houses</div>
          <form className="add-stack px-5 pt-5 py-10" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="w-100" htmlFor="houseName">
                name
                <input
                  type="text"
                  name="name"
                  id="seriesName"
                  className="form-control"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="w-100" htmlFor="description">
                description
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="form-control"
                  placeholder="description"
                  required
                  value={description}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label className="w-100" htmlFor="image_url">
                image_url
                <input
                  type="text"
                  name="image_url"
                  id="image_url"
                  className="form-control"
                  placeholder="image_url"
                  required
                  value={image_url}
                  onChange={onChange}
                />
              </label>
            </div>
            <button type="submit" className="btn mt-3 custom-button">
              Create House
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

AddHouse.propTypes = {
  addHouses: PropTypes.func.isRequired,
  house: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  house: state.houses.house,
});

export default connect(mapStateToProps, { addHouses })(AddHouse);
