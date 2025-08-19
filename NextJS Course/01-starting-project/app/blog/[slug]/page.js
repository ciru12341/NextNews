
export default function BlogPostPage({ params }) {
  return (
    <main>
      <p>Blog Post</p>
      <p>{params.slug}</p>
    </main>
  )
}
