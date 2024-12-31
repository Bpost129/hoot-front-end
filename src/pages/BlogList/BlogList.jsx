import BlogCard from '../../components/BlogCard/BlogCard'

// css
import styles from './BlogList.module.css'

const BlogList = (props) => {
  console.log('BlogList props:', props)
  return (
    <main className={styles.container}>
      <h1>Blog List</h1>
      {props.blogs.map(blog => {
        <BlogCard key={blog._id} blog={blog} />
      })}
    </main>
  )
}

export default BlogList