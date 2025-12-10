let a=0,b=0,c=0;
const sec = [130,140,150,50,60,1888,200,300,400,500,3600,1000,2000,3000,4000,5000];
for (let i=0; i<sec.length;i++){
    if(sec[i]<=60)
	{
		a+=1;
	}
	else if(sec[i]<=1800)
	{
		b+=1;
	}
	else{
		c+=1;
	}
}
console.log("\n a value is : ",a,"\n b value is : ",b,'\n',"c value is : ",c);
