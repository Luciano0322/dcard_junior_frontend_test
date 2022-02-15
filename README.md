# dcard_junior_frontend_test
## 考慮用到的套件 
- axios
- tailwind
- react-router-dom

## 流程與實作邏輯
- 先取query串接已知API()
- setting 列表呈現(基本arr.map())
- customer hook 邏輯 (infinte scroll)
### customer hook(infinte scroll)
- useEffect()取值
- useState()處理res.data的arr.concat()

### cors quest
- should setting by backend server side
- I've try to use heroku url to pass the cros but get 403 status code

