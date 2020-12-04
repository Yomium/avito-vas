import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';
import * as actions from '../actions/index';


const banner = handleActions({
  [actions.createBanner](state, { payload }) {
    return {
      ...state,
      id: payload.id,
      color: payload.color,
      link: payload.link,
      image: payload.image,
      title: payload.title,
    };
  },
  [actions.exportPNG](state) {
    const html = document.getElementById(state.id);
    htmlToImage.toBlob(html)
    .then((blob) => {
      saveAs(blob, 'preview.png')
    })
    return state;
  },
  [actions.exportHTML](state) {
    const element = document.getElementById(state.id);
    navigator.clipboard.writeText(element.outerHTML);
    return state;
  },
  [actions.exportJSON](state) {
    navigator.clipboard.writeText(JSON.stringify(state));
    return state;
  },
}, {});

export default combineReducers({
  banner,
  form: formReducer,
});
