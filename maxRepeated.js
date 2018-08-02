let array = [2, 3, 4, 7, 2, 2, 3, 4, 4 ,9]
let currentMax = 0
let value = 0
array.sort()

for(let i=0; i< array.length; i++)
{
    let j = i+1
    while(j<array.length && array[i] == array[j]){
        j++
    }
    if(currentMax < (j - i))
    {
        currentMax = j
        value = array[i]
    }
    i = j-1
}
console.log(value)