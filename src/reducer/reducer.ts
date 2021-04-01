const ADD_TOAST = "add_toast";
const REMOVE_TOAST = "remove_toast";

const initialState: any = {
  toastlist: []
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        toastlist: [...state.toastlist, action.payload]
      };
    case REMOVE_TOAST:
      return {
        toastlist: state.toastlist.filter(
          (val: any) => val.id !== action.toastrId
        )
      };
    default:
      return state;
  }
};

export default reducer;

export function addToast() {
  return (dispatch: any) => {
    dispatch({ type: ADD_TOAST, payload: "qwerty" });
  };
}

export function removeToast(id: number) {
  return (dispatch: any) => {
    dispatch({ type: REMOVE_TOAST, toastrId: id });
  };
}
