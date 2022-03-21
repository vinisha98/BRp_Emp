console.log("hello world");
console.log("Welcome to Employee Wage Computation Program on Master Branch");
		const present=1;
        const parttime=2;
        const salaryperhour=20;
        var employeehours = 0;
        var total = 0;
        var days = 0;
        var workinghours = 0;
        while(days<20)
        {
		let emp = Math.floor(Math.random() * 10) %  3;
		switch(emp){
            case 1:
                
                employeehours=8;
                break;
            case 2:
                employeehours=4;
                break;
            case 3:
                employeehours=0;
                break;
            default:
                console.log("condition doesent exist")
		}
        const dailywage = (salaryperhour*employeehours);
        total = (total + dailywage);
        days = (days+1);
        workinghours = (workinghours+employeehours);
    }
        console.log("Total salary will be ", total);
        console.log("Total working hours will be ", workinghours);
