window.addEventListener('DOMContentLoaded', function(){
    let timer = document.querySelector('.timer'),
			newTimer = document.querySelector('.newTimer'),
			timeBox = document.querySelector('.timeBox'),
			btn = document.querySelectorAll('.click'),
			value = document.querySelector('[value]'),			
			text = document.querySelector('.text'),
			TM = document.querySelectorAll('.TM');
			newTimer.style.display = 'none';
			//timeBox.style.display = 'none';
			timerID = setInterval(time, 0.1); 
		function timerUp() {
			 setTimeout (start , 1000);
		 } 
		 function start() {
			text.textContent = 'hello';
		 }    
		 function timeDown() {
			 setTimeout (start2 , 1000);
		 }         
		 function start2() {
			 text.textContent = 'hi';
		 }                       
		 function time() {
			timer.value++;
			if (timer.value >= 1000) {
				timerUp();
			}
			if (timer.value >= 2000) {
				clearInterval(timerID);
				timeDown();
				newTimer.style.display = 'block';
				NT();
			}
		}
            function NT() {
			timerIP = setInterval(check , 0.1);
            function timerUpper() {
				setTimeout (starter , 1000);
			} 
			function starter() {
			   text.textContent = 'how are you';
			}
			function timeDowner() {
				setTimeout (starter2 , 1000);
			}         
			function starter2() {
				text.textContent = 'i am fine';
			}                        
			function check() {
				newTimer.value++;
				if (newTimer.value >= 1000) {
					timerUpper();
				}
				if (newTimer.value >= 2000) {					
					timeDowner();
					clearInterval(timerIP);
					timeBox.style.display = 'block';
					timerBox();
				}
			}
		}    
		    function timerBox() {
		    timerIaM = setInterval(timeIaM, 10); 
				function timeIaM() {
					timeBox.value--;
				if (timeBox.value <= 0) {
					clearInterval(timerIaM);
					timeBox.style.background = 'yellow';
					}
				}		
			}
		        btn[0].addEventListener('click', function(e){
					e.preventDefault();
					timer.value = 1;
				});
				btn[1].addEventListener('click', function(e){
					e.preventDefault();
					location.reload();
				});
                
				tmF = setInterval(forward, 10);
				function forward() {
					TM[0].value++;
					if (TM[0].value >= 4000) {
						clearInterval(tmF);
					}
				}

				tmB = setInterval(back, 10);
				function back() {
					TM[1].value--;
					if (TM[1].value <= 1) {
						clearInterval(tmB);
					}
				}

				if ( TM[0].value >= 4000 && TM[1].value <= 1 ) {
					
				}
});
