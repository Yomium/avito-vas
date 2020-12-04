import React from 'react';
import { connect } from 'react-redux';
import '../css/Preview.css';

const mapStateToProps = (state) => {
  const { banner } = state;
  return { banner };
};

class Preview extends React.Component {
  clickBanner = (link) => () => {
    window.open(link);
  }

  handleImageError = (e) => {
    e.target.style = 'display: none;'
  }

  render() {
    const { banner } = this.props;
    if (Object.keys(banner).length === 0) return null;
    return (
      <div className="preview-wrapper">
      <div id={banner.id} className="story-preview" onClick={this.clickBanner(banner.link)} onKeyPress={this.clickBanner(banner.link)} role="link" tabIndex={0} style={{backgroundColor: banner.color}}>
        <img src={banner.image} alt="" onError={this.handleImageError}/>
        <div className="story-preview-title">{banner.title ? banner.title.substring(0, 33) : null}</div>
      </div>
      </div>
      )
  }
}

export default connect(mapStateToProps)(Preview);
