import { useState } from "react";
import "./AddTodoModal.css";

function AddTodoModal({ isShow, onClose, onAdd }) {
  const [todoTitleInput, setTodoTitleInput] = useState("");
  const [todoDescriptionInput, setTodoDescriptionInput] = useState("");
  const [todoIsImportantInput, setTodoIsImportantInput] = useState(false);

  const handleCreateTodoClick = () => {
    if (todoTitleInput.trim().length && todoDescriptionInput.trim().length) {
      onAdd({
        title: todoTitleInput,
        description: todoDescriptionInput,
        isImportant: todoIsImportantInput,
      });
      setTodoTitleInput("");
      setTodoDescriptionInput("");
      onClose()
    }
  };
  return (
    <div id="modal-screen" className={isShow ? "" : "is-hidden"}>
      <div className="modal-content">
        <header className="modal-header">
          <span className="font-IOS-Font! text-sm absolute left-0 right-0 mx-auto! max-w-max! text-[#2b2929] select-none!">
            ایجاد برنامه جدید
          </span>
          <div className="btns *:size-3.5 *:cursor-pointer *:rounded-full">
            <button id="modal-close-button" onClick={onClose}></button>
          </div>
        </header>
        <main className="my-5 space-y-3">
          <input
            value={todoTitleInput}
            onChange={(event) => setTodoTitleInput(event.target.value)}
            placeholder="عنوان تسک را وارد نمائید ..."
            className="input-element title-input"
          />

          <textarea
            value={todoDescriptionInput}
            onChange={(event) => setTodoDescriptionInput(event.target.value)}
            className="input-element description-input"
            placeholder="توضیحات تسک را وارد نمائید ..."
            name="description"
          ></textarea>
          <div className="my-3 flex items-center gap-2">
            <input
              value={todoIsImportantInput}
              onChange={(event) =>
                setTodoIsImportantInput(event.target.checked)
              }
              id="is-important"
              type="checkbox"
            />
            <label htmlFor="is-important"> مهم </label>
          </div>
          <div className="info-message">
            <p className="inline-flex! items-center gap-1">
              <img
                src="./public/images/check.png"
                alt="Checked"
                className="size-4"
              />
              <span> لطفا تمامی فیلد هارا تکمیل بفرمایید </span>
            </p>
          </div>
        </main>
        <footer className="mt-5 flex items-center justify-end text-sm pb-3">
          <button id="create-button" onClick={handleCreateTodoClick}>
            ایجاد کنید
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AddTodoModal;
