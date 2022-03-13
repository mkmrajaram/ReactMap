export const ADD_SEARCH_LOCATION = 'ADD_SEARCH_LOCATION';
export const REMOVE_SEARCH_LOCATION = 'REMOVE_SEARCH_LOCATION';
export const GET_SEARCH_LOCATIONS = 'GET_SEARCH_LOCATIONS';
export const SET_ACTIVE_LOCATION = 'SET_ACTIVE_LOCATION';
import DB from '../db.config';

export const addLocation = data => async dispatch => {
  await DB.transaction(async tx => {
    await tx.executeSql(
      'INSERT INTO  locations (name,lat,lng) VALUES (?,?,?)',
      [data.name, data.latitude, data.longitude],
      (tx, results) => {
        console.log('saved :', results);
      },
      error => {
        console.log('error', error);
      },
    );
  });
  dispatch({type: ADD_SEARCH_LOCATION, payload: data});
};

export const setLocation = data => async dispatch => {
  dispatch({type: SET_ACTIVE_LOCATION, payload: data});
};

export const getLocations = () => async dispatch => {
  await DB.transaction(async tx => {
    await tx.executeSql(
      'SELECT * FROM locations',
      [],
      (tx, results) => {
        if (results.rows.item.length > 0) {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          dispatch({type: GET_SEARCH_LOCATIONS, payload: temp});
        }
      },
      error => {
        console.log('error', error);
      },
    );
  });
};
