function Zadanie1()
{
	var x = document.form1.t1.value;
	var y = document.form1.t2.value;

	if(x > 0 && y > 0)
	{
		if (x > y) 
    	{ 
    		document.form1.res.value = "Первый человек тяжелее";
    	}
    	else
   	 	{
    		document.form1.res.value = "Второй человек тяжелее";
    	}
	}
	else
	{
		document.form1.res.value = "Людей нет тут =)";
	}

	document.form1.res.value=y.toFixed(2);
}

function Zadanie2()
{
	var q = document.form1.t1.value;
	var w = document.form1.t2.value;
	var e = document.form1.t3.value;
	var maxGrowth = 0;
	var numberOfPeople = 0;
	if (q > maxGrowth) 
	{ 	
		maxGrowth = q;  
		numberOfPeople = 1;
	}
	if (w > maxGrowth) 
	{	
		maxGrowth = w;
		numberOfPeople = 2;
	}
	if (e > maxGrowth)
	{
		maxGrowth = e;
		numberOfPeople = 3;
	}
	document.form1.res.value=numberOfPeople;
}

function Zadanie3()
{
	var x = document.form1.t1.value;
	var num = 0;
	if(document.form1.t1.value.length == 3)
	{
		while(x > 0)
		{
			num = x % 10;
			if(num % 2 == 1)
			{
				document.form1.res.value="Да";
				break;
			}
			else 
			{ 
				document.form1.res.value="Нет"; 
			}
			x = x / 10;
		}
	}
	else
	{
		alert("Введённое число, не соответствует трёхзначному числу");
	}
}

function Zadanie4()
{
	var x = document.form1.t1.value;	
	var timeOfYear = "";
	switch(x)
	{
		case '1': 
			timeOfYear = "Январь, время года Зима";
			break;
		case '2': 
			timeOfYear = "Февраль, время года Зима";
			break;
		case '3': 
			timeOfYear = "Март, время года Весна";
			break;
		case '4': 
			timeOfYear = "Апрель, время года Весна";
			break;
		case '5': 
			timeOfYear = "Май, время года Весна";
			break;
		case '6': 
			timeOfYear = "Июнь, время года Лето";
			break;
		case '7': 
			timeOfYear = "Июль, время года Лето";
			break;
		case '8': 
			timeOfYear = "Август, время года Лето";
			break;
		case '9': 
			timeOfYear = "Сентябрь, время года Осень";
			break;
		case '10': 
			timeOfYear = "Октябрь, время года Осень";
			break;
		case '11': 
			timeOfYear = "Ноябрь, время года Осень";
			break;
		case '12': 
			timeOfYear = "Декабрь, время года Зима";
			break;
		default: 
			timeOfYear = "Введите от 1 до 12";
			break;
	}
	document.form1.res.value = timeOfYear;
}

