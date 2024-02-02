function findTheTriples(arr, queries)
 {
    const result = [];

    for (const query of queries) 
 {
        const [x, y, z] = query;
        let count = 0;

for (let i = 0; i < arr.length - 2; i++) 
{
if (arr[i] === x)
 {
for (let j = i + 1; j < arr.length - 1; j++) 
{
if (arr[j] === y)
 {
 for (let k = j + 1; k < arr.length; k++) 
 {
 if (arr[k] === z)
 {
                               
count++;
                          
                    }
                }
            }
         }
     }
 }

result.push(count);
}
 return result;
}


const arr1 = [1, 2, 3, 4, 5];
const queries1 = [[1, 2, 4], [2, 4, 3], [1, 1, 1]];
console.log(findTheTriples(arr1, queries1));

