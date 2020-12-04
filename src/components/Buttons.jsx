import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import '../css/Buttons.css';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const actionCreators = {
  exportPNG: actions.exportPNG,
  exportHTML: actions.exportHTML,
  exportJSON: actions.exportJSON,
};

class Buttons extends React.Component {
  handlePNG = () => {
    const { exportPNG } = this.props;
    exportPNG();
  };

  handleHTML = () => {
    const { exportHTML } = this.props;
    exportHTML();
  };

  handleJSON = () => {
    const { exportJSON } = this.props;
    exportJSON();
  };

  render() {
    return (
      <div className="d-flex justify-content-center flex-wrap button-group">
        <button className="btn" type="button" onClick={this.handlePNG}>Сохранить как PNG</button>
        <button className="btn" type="button" onClick={this.handleHTML}>Скопировать как HTML</button>
        <button className="btn" type="button" onClick={this.handleJSON}>Скопировать как JSON</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Buttons);
