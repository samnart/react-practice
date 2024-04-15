import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
    return <section>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
}

const Book = () => {
    return <article>
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL900_SR900,600_.jpg' alt='The Women'/>
const Title = () => <h2>The Women</h2>
const Author = () => <h4>Kristin Hannah</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
