#include<bits/stdc++.h>
using namespace std;
string name[]={/*"夏明岚","张瑶","张世超","王玮玮","谭日红","吴燕明","许锦涛","姚佳佳","崔越","李倩文","蔡婷","陈新幻","陈晔","葛芳","黄珊","李蓉芳","刘林青","彭伟","沈旭栋","时良仁","王琦","王媛","徐峰","张瑾","张露","郑轶洁","周国东","曹志鹏","陈全","单琨","傅盛","关大勇","郭耘骥","刘欣玥",*/"沈旭辉","周政威","常旻懿","梁婷","王敬","张梦云","姚璐","章果欣","冯宽文","朱舜蓝"};
int main(){
	int count=sizeof(name)/sizeof(name[0]);
	string cmd="powershell -Command \"notepad++ D:/Users/HESY/Documents/GitHub/2024/";
	string cmd2="index.html -n22 -c21\"";
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