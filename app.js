let arr = [1, 3, 2, 7, 6, 5, 4];

function bubbleSort(arr) {
    let i; // neighbor on left
    let j; // neighbor on right
    let temp; // temporary storage
    let len = arr.length;
    
    while(len--) {
		for(i = 0, j = 1; i < len; ++i, ++j)
            if(arr[i] > arr[j]) {
                temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j]= temp;
        }
    }
    
	return arr;
}

console.log(bubbleSort(arr));

