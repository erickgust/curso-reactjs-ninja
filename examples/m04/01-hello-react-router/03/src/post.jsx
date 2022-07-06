import { useParams } from 'react-router-dom'

export function Post () {
  const { post } = useParams()

  return (
    <h1>Post {post}</h1>
  )
}
