import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import AddTodoModal from "./components/AddTodoModal/AddTodoModal";
import { useState } from "react";
import NoTodo from "./components/NoTodo/NoTodo";

function App() {
  const [modalIsShow, setModalIsShow] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const [filter, setFilter] = useState("all");

  const filterTodos = () => {
    if (filter === "all") {
      return todosList;
    }
    if (filter === "completed") {
      return todosList.filter((todo) => todo.isCompleted);
    }
    if (filter === "uncompleted") {
      return todosList.filter((todo) => !todo.isCompleted);
    }
  };

  const addNewTodo = (todoDatas) => {
    setTodosList((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.push({
        id: todosList.length + 1,
        isCompleted: false,
        ...todoDatas,
      });
      return updatedTodos;
    });
  };

  const handleRemoveTodo = (todoID) => {
    setTodosList((prevTodos) => {
      const updatedTodos = [...prevTodos].filter((todo) => todo.id !== +todoID);
      return updatedTodos;
    });
  };
  const handleCompleteTodo = (todoID) => {
    setTodosList((prevTodos) => {
      const updatedTodos = [...prevTodos].map((todo) => {
        if (todo.id === +todoID) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  return (
    <>
      <Header />

      <main className="container pb-25">
        <div id="headline" className="space-y-3">
          <h1 className="title">
            <img src="./public/images/hourglass.png" className="size-8" />
            <span> مدیریت و برنامه ریزی </span>
          </h1>
          <p className="max-w-[750px] text-zinc-700 text-sm font-Vazir-Medium!">
            سبز تسک ابزاری قدرتمند برای سازماندهی وظایف روزمره، برنامه‌ریزی
            پروژه‌ها و افزایش بهره‌وری شماست. با رابط کاربری ساده و امکانات
            پیشرفته، از پیگیری وظایف تا همکاری تیمی را به آسانی مدیریت کنید.
          </p>
        </div>

        <div className="mt-14 border-b w-full border-zinc-200 flex items-center py-3 justify-between">
          <div></div>
          <div className="flex items-center gap-2">
            <div className="dropdown">
              <input id="dd-toggle" type="checkbox" hidden />

              <label className="dd-btn" htmlFor="dd-toggle">
                <span>
                  نمایش{" "}
                  {filter === "all"
                    ? "همه"
                    : filter === "completed"
                      ? "تکمیل شده ها"
                      : "تکمیل نشده ها"}
                </span>
                <i className="fa-solid fa-chevron-down"></i>
              </label>

              <div className="dropdown_menu" role="menu">
                <div className="py-1">
                  <label
                    onClick={() => setFilter("all")}
                    htmlFor="dd-toggle"
                    className="menu-item"
                  >
                    همه
                  </label>
                  <label
                    onClick={() => setFilter("completed")}
                    htmlFor="dd-toggle"
                    className="menu-item"
                  >
                    تکمیل شده ها
                  </label>
                  <label
                    onClick={() => setFilter("uncompleted")}
                    htmlFor="dd-toggle"
                    className="menu-item"
                  >
                    در انتظار انجام
                  </label>
                </div>
              </div>
            </div>

            <button id="open-dialog" onClick={() => setModalIsShow(true)}>
              <span> ایجاد جدید </span>
              <div className="btn-divider"></div>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </div>
        {todosList.length ? (
          <section id="tasks" className="space-y-30 mt-5">
            <div className="space-y-5">
              <p className="text-sm">تسک های موجود:</p>
              {filterTodos().map((todoDatas) => (
                <Todo
                  key={todoDatas.id}
                  {...todoDatas}
                  onRemove={handleRemoveTodo}
                  onComplete={handleCompleteTodo}
                />
              ))}
            </div>
            <div className="space-y-5">
              <p className="text-sm">تسک های تکمیل شده:</p>
              {todosList
                .filter((todoDatas) => todoDatas.isCompleted)
                .map((todoDatas) => (
                  <Todo
                    key={todoDatas.id}
                    {...todoDatas}
                    onRemove={handleRemoveTodo}
                    onComplete={handleCompleteTodo}
                  />
                ))}
            </div>
          </section>
        ) : (
          <NoTodo />
        )}
      </main>

      <AddTodoModal
        isShow={modalIsShow}
        onClose={() => setModalIsShow(false)}
        onAdd={addNewTodo}
      />

      <Footer />
    </>
  );
}

export default App;
