import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "components/Layout/Layout";

const CardList = lazy(() => import("./pages/CardListPage/CardList"));
const Kanban = lazy(() => import("./pages/KanbanPage/Kanban"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/cards" element={<CardList />}/>
          <Route path="/boards" element={<Kanban />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
