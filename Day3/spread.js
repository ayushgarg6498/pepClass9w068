function merge(arr1,arr2)
{
    return [...arr1,...arr2];
}
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = merge(arr1,arr2);
console.log(arr3);


