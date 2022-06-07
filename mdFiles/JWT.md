json web token


公开的信息  

特殊的信息只有拥有jwt token的人能查到（用户的个人信息）


jwt.sign({payload(username..,id..)}, jwt_secret(如果密码不够严谨，会被别人sign token), options(token多久过期))


BackEnd 生成token
FrontEnd 抓取token （储存到localStorage里面）
FrontEnd 获取 token 特殊信息 

<get Token>

    const token = localStorage.getItem('token)

<get request> 

    headers:{
        Authorization: `Bearer ${token}`
    }


Check Auth Header (verify token)


jwt.verify(token, jwt_secret)









