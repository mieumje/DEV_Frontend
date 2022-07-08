import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import TodosPage from "./pages/TodosPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";
import Navbar from "./pages";
import AddPostPage from "./pages/AddPostPage";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        backgroundColor: `${theme ? "#1a1a1a" : "white"}`,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/todos" element={<TodosPage />}></Route>
            <Route path="/newPost" element={<AddPostPage />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
