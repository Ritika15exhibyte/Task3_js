function mergeStrings(s1, s2) 
{
    const count_s1 = Count(s1);
    const count_s2 = Count(s2);
    
    let result = " ";
    
    let i = 0, j = 0;
    

    while (i < s1.length && j < s2.length) 
    {
        const char1 = s1[i];
        const char2 = s2[j];
        
        const count1 = count_s1 .get(char1);
        const count2 = count_s2 .get(char2);
        
        if (count1 < count2 || (count1 === count2 && char1 < char2)) 
        {
            result += char1;
            i++;
        } 
        
        else
         {
            result += char2;
            j++;
        }
    }
    
    while (i < s1.length)
     {
        result += s1[i];
        i++;
    }
    
    while (j < s2.length) 
    {
        result += s2[j];
        j++;
    }
    
    return result;
}

function Count(str) {
    const charCount = new Map();
    
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    return charCount;
}


const Eg1 = "super";
const Eg2 = "tower";
const resultEg = mergeStrings(Eg1, Eg2);
console.log(resultEg); 
