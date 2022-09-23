function insertion() {
    let inputArr = [5, 2, 4, 6, 1, 3];
    console.log(inputArr);
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i - 1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j + 1] = inputArr[j];
                j--;
            }
            inputArr[j + 1] = current;
        }
    console.log(inputArr);
}


function selection() {
    let inputArr = [5, 2, 4, 6, 1, 3];
    console.log(inputArr);
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    console.log(inputArr);
}

function bubble() {
    let inputArr = [5, 2, 4, 6, 1, 3];
    console.log(inputArr);
    let n = inputArr.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            // Comparing and swapping the elements
            if(inputArr[j] > inputArr[j+1]){
                let t = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = t;
            }
        }
    }
    console.log(inputArr);
}



function quick() {
    let inputArr = [5, 2, 4, 6, 1, 3];
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    stack = [];
    
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);
    
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0){
        
        // Extracting the top unsorted subarray
    	end = stack.pop();
        start = stack.pop();
        
        pivotIndex = partition(arr, start, end);
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    console.log(inputArr)
}