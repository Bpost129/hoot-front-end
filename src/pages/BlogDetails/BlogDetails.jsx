import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

import * as blogService from '../../services/blogService'

import Loading from '../../components/Loading/Loading'
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

// css
import styles from './BlogDetails.module.css'
import Icon from '../../components/Icon/Icon'

const BlogDetails = (props) => {
  const [blog, setBlog] = useState(null)
  const { blogId } = useParams()

  useEffect(() => {
    const fetchBlog = async () => {
      const blogData = await blogService.show(blogId)
      setBlog(blogData)
    }
    fetchBlog()
  }, [blogId])

  // console.log('Blog State:', blog)
  if (!blog) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{blog.category.toUpperCase()}</h3>
          <h1>{blog.title}</h1>
          <span>
            <AuthorInfo content={blog} />

            {blog.author._id === props.user.profile &&
              <>
                <NavLink to='/blogs/edit' state={blog}>
                  <Icon category='Edit' />
                </NavLink>
                <button>
                  <Icon category='Trash' />
                </button>
              </>
            }

          </span>
        </header>
        <p>{blog.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>    
    </main>
  )
}

export default BlogDetails