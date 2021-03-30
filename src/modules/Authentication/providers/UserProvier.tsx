import React, { createContext } from "react";
import { IAuthState, IUser } from "utils";
import { userReducer } from "../reducers/userReducer";

const initialUser: IUser = {
  id: 1,
  utilisateurId: "",
  nom: "",
  prenom: "",
  login: "",
  email: "",
  password: "",
  profil: {
    id: -2,
    name: "",
    privileges: [{ id: -1, privilegeId: null, name: "", ordre: -1, path: "" }],
  },
  datecreation: "",
  tel: "",
  encryptedPassword: "",
  emailverificationToken: "",
  emailverificationStatus: "",
  isSuccess: false,
  success: { message: "", type: "success" },
};

const initialState: IAuthState = {
  isLoggedIn: false,
  currentUser: initialUser,
  loading: false,
  isError: false,
  error: {
    title: "",
    message: "",
  },
  isSuccess: false,
  success: {
    title: "",
    message: "",
  },
  users: [],
};
const UserContext = createContext(initialState);
let ann: any;
const UserDispatchContext = createContext<{
  dispatch: React.Dispatch<{ type: string; payload: any }>;
}>(ann);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  const checkUser = async () => {
    const token = localStorage.getItem("authorization");
    const utilisateurId = localStorage.getItem("utilisateurId");
    if (token && utilisateurId) {
    }
  };

  React.useEffect(() => {
    checkUser();
  }, [state.isError, state.isSuccess]);

  return (
    <UserDispatchContext.Provider value={{ dispatch }}>
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
export const useUserDispatch = () => React.useContext(UserDispatchContext);
export default UserProvider;
