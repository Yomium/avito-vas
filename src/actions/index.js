import { createAction } from 'redux-actions';

export const createBanner = createAction('BANNER_CREATE');
export const exportPNG = createAction('EXPORT_PNG');
export const exportHTML = createAction('EXPORT_HTML');
export const exportJSON = createAction('EXPORT_JSON');
