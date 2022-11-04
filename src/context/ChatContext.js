import { createContext } from "react";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useReducer } from "react";
export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: 'null',
    user: {},
    combineId:'null',
  };


  
  const chatReducer = (state, action) => {
    switch (action.type) {
    
case "SELECT_ID":
  return{
    ...state,
    combineId:action.payload

  }
      case "CHANGE_USER":
        return {
          ...state,
         
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
