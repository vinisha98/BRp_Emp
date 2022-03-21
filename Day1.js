console.log("hello world");
console.log("Welcome to Employee Wage Computation Program on Master Branch");
		const present=1;
		const parttime=2;
		const salaryperhour=20;
        	var workinghours;
		let emp = Math.floor(Math.random() * 10) %  3;
		switch(emp){
            		case 1:
	    	    		console.log("Employee is present");
                		workinghours=8;
                		break;
            		case 2:
                		console.log("Employee is parttimer");
                		workinghours=4;
                		break;
            		case 3:
	    	    		console.log("Employee is absent");
                		workinghours=0;
                		break;
            		default:
                		console.log("condition doesent exist")
		}
        	const dailywage = (salaryperhour*workinghours);
       	 	console.log("salary will be ", dailywage);
