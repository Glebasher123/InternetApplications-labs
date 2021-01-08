function Zadanie1()
{
	var a1 = new Number(document.form1.t1.value);
	var a2 = new Number(document.form1.t2.value);
	var a3 = new Number(document.form1.t3.value);
	var a4 = new Number(document.form1.t4.value);
	if(document.form1.t1.value > -1 && document.form1.t1.value < 11)
	{
		if(document.form1.t2.value > -1 && document.form1.t2.value < 11)
		{
			if(document.form1.t3.value > -1 && document.form1.t3.value < 11)
			{
				if(document.form1.t4.value > -1 && document.form1.t4.value < 11)
				{
					var b = (a1+a2+a3+a4)/4;
					document.form1.res.value=b.toFixed(1);
				}
				else 
				{
					alert("Оценка за экзамен по АУДО введена не верно");
					document.form1.t4.value = "";
				}
			}
			else
			{
				alert("Оценка за экзамен по БД введена не верно");
				document.form1.t3.value = "";
			}
		}
		else
		{
			alert("Оценка за экзамен по Экономике введена не верно");
			document.form1.t2.value = "";
		}
	}
	else
	{
		alert("Оценка за экзамен по КПиЯП введена не верно");
		document.form1.t1.value = "";
	}
}

function Zadanie2()
{
	var a = new Number(document.form1.t1.value);
	var b = new Number(document.form1.t2.value);
	var c = new Number(document.form1.t3.value);

	if(document.form1.t1.value > 0)
	{
		if(document.form1.t2.value > 0)
		{
			if(document.form1.t3.value > 0)
			{
				var p =  new Number(a + b + c);
				h = (Math.pow(p*(p-a)*(p-b)*(p-c),1/2))/a;
				document.form1.res.value=p.toFixed();
				document.form1.res1.value=h.toFixed(3);
			}
			else
			{
				alert("Одна из сторон отрицательная либо равна 0");
			}
		}
		else
		{
			alert("Одна из сторон отрицательная либо равна 0");
		}
	}
	else
	{
		alert("Одна из сторон отрицательная либо равна 0");
	}	
}

function Zadanie3()
{
	var a = document.form1.t1.value; 

	if (a.length == 3)
	{
		var q = Math.trunc(a % 10);
		var w = Math.trunc((a / 10) % 10);
		var e = Math.trunc(a /100);
		var sum = Math.trunc((q + w + e));
		document.form1.res.value = Math.trunc(e);
		document.form1.res1.value = Math.trunc(w);
    	document.form1.res2.value = Math.trunc(q);
    	document.form1.sum.value = Math.trunc(sum);
	}
	else 
	{
		alert("Число не трёхзначное");
	}
}

function Zadanie4()
{
	var V = document.form1.t1.value;
	var T1 = document.form1.t2.value;
	var T2 = document.form1.t3.value;
	var q = document.form1.t4.value;
	if(document.form1.t1.value > 0)
	{
		if(document.form1.t2.value > 0 && document.form1.t2.value > document.form1.t3.value)
		{
			if(document.form1.t3.value > 0)
			{
				var Q = q * V * (T1 - T2);
   				document.form1.res.value = Q.toFixed(2);
			}
			else
			{
				alert("Температура T1 меньше либо равно 0");
			}
		}
		else
		{
			alert("Температура T2 меньше или равно 0, либо T2 больше чем T1");
		}
	}
	else
	{
		alert("V меньше либо равно 0");
	}
}