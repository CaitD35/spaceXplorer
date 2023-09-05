import { gql } from '@apollo/client';
 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!) {
    addUser(username: $username) {
        _id
        username
        email
        password
        favoriteMissions
    }
}`;

export const ADD_FAVORITE_MISSION = gql`
mutation addFavoriteMission($userId: ID!, $missionID: ID!) {
    addFavoriteMission(userID: $userId, missionId: $missionID) {
        _id
}`;

export const REMOVE_USER = gql`
mutation removeUser($userID: ID!) {
    removeUser(_id: $userID){
        _id
}`;

export const REMOVE_FAVORITE_MISSION = gql`
mutation removeFavoriteMission($userId: ID!, $missionId: ID!) {
    removeFavoriteMission (userID:$userId , missionId :$missionId ) {
        _id
    }
}`;