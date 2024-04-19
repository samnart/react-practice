import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Kristin Hannah',
    title: 'The Women',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Jonathan Haidt',
    title: 'The Anxious Generation',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81XP4hEXDXL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
  }

  const handleButtonClick = () => {
    alert('handle button click')
  }

  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">submit</button>

        <div>
          <button onClick={handleButtonClick} type="button">
            Click me
          </button>
        </div>
      </form>
    </section>
  )
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
