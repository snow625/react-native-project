export const getErrorAndLoadingAuth = (store) => {
    return { loading: store.auth.loading, error: store.auth.error };
  };

  export const isUserLogin = (store)=>{
    
    return store.auth.token? true: false;
  }

  export const getUserInfo = (store)=>{
    return store.auth.user;
  }

