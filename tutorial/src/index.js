import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'The Women'
  const author = 'Kristin Hannah'
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="The Women" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)









```css
    *{
        margin: 0;
        padding: 0;
        box-sizing: boorder-box;
    }

    body {
        font-family: 
        background: #f1f5f8;
        color: #222;
    }

```
