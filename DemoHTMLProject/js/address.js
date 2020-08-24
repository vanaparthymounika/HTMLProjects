function SaveAndOrder()
	{
		
		var name = document.getElementById("name").value;
		var add = document.getElementById("add").value;
		var mobile1 = document.getElementById("mobile").value;
		
		if(name =='')
		{
			alert("please enter  name.");
		}
		else if(add=='')
		{
        	alert("enter the address ");
		}
		else if(mobile1=='')
		{
			alert("Enter mobile number.");
		}
		else if(mobile1.length != 10)
		{
			alert("Enter valid 10 digit mobile number.");
		}
		
		else
		{
	alert('Thank You for Address details & Order is successful');
       
	}
	}	

	function reset()
	{
		
		document.getElementById("name").value = '';
		document.getElementById("add").value = '';
		document.getElementById("mobile").value = '';
	}	