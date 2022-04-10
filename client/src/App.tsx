import { BrowserRouter, Route } from "react-router-dom";

import NotePage from "./pages/NotePage";
import NotesPage from "./pages/NotesPage";

import Header from "./components/Header";
import NewNotePage from "./pages/NewNotePage";

const App = (): JSX.Element => {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={NotesPage} />
          <Route path="/note/:id" component={NotePage} />
          <Route path="/add-note" component={NewNotePage} />
        </BrowserRouter>
      </div>
    </div>
  );
};
export default App;
