import BlogCard from '../../components/BlogCard/BlogCard'

// css
import styles from './BlogList.module.css'

const BlogList = ({ blogs }) => {
  console.log('BlogList props:', blogs)
  return (
    <main className={styles.container}>
      
      {blogs.map(blog => {
        
        <BlogCard key={blog._id} blog={blog} />
      })}
    </main>
  )
}

export default BlogList