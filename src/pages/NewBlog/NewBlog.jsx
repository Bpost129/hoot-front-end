import { useState } from 'react'

// css
import styles from './NewBlog.module.css'

const NewBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    category: 'News'
  })

  const handleSubmit = e => {
    e.preventDefault()

  }

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>New Blog</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text" 
          name="title"
          id="title-input"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
				<textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="News">News</option>
          <option value="Games">Games</option>
          <option value="Music">Music</option>
          <option value="Movies">Movies</option>
          <option value="Sports">Sports</option>
          <option value="Television">Television</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewBlog