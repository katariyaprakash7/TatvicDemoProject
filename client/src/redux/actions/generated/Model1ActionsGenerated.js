/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e5cf34752a8e9561a0d3360
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN Model1ActionsGenerated.js PLEASE EDIT ../Model1Actions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import Model1Api from "../../../api/Model1Api";

let actionsFunction = {

  //CRUD METHODS

  // Create model1
  createModel1: function(model1) {
    return function(dispatch) {
      return Model1Api
        .createModel1(model1)
        .then(model1 => {
          dispatch(actionsFunction.createModel1Success(model1));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createModel1Success: function(model1) {
    return { type: types.CREATE_MODEL1_SUCCESS, payload: model1 };
  },


  // Delete model1
  deleteModel1: function(id) {
    return function(dispatch) {
      return Model1Api
        .deleteModel1(id)
        .then(model1 => {
          dispatch(actionsFunction.deleteModel1Success(model1));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteModel1Success: function(model1) {
    return { type: types.DELETE_MODEL1_SUCCESS, payload: model1 };
  },


  // Get model1
  loadModel1: function(id) {
    return function(dispatch) {
      return Model1Api
        .getOneModel1(id)
        .then(model1 => {
          dispatch(actionsFunction.loadModel1Success(model1));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadModel1Success: function(model1) {
    return { type: types.GET_MODEL1_SUCCESS, payload: model1 };
  },

  // Load  list
  loadModel1List: function() {
    return function(dispatch) {
      return Model1Api
        .getModel1List()
        .then(list => {
          dispatch(actionsFunction.loadModel1ListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadModel1ListSuccess: function(list) {
    return { type: types.LIST_MODEL1_SUCCESS, payload: list };
  },

	
  // Save model1
  saveModel1: function(model1) {
    return function(dispatch) {
      return Model1Api
        .saveModel1(model1)
        .then(model1 => {
          dispatch(actionsFunction.saveModel1Success(model1));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveModel1Success: function(model1) {
    return { type: types.UPDATE_MODEL1_SUCCESS, payload: model1 };
  },


};

export default actionsFunction;
