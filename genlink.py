import requests,json
 
url_json = 'https://api.xiaomark.com/v1/link/create'
data={
    "apikey":'638c9345e8ec4260d90dbcbc2decfb30',
    "origin_url":'https://zlj-tyf.github.io/2024/夏明岚'
}
data_json = json.dumps(data)   #dumps：将python对象解码为json数据
r_json = requests.post(url=url_json,data=data_json)
print(r_json)
print(r_json.text)
print(r_json.content)

#apikey	
#origin_url	string	是	跳转链接，必须是以 http:// 或者 https:// 开头的链接或应用跳转链接
"""
{
    "apikey": "361f534e9897e75af4206ea820365fde",
    "domain": "interval.im",
    "origin_url": "https://xiaomark.com/",
    "group_sid": "w7ho5te8",
    "report": true,
    "webhook": true,
    "webhook_scene": "test"
}
"""
#data_json = json.dumps(params)
#requests.post(url,headers = headers,data = data_json)
