#include<bits/stdc++.h>
using namespace std;
string name[]={/*"�����","����","������","������","̷�պ�","������","�����","Ҧ�Ѽ�","��Խ","��ٻ��","����","���»�","����","��","��ɺ","���ط�","������","��ΰ","����","ʱ����","����","����","���","���","��¶","֣���","�ܹ���","��־��","��ȫ","����","��ʢ","�ش���","������","�����h",*/"�����","������","���Fܲ","����","����","������","Ҧ�","�¹���","�����","��˴��"};
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