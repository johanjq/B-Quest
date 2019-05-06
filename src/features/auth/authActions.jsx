import { SubmissionError, reset } from "redux-form";
import { closeModal } from "../modals/modalActions";
import { toastr } from 'react-redux-toastr'

//Authentication with username and password
//This verifies the credentials of the user to enter the system
export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

//This method is for Social Media Authentication,
//In order to enter the system, social media credentials has to be verified
export const socialLogin = (selectedProvider) =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try{
      dispatch(closeModal());
      let user = await firebase.login({
        provider: selectedProvider,
        type: 'popup'
      })
      if(user.additionalUserInfo.isNewUser){
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.avatarUrl,
          createdAt: firestore.FieldValue.serverTimestamp()

        })
      }
    }catch(error){
      console.log(error)
    }
  }


//This method is to register new users and store them in the database
//Username, Email and Password are required to perform this action
export const registerUser = user => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    //Create user in auth
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    console.log(createdUser);
      //update the auth profile
      await createdUser.updateProfile({
        displayName: user.displayName
      })
    //create a new profile in firestore
    let newUser = {
        displayName: user.displayName,
        createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.uid}`, {...newUser});
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
     throw new SubmissionError({
        _error: error.message
      });
  }
};

//The user is allowed to change their password
//Only if the account is created in B-Quest system
//Social Media accounts can only be  modified in the official site

export const updatePassword = (creds) => 
async (dispatch, getState, {getFirebase}) => {
  const firebase = getFirebase();
  const user = firebase.auth().currentUser;
  try{
    await user.updatePassword(creds.newPassword1);
    await dispatch(reset('account'));
    toastr.success('Success', 'Your password has been updated');
  }catch(error){
    throw new SubmissionError({
      error: error.message
    })
  }
}