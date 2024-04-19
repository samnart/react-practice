import React from 'react'

export const Book = ({title, author, img, number}) => {
  return (
    <section className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className='number'>{`# ${number + 1}`}</span>
    </section>
  )
}

// export default Book