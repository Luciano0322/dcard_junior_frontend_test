import React, { useState, useRef, useCallback } from "react"
import { Link } from "react-router-dom"
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
  // console.log(posts);
  return (
    <div className="box-border bg-blue-900 py-2">
      <div className="container mx-auto ">
        {/* 上面為最後一筆資料的時候，後面則為一般情況 */}
        <div 
          className="accordion"
          id="postsList"
        >
          {posts.map((post, idx) => posts.length === idx + 1 ? (
            <div 
              // className="p-4 rounded-lg shadow-md text-center bg-slate-50 my-2"
              className="accordion-item bg-white border border-gray-200"
              key={post.id}
              ref={lastPostElRef}
              id={post.id}
            >
              <h3 
                className="font-semibold accordion-header mb-0"
                id={`heading${post.id}`}
              >
                <button
                  className="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${post.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${post.id}`}
                >
                  {post.title}
                </button>
              </h3>
              <div 
                id={`collapse${post.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${post.id}`}
              >
                <div className="accordion-body py-4 px-5">
                  {`${post.excerpt}...`}
                  <Link
                    to={`/post/${post.id}`}
                    className="
                      inline-block 
                      px-6 
                      py-2 
                      border-2 
                      border-blue-400 
                      text-blue-400 
                      font-medium 
                      text-xs 
                      leading-tight 
                      uppercase 
                      rounded-full 
                      hover:bg-black 
                      hover:bg-opacity-5 
                      focus:outline-none 
                      focus:ring-0 
                      transition 
                      duration-150 
                      ease-in-out
                    "
                  >
                    看更多
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              // className="p-4 rounded-lg shadow-md text-center bg-slate-50 my-2"
              className="accordion-item bg-white border border-gray-200"
              key={post.id}
              id={post.id}
            >
              <h3 
                className="font-semibold accordion-header mb-0"
                id={`heading${post.id}`}
              >
                <button
                  className="
                    accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base text-gray-800 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${post.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${post.id}`}
                >
                  {post.title}
                </button>
              </h3>
              <div 
                id={`collapse${post.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${post.id}`}
              >
                <div className="accordion-body py-4 px-5">
                  {`${post.excerpt}...`}
                  <Link
                    to={`/post/${post.id}`}
                    className="
                      inline-block 
                      px-6 
                      py-2 
                      border-2 
                      border-blue-400 
                      text-blue-400 
                      font-medium 
                      text-xs 
                      leading-tight 
                      uppercase 
                      rounded-full 
                      hover:bg-black 
                      hover:bg-opacity-5 
                      focus:outline-none 
                      focus:ring-0 
                      transition 
                      duration-150 
                      ease-in-out
                    "
                  >
                    看更多
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Err...'}</div>
      </div>
    </div>
  );
}

export default App;
