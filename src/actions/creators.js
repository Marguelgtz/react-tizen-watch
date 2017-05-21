import * as actionType from '../actions/types';

export const initializeApp = () => ({ type: actionType.INITIALIZE_APP });
export const loadPages = pages => ({ type: actionType.LOAD_PAGES, payload: { pages } });
export const loadDevices = devices => ({ type: actionType.LOAD_DEVICES, payload: { devices } });
export const loadGroups = groups => ({ type: actionType.LOAD_GROUPS, payload: { groups } });

export const activatePage = id => ({ type: actionType.ACTIVATE_PAGE, payload: { id } });
export const selectPage = id => ({ type: actionType.SELECT_PAGE, payload: { id } });
export const closePage = () => ({ type: actionType.CLOSE_PAGE });

export const activateDevice = id => ({ type: actionType.ACTIVATE_DEVICE, payload: { id } });
export const selectDevice = id => ({ type: actionType.SELECT_DEVICE, payload: { id } });
export const closeDevice = () => ({ type: actionType.CLOSE_DEVICE });
