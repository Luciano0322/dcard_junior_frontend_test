# dcard_junior_frontend_test
## 考慮用到的套件 
- axios
- tailwind
- react-router-dom

## 流程與實作邏輯
- 先取query串接已知API()
- setting 列表呈現(基本arr.map())
- customer hook 邏輯 (infinte scroll)
- 抓取最後一筆資料的postId作為更多資料的參數
### customer hook(infinte scroll)
- useEffect()取值
- useState()處理res.data的arr.concat()

### cors 處理部分
- 依我的認知裡處理cors的做法通常是進到後端的資料夾去設定cors-origin
- 我有試著用 heroku url 加在url前面但仍得到 403 status code
- 我有開chrome設定先繞過Cors依據現有的資訊做列表的處理

