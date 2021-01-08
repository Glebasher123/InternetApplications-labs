function Zadanie1()
{
    var tbody = document.querySelector("Table");

    var row = document.createElement("TR");
    tbody.appendChild(row);

    var td1;

    var b = document.form1.t2.value;

    for(a = 1; a <= b; a++)
    {
    	td1 = document.createElement("TH");
    	row.appendChild(td1);
    	var i = Math.pow(a+2,3);
    	td1.textContent = i.toFixed();
	}
}

function Zadanie2()
{
	var A = new Number(document.form1.t1.value);
	var Percent = new Number(document.form1.t2.value / 100);
	var C = new Number(document.form1.t3.value);
    var Sum;
	var countYear = 0;

	while(A<C)
	{
        A = A + (A * Percent);
		countYear++;
        /*Console.log(A);*/
	}
	document.form1.res.value=countYear;
}

function Zadanie3()
{
    var sum = 0;
    for(var a = 10; a <= 99; a++)
    {
        if(a % 2 == 1)
        {
            sum = sum + a;
            document.form1.res.value = document.form1.res.value + sum + "||";
        }
    }
}

function Zadanie4()
{
    var first = 0;
    var second = 0;
    var third = 0;
	for(var a = 100; a <= 999; a++)
    {
        third = a % 10;
        second = a / 10 % 10;
        first = a / 100;
        var result = (Math.pow(first,2) + Math.pow(second,2)) - Math.pow(third,2);

        if(result > 99 && result < 1000)
        {
            document.form1.res.value = document.form1.res.value + Math.trunc(result) + "||";
        }
    }
}

function Zadanie5()
{
	var N = document.form1.t1.value;
    for(var i = 1; i < N; i++)
    {
        if(N % i == 0)
        {
            document.form1.res.value = document.form1.res.value + i + "||";
        }
    }
}