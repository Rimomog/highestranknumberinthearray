function highestRank(arr){
    //Your Code logic should written here
      let counter = {}
      for( let i = 0; i < arr.length; i++){
        let value = arr[i];
     counter[value] = counter[value] ? counter[value] +1 : 1;
      }
      const values = Object.values(counter);
      const max = Math.max(...values);
      let maxValues = [];
      for(key in counter){
        if(counter[key] === max){
            maxValues.push(key);
          }
        }
      return Number(Math.max(...maxValues))
      }
    
    