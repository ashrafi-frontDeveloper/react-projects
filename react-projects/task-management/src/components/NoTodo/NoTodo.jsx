import React from 'react'

export default function NoTodo() {
  return (
    <div className="empty-list">
        <span> چیزی برای نمایش وجود ندارد ! </span>
        <img
        src="images/thinking.png"
        alt="Think"
        className="size-6"
        />
    </div>
  )
}

