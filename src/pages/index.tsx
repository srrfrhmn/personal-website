import { FullName, AnimatedWave, Contact } from '@/lib/info'
import type { GetStaticProps } from 'next'
import Link from 'next/link'
import CareerSection from '@/components/CareerSection'
import GallerySection from '@/components/GallerySection'
import PostDate from '@/components/PostDate'
import { getAllPosts, type PostSummary } from '@/lib/posts'

export const getStaticProps: GetStaticProps<{ posts: PostSummary[] }> = async () => ({
  props: { posts: getAllPosts() },
})

export default function Home({ posts }: { posts: PostSummary[] }) {
  return (
    <main id="main-content" className="main-cont single-page">
      <section id="me" className="landing" aria-labelledby="me-title">
      <div className="landing-intro">
      <h1 id="me-title" className="default-font text-4xl tracking-tighter flex items-center">
        <FullName />
        <AnimatedWave />
      </h1>
      <Contact />
      </div>
      </section>
      <CareerSection />
      <GallerySection />
      <section id="blog" className="portfolio-section" aria-labelledby="blog-title">
        <h2 id="blog-title" className="text-4xl tracking-tighter">my blog</h2>
        <hr className="page-divider" />
        <ul className="blog-list">
          {posts.map((post) => (
            <li key={post.slug} className="blog-list-row">
              <h3 className="text-xl tracking-tight"><Link className="blog-post-link" href={`/blog/${post.slug}`}>{post.title}</Link></h3>
              <p className="blog-date"><PostDate date={post.date} /></p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
