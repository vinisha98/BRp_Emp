console.log("hello world");
console.log("Welcome to Employee Wage Computation Program on Master Branch");

                const present=1;
		const parttime=2;
		const salaryperhour=20;
        	var workinghours;
		let emp = Math.floor(Math.random() * 10) %  3;
		if(emp == present){
	    	    	console.log("Employee is present");
                	workinghours=8;
		}
		else if (emp == parttime){
			console.log("Employee is parttimer");
                	workinghours=4;
		}
		else{
			console.log("Employee is absent");
                	workinghours=0;
		}
        	const dailywage = (salaryperhour*workinghours);
       	 	console.log("salary will be ", dailywage);
