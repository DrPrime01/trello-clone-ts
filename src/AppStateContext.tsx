/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react"
import {v4 as uuid} from "uuid";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export function AppStateProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = useReducer(listReducer, appData)

    function listReducer(state: AppState, action: Action) {
        switch (action.type) {
            case "AddList":
                return {
                    ...state,
                    lists: [...state.lists, {
                        id: uuid(),
                        title: action.payload,
                        tasks: []
                    }]
                }
            case "AddTask": {
                const updatedList: List[] = state.lists.map(list => {
                    if (list.id === action.payload.taskId) {
                        return {
                            ...list,
                            tasks: [...list.tasks, {
                                id: uuid(),
                                text: action.payload.text
                            }]
                        }
                    }
                    return list;
                });
               
                return {
                    ...state,
                    lists: updatedList
                }
            }       
            default: 
                return state;
        }
    }
    return <AppStateContext.Provider value={{ state, dispatch }}>
        { children }
    </AppStateContext.Provider>
}

export function useAppState() {
    return useContext(AppStateContext)
}

interface Task {
    id: string,
    text: string
}
  
interface List {
    id: string,
    title: string,
    tasks: Task[]
}
  
interface AppState {
    lists: List[]
}

interface AppStateContextProps {
    state: AppState,
    dispatch({type, payload}: Action): void
}

type Action = | {
    type: "AddList",
    payload: string
} | {
    type: "AddTask",
    payload: { text: string, taskId: string }
}

const appData: AppState = {
    lists: [
      {
        id: "0",
        title: "To Do",
        tasks: [
          {
            id: "t0",
            text: "Generate app scaffold"
          }
        ]
      },
      {
        id: "1",
        title: "In Progress",
        tasks: [
          {
            id: "t1",
            text: "Learn TypeScript"
          }
        ]
      },
      {
        id: "2",
        title: "Done",
        tasks: [
          {
            id: "t2",
            text: "Begin to use static typing"
          }
        ]
      },
    ]
  }