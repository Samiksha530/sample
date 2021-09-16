import { EVENT_NAME as DB_EVENT_NAME } from './constants/db.constants';

export enum SESSION_STORAGE_DATA_KEY {
  USERINFO = 'userinfo',
  SESSION_TOKEN = 'sessionToken',
  NAVIGATION_DATA = "PAGE_NAVIGATION_DATA",
  USER_NAME = 'username',
}

export enum LOCAL_STORAGE_DATA_KEY {
  USERINFO = 'userinfo',
  SESSION_TOKEN = 'sessionToken',
}
export enum NAVIGATION_DATA {
  SESSION_TOKEN = 'elginSessionToken',
  // REVERSE_GEOCODE = 'reverseGeocode',
  // CREATE_PERMIT = 'createPermit'
}

export enum NAVIGATION_DATA {
  CREATE_PERMIT = 'createPermit',
  EDIT_PERMIT = 'editPermit'
}

export enum FILTER_TYPE {
  ADVANCE_FILTER = 0,
  QUICK_FILTER = 1,
  DYNAMIC_FILTER = 2
}

export enum JOURNEY_TYPE {
  NONE = 'none',
  SSM_START = 'ssm_start',
  SSM_STOP = 'ssm_stop',
  SSM_REGISTER = 'ssm_register',
  IDM_2_4 = 'idm_2_4',
  IDM_VISUAL_CORING = 'idm_visual_coring'
}

export enum GLOBAL_PARAM_KEY {
  PERMIT = "Permit",
  ELGIN_MAP = "ELGIN_MAP",
  CONDITIONS = "CONDITIONS",
  PERMIT_FORM = "PERMIT_FORM",
  PERMIT_CONFIRMATION = "PERMIT_CONFIRMATION",

  REINSTATEMENT_ELGIN_MAP = "REINSTATEMENT_ELGIN_MAP",
  REINSTATEMENT_FORM = "REINSTATEMENT_FORM",
  REINSTATEMENT__CONFIRMATION = "REINSTATEMENT_CONFIRMATION",

  VIEW_ELGIN_MAP = "VIEW_ELGIN_MAP",
  VIEW_CONDITIONS = "VIEW_CONDITIONS",
  VIEW_PERMIT_FORM = "VIEW_PERMIT_FORM",

  NEW_PERMIT_CONDITIONS = "NEW_PERMIT_CONDITIONS",
  NEW_PERMIT_PERMIT_FORM = "NEW_PERMIT_PERMIT_FORM",
  APP_FILTER = "App_Filters",
}

export enum GLOBAL_PARAM_MODE {
  PERMIT_VIEW = "PERMIT_VIEW",
  NEW_PERMIT = "NEW_PERMIT",
}

export const REMEMBER_ME_DATA = "pwb-rm-data";
