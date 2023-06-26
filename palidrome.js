function palindrome(str) {
  const regex=/[A-Z0-9]/gi
  let matches = str.toLowerCase().match(regex);
  console.log(matches);
  if (matches.length%2 == 0){
    for( var i = 0; i < matches.length/2; i++)
    if(matches[i]!==matches[matches.length - (1+i)]){
      return false
    }
  }
  else{
    for( var i = 0; i < matches.length/2 - 1; i++)
      if(matches[i]!==matches[matches.length - (1+i)]){
        return false
      }
  }
  return true;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");