function Todo({ title, description }) {
  return (
    <div className="space-y-0.5">
      <article className="task-card">
        <div className="task-content">
          <div>
            <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</h3>
            <p className="task-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و
            </p>
          </div>
        </div>

        <div className="moderate">
          <div className="flex items-center **:min-w-max gap-2">
            <span className="status-label completed"> تکمیل شده </span>
            <span className="priority code-1"> مهم </span>
          </div>
          <div className="moderate-btns">
            <button className="complete-task">
              <i className="fa-solid fa-circle-check"></i>
            </button>
            <button className="undone-btn">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Todo;
