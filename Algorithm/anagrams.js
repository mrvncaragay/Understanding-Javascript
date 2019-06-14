

const validAnagram = (str1, str2) => {

   if  (str1.length === 0 && str2.length === 0) {
       return false;
   }

   if ( str1.length !== str2.length  ) {
       return false;
   }

   const objCounter1 = {}
   const objCounter2 = {}

   for( let char of str1 ) {
       objCounter1[char] = ( objCounter1[char] || 0 ) + 1;
   }

   for( let char of str2 ) {
        objCounter2[char] = ( objCounter2[char] || 0 ) + 1;
   }


   for( let key in objCounter1 ) {

       if ( !(objCounter1[key] === objCounter2[key]) ) {
            return false;
       }
   }

   return true;
} 


console.log(validAnagram('awesome', 'awesom'))

// '', '' true
// 'aaz', 'zza' false
// 'anagram', 'nagaram' true
// 'rat, 'car'
// 'awesome', awesom ' false
// 'qwerty', 'qeywrt' true
//  'texttwisttime', 'timetwisttext' true