/* to change color */

	var doCoolStuff = function(){
		//change class name
		var currentClassName = document.getElementById('cool').className;

		if (currentClassName== 'cool'){
			document.getElementById('cool').className='cool red';
		}else{
			document.getElementById('cool').className='cool';
		}
		
	
}
	
	var car = {
			make:'vw',
			type:'polo',
			color:'red',
			isTurnedon:false,
			numberofWheels:4,
			seats:['seat1','seat2','seat3','seat4'],
			turnOn: function(){
				this.isTurnedon=true;
			},
            fly: function(){
                alert('moi');
            },
			switchCar: function (isOn){
				console.log('turn car'+isOn)
				if(isOn==true){
					this.isTurnedon=true;
				}else{
					this.isTurnedon=false;
				}
			}
		}

		console.log('hello');