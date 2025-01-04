import { useState } from 'react'

import Icon from '../Icon/Icon'

// css
import styles from './NewComment.module.css'

const NewComment = (props) => {
  const [formData, setFormData] = useState({ text: '' })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.handleAddComment(formData)
    setFormData({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1>NewComment</h1>
      <textarea 
        required
        name="text" 
        value={formData.text}
        placeholder='Add a Comment'
        onChange={handleChange}
      />
      <button type='submit'><Icon category='Create' /></button>
    </form>
  )
}

export default NewComment