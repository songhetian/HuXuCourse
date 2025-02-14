import FetchTodo from "./components/FetchTodo.jsx";
import {Suspense,ErrorBoundary} from "react";

function App() {

  return (
      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <Suspense fallback={<div>Loading...</div>}>
            <FetchTodo/>
        </Suspense>
      </ErrorBoundary>
  )
}

export default App
