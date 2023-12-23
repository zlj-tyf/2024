#include<bits/stdc++.h>
using namespace std;
string name[]={"Xiaminglan","Zhangyao","Zhangshichao","Wangweiwei","Tanrihong","Wuyanming","Xujintao","Yaojiajia","Cuiyue","Liqianwen","Caiting","Chenxinhuan","Chenye","Gefang","Huangshan","Lirongfang","Liulinqing","Pengwei","Shenxudong","Shiliangren","Wangqi","Wangyuan","Xufeng","Zhangjin","Zhanglu","Zhengyijie","Zhouguodong","Caozhipeng","Chenquan","Shankun","Fusheng","Guandayong","Guoyunji","Liuxinyue","Shenxuhui","Zhouzhengwei","Changwenyi","Liangting","Wangjing","Zhangmengyun","Yaolu","Zhangguoxin","FunmanFung","YvooneChoo"};
int main(){
	int count=sizeof(name)/sizeof(name[0]);
	string cmd="powershell -Command \"notepad++ D:/Users/HESY/Documents/GitHub/2024/";
	string cmd2="index.html -n4 -c25\"";
	for(int i=0;i<count;i++){
		string end=cmd;
		end+=name[i];
		end+='/';
		end+=cmd2;
		cout<<end<<endl;
		system("dir");
		getchar();
		system(end.c_str());
		getchar();
	}
}
