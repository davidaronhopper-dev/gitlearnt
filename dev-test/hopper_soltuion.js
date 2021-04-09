let numbers = [0,2,10,1,2,3,5,7,2,7,8,9,9,6,3,999,6,5,7,1,4,8,2,6,3,7,4,5,6]; // Example Array
for (i = 0; i <= 1000; i++) {
  let num = 0;
  for (j = 0; j < numbers.length; j++){
  	let curr = numbers[j];  	
   	if (curr === i) {
    	num = num + 1;
    }
  }

  console.log(i + ": " + num);

}