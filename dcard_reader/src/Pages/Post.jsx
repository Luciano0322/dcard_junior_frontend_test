import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"

const Post = () => {
  const { postId } = useParams();
  console.log(postId);
  // useEffect(()=>{
  // 連接頁面另外的get req 取得細節資訊
  // }, [])
  return (
    <div>
      這裡可以擺細節頁面。
      <Link 
       to="/"
       className="
        inline-block 
        px-6 
        py-2.5
        bg-blue-600 
        text-white 
        font-medium 
        text-xs 
        leading-tight 
        uppercase 
        rounded-full 
        shadow-md 
        hover:bg-blue-700 
        hover:shadow-lg 
        focus:bg-blue-700 
        focus:shadow-lg 
        focus:outline-none 
        focus:ring-0 
        active:bg-blue-800 
        active:shadow-lg 
        transition 
        duration-150 
        ease-in-out"
      >
        返回
      </Link>
    </div>
  )
}

export default Post