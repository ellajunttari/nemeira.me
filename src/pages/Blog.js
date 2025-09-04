import { useState, useEffect } from 'react';
import { marked } from 'marked';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/blog.md')
      .then(res => res.text())
      .then(text => {
        // Split posts on '---'
        const splitPosts = text.split(/^---$/m);
        const parsedPosts = splitPosts.map(raw => {
          // crude parse: first line as title, rest as content
          const [firstLine, ...rest] = raw.trim().split('\n');
          return {
            title: firstLine.replace(/^#\s*/, ''),
            html: marked(rest.join('\n'))
          };
        });
        setPosts(parsedPosts);
      });
  }, []);

   return (
    <>
      <h1>Blog page</h1>
      <div>
        {posts.map((post, idx) => (
          <article key={idx}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        ))}
      </div>
    </>
  );
}