

function count_unique_num(arr){
    //arrayin ilk elemanını işaret edecek bir değişken al
    //arryin ikinci elemanını işaret edecek bir değişken al
    //swap için temp değişken al
    let i = 0,j = 1,temp = -99;
    //ikinci eleman son elemana gelene kadar çalışan döngü kur
        // eğer farklı eleman bulunmazsa ikinci indisi arttır
        // eğer farklı eleman bulunursa ilk indisi arttır
    
    while(j < arr.length){
        if(arr[i] === arr[j]){
            ++j;
        }
        else if(arr[i] !== arr[j]){
            ++i;
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            ++j;
        }
    
    }
    let unique_arr = [];
    for(val = 0; val<= i; ++val){
        unique_arr.push(arr[val]);       
    }
    return unique_arr;
}


count_unique_num([-2,-1,0,1,2,2,3,3,4,5,6]);