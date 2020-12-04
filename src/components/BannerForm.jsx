import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index';
import '../css/BannerForm.css';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const actionCreators = {
  createBanner: actions.createBanner,
};

class BannerForm extends React.Component {
  submit = (values) => {
    const { createBanner } = this.props;
    createBanner({ ...values, id: _.uniqueId() });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
        <form className="form" onSubmit={handleSubmit(this.submit)}>
          <div className="form-group">
            <label>Ссылка на фоновую иллюстрацию</label>
            <div>
              <Field className="form-control" name="image" component="input" type="text" onChange={handleSubmit(this.submit)} />
            </div>
          </div>
          <div className="form-group">
            <label>Какой будет заголовок?</label>
            <div>
              <Field className="form-control" name="title" component="input" type="text" onChange={handleSubmit(this.submit)}/>
            </div>
          </div>
          <div className="form-group">
            <label>Цвет для заливки</label>
            <div>
              <Field name="color" component="input" type="color" onChange={handleSubmit(this.submit)} />
            </div>
          </div>
          <div className="form-group">
            <label>Ссылка для перехода по клику на превью</label>
            <div>
              <Field className="form-control" name="link" component="input" type="text" onChange={handleSubmit(this.submit)}/>
            </div>
          </div>
        </form>
    );
  }
}

const ConnectedBannerForm = connect(mapStateToProps, actionCreators)(BannerForm);

export default reduxForm({
  form: 'createBanner',
})(ConnectedBannerForm);
