import { useEffect, useState } from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

// 已知兩種query popular=true && before=postId

export default function usePopPosts(query, beforeId) {
  const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])

  // useEffect(() => {
	// 
  // }, [])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      // url: 'https://cors-anywhere.herokuapp.com/https://www.dcard.tw/v2/posts', // 此方法會得到403 code
      url: 'https://www.dcard.tw/v2/posts',
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:3000',
      },
      method: 'GET',
      params: beforeId ? { 
        popular: query, 
    		before: beforeId 
      } : {
				popular: query
      },
      // do not continue try
      cancelToken: new axios.CancelToken(c => cancel = c)
      
    }).then(res => {
      setPosts(prevPosts => {
				return [...new Set([...prevPosts, ...res.data])]
      })
      setLoading(false)
    }).catch(err => {
      if(axios.isCancel(err)) return
      setError(true)
    })
    return () => cancel()
  }, [query, beforeId])
  return { loading, error, posts };
}
