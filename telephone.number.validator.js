function telephoneCheck(str) {

  let regex1 = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
  let regex2 = /\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;
  let regex3 = /\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
  let regex4 = /[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;
  let regex5 = /[0-9]{3}[0-9]{3}[0-9]{4}/;
  let regex6 = /1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;
  let regex7 = /1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}/;
  let regex8 = /1\s[0-9]{3}-[0-9]{3}-[0-9]{4}/;
  let regex9 = /1\([0-9]{3}\)[0-9]{3}-[0-9]{4}/;
  

  let arr1 = str.match(regex1);
  let arr2 = str.match(regex2);
  let arr3 = str.match(regex3);
  let arr4 = str.match(regex4);
  let arr5 = str.match(regex5);
  let arr6 = str.match(regex6);
  let arr7 = str.match(regex7);
  let arr8 = str.match(regex8);
  let arr9 = str.match(regex9);
  
 
  if(arr1 != null && arr1[0] === str){
    return true;
  } else if(arr2 != null && arr2[0] === str){
    return true;
  } else if(arr3 != null && arr3[0] === str){
    return true;
  } else if(arr4 != null && arr4[0] === str){
    return true;
  } else if(arr5 != null && arr5[0] === str){
    return true;
  } else if(arr6 != null && arr6[0] === str){
    return true;
  } else if(arr7 != null && arr7[0] === str){
    return true;
  }  else if(arr8 != null && arr8[0] === str){
    return true;
  } else if(arr9 != null && arr9[0] === str){
    return true;
  } 
    
    
    return false; 
  

            
}


console.log(telephoneCheck("1 555-555-5555"));
