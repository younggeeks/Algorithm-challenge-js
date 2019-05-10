function insertionSort(array){
    for (let i = 0; i < array.length; i++) {
       let j = i 
       while (j > 0 && array[j] < array[j-1]){
          //Swapping 
          let temp = array[j]
          array[j] = array[j-1]
          array[j-1] = temp
          j--

          /* 
          [ array[j], array[j-1] ] = [ array[j-1], array[j] ];
          */

       }
    }
    return array;
}

