function maxMinAvg(arr){
    var sum = 0
    var results = {
        min : arr[0],
        max : arr[0],
        average : 0
    }

for ( var i = 0; i < arr.length; i++){
    if  (results.max < arr[i]){
        results.max = arr[i]
    }
    if (results.min > arr[i]){
        results.min = arr[i]
    }
    sum += arr[i]
    results.average = sum / arr.length;
}return results

}
y =  maxMinAvg([1, -2, 9, 4])
console.log (y)