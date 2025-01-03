import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment, user }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard