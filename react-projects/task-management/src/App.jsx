import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AddTodoModal from './components/AddTodoModal/AddTodoModal'
import Todo from './components/Todo/Todo'
import './App.css'

export default function App() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [todos, setTodos] = useState([])

  const addTodo = (title, description, isImportant) => {

    // Validation ✔️

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      isImportant,
      isCompleted: false,
    }

    setTodos([...todos, newTodo])
    setIsAddModalOpen(false)
  }

  return (
    <>
      <Header /> 
      
      <main className="container pb-25">
        <div id="headline" className="space-y-3 mt-10">
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
                <span>نمایش فقط</span>
                <i className="fa-solid fa-chevron-down"></i>
              </label>

              <div className="dropdown_menu" role="menu">
                <div className="dropdown-label">
                  <p className="text-start text-xs opacity-60">نمایش فقط</p>
                </div>
                <div className="py-1">
                  <label htmlFor="dd-toggle" className="menu-item">همه</label>
                  <label htmlFor="dd-toggle" className="menu-item">تکمیل شده ها</label>
                  <label htmlFor="dd-toggle" className="menu-item">
                    در انتظار انجام
                  </label>
                </div>
              </div>
            </div>

            <button id="open-dialog" onClick={() => setIsAddModalOpen(true)}>
              <span> ایجاد جدید </span>
              <div className="btn-divider"></div>
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </div>

        <section id="tasks" className="space-y-30 mt-5">
          <div className="space-y-5">
            <p className="text-sm">تسک های موجود:</p>
            { todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
          </div>

          <div className="space-y-5">
            <p className="text-sm">تسک‌های تکمیل‌شده</p>
            <Todo />
          </div>

        </section>
      </main>

      {/* <AddTodoModal /> */}
      {isAddModalOpen && (
        <AddTodoModal 
          onClose = {() => setIsAddModalOpen(false)}
          addTodoHandler={addTodo}
           />
      )}

      <Footer />
    </>
  )
}