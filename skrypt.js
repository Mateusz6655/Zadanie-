function oblicz()
{
	var wynik=document.getElementById('wynik');
	var ile=document.getElementById('ile').value;
	var poprawiny=document.getElementById('poprawiny').checked;
	var koszt=0;
	
	if(poprawiny)
	{
		koszt=(ile*100)+(30/100*(ile*100));
	}
	else
	{
		koszt=ile*100;
	}
	wynik.innerHTML='Koszt Twojego wesela to '+koszt+' złotych;
}
	