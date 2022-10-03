export const githubReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_GITHUB_USER_LOADING": {
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      }
      case "FETCH_GITHUB_USER_SUCCESS": {
        return {
          ...state,
          isLoading: false,
          data: action.payload
        };
      }
      case "FETCH_GITHUB_USER_FAILURE": {
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      }
      default:
        return state;
    }
  };
  