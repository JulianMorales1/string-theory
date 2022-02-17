

// xify

// function xify(str){
//     let strX = ''
//     for (let i of str){
//         strX += 'x'
//     }
//     return strX;
// }

// str1 = 'hello';
// xify(str1);

// str2 = 'hi there';
// xify(str2);

// console.log(xify(str1))
// console.log(xify(str2))


// yellingchars


// function yell(str){
//     let strX = ''
//     for (let i of str){
//         strX += i 
//         strX += '!'
//     }
//       return strX;
// }

// str1 = 'goodness';
// yell(str1);

// str2 = 'oh hello';
// yell(str2);

// console.log(yell(str1));
// console.log(yell(str2));



// indexedChars


// function index(str){
//     let strX = ''
//     let index = 0
//     for (let i of str){
//         strX += index
//         strX += i  
//         index = index + 1 
//     }
//    return strX;
// }
// str1 = 'hello';
// index(str1);

// str2 = 'bye';
// index(str2);

// console.log(index(str1));
// console.log(index(str2));


// str1 = 'hello';
// index(str1);

// str2 = 'bye';
// index(str2);

// console.log(str1);
// console.log(str2);


//numberedChars


// function numbered(str){
//     let strX = ''
//     let index = 0
//     for (let i of str){
//         index = index + 1 
//         strX += "(" + index + ")"
//         strX += (i)   
//     }
//     return strX;
// }

// str1 = 'hello';
// numbered(str1);

// str2 = 'bye';
// numbered(str2);

// console.log(numbered(str1));
// console.log(numbered(str2));


// exclaim


// function exclaim(str){
//     let strX = ''
    
//     for (let i of str){
//         if (i === '?' || i === '.'){
//             strX += '!' 
//         }    
//         else{
//             strX += i
//         }
//     }
//     return strX;
    
// }


// str1 = 'What are you doing? Are you a fool?';
// exclaim(str1);

// str2 = 'This is fine?';
// exclaim(str2);

// console.log(exclaim(str1));
// console.log(exclaim(str2));


//repeatIt


// function repeatIt(str, n) {
//     let solution = " ";
//     for (let i = 0; i < n; i++) {
//       solution += str;
//     }
//     return solution;
//   }

// console.log(repeatIt('beetlejuice', 3));
// console.log(repeatIt('oh hi!', 8));


// truncate


// function truncate(str) {
//         let solution = " ";
//         let ellipsis = '...'
//         for (let i = 0; i < str.length; i++) {
//             if (i === 15){             
//             solution += ellipsis;
//             break;
//         }
//         else {
//             solution += str[i];
//         }
//     }
//     return solution;
// }
//     console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
//     console.log(truncate("Well, that's just, like, your opinion man."));



// ciEmailify


// function ciEmailify(str){

//     let solution = " ";
//     let email = "@codeimmersives.com";
//     let period = ".";

//     for(let i = 0; i < str.length; i++){
//         if (str[i] === ' '){
//         solution += period
//             }
    
//     else {
//         solution += str[i]
//         }   
//     }
// return solution + email;
// }

// console.log(ciEmailify("colin jaffe"));
// console.log(ciEmailify("Anthony DeRosa"));


// reverse


// function reverse(str){
// 	let reversed = '';
//     for (let i of str){
//     	reversed = i + reversed;
//     }
// 	return reversed;
// }

// console.log(reverse('colin'));
// console.log(reverse('mesuara'));


// onlyVowels


// function getVowels(str) {
    
//     let onlyVowels = '';

//     for (let i of str){
//       if(i === 'a' || i === 'e'|| i === 'i'|| i === 'o'|| i === 'u' || i === 'A' || i === 'E'|| i === 'I'|| i === 'O'|| i === 'U'){  
//       onlyVowels += i
//         }
//     }
//      return onlyVowels;
// }

// console.log(getVowels('Colin Jaffe'));
// console.log(getVowels('quickly'));
// console.log(getVowels('Anthony DeRosa'));
