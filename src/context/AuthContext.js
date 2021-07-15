import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";
import { ApolloClient, InMemoryCache, HttpLink, from, ApolloProvider } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

let serverUri = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://piba-server.herokuapp.com/";
  } else {
    return "http://localhost:5001/";
  }
};

const httpLink = new HttpLink({
  uri: serverUri,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password, rememberMe) {
    return auth.setPersistence(rememberMe ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION).then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    });
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      <ApolloProvider client={client}>{!loading && children}</ApolloProvider>
    </AuthContext.Provider>
  );
}
