import AppContainer from "./components/AppContainer"
import Card from "./components/Card"
import Column from "./components/Column"
import AddNewItem from "./components/AddNewItem"
import { useAppState } from "./AppStateContext";

function App() {
  const { state, dispatch } = useAppState()
  return (
    <AppContainer>
      {state.lists.map(list => <Column key={list.id} title={list.title}>
        {list.tasks.map(task => <Card key={task.id} text={task.text} />)}
        <AddNewItem handleAdd={(text) => dispatch({type: "AddTask", payload: {text, taskId: list.id}})} dark />
      </Column>)}
      
      <AddNewItem handleAdd={(text) => dispatch({type: "AddList", payload: text})} />
    </AppContainer>
  )
}

export default App

