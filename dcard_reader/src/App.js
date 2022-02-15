import React, { useState, useRef, useCallback } from "react"
import usePopPosts from './custHooks/usePopPosts'

function App() {
  const [query, setQuery] = useState(true)
  const [lastId, setLastId] = useState(null)
  const {posts, loading, error} = usePopPosts(query, lastId)
	const observer = useRef()
	const lastPostElRef = useCallback(node => {
		if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting) {
        // trcking scroll bottom event
        console.log(node.id);
        setLastId(node.id)
				
      }
    })
    if(node) observer.current.observe(node)
  }, [loading,])

  return (
    <div className="box-border bg-blue-900 py-2">
      <div className="container mx-auto ">
        {posts.map((post, idx) => posts.length === idx + 1 ? (
          <div 
          	className="p-4 rounded-lg shadow-md text-center bg-slate-50"
            key={post.id}
            ref={lastPostElRef}
            id={post.id}
          >
						<h3>{post.title}</h3>
          </div>
        ) : (
          <div
          	className="p-4 rounded-lg shadow-md text-center bg-slate-50"
            key={post.id}
            id={post.id}
          >
						<h3>{post.title}</h3>
          </div>
        ))}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Err...'}</div>
      </div>
    </div>
  );
}

export default App;
