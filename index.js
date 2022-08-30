const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}


const myEach = function  (collection, callback){
if(Array.isArray(collection )){
    for(let i=0; i< collection.length; i++){
        console.log(collection[i])
    }
}
else if(typeof(collection)=== 'object'){
console.log(Object.keys(collection),Object.entries(collection))
}
    return collection;
}

function  myMap (collection, callback){
    const newCollection = collectionChecker(collection);
    let newArray = new Array();
  
    for (let index = 0; index < newCollection.length; index++) {
      newArray.push(callback(newCollection[index]));
    }
  
    return newArray;
  };
  
function myReduce(collection, callback, acc){
    let newCollection = collectionChecker(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  };

function  myFind(collection, predicate){
const newCollection = collectionChecker(collection);
    for (let index = 0; index < newCollection.length; index++) {
      if (predicate(newCollection[index])) return newCollection[index];
    }
    return undefined;
  };

  function myFilter(collection, predicate){
    const newCollection = collectionChecker(collection);
    const newArr = new Array();
    for (let index = 0; index < newCollection.length; index++) {
      if (predicate(newCollection[index])) newArr.push(newCollection[index]);
      else{
        
    }
    }
   
    return undefined;
  };


function mySize(collection){
    let size=0;
    if(typeof collection==="object"){
    size=Object.keys(collection).length
    }
    else{
    size=collection.length;
    }
    console.log(size)
    return size;
}



  
function myFirst(array,n=0){
let element=[];
if(n != 0){
 element = array.slice(0, n);
return element}
else{
    element = array[0];
    element;
}

    return element;
}

function myLast(array,n=0){
    let element = [];
    if(n != 0){
        element = array.slice(array.length - n, array.length)
}
else{
    element =array[array.length -1]
    }
    return element;
}


function myFlatten(array,bool=false) {
    let anArray = [];
 if(bool === true){ 
    for (const key in array) {
    if (typeof array[key] === 'object') {
      for (const key1 in array[key]) {
        anArray.push(array[key][key1])
          }
        } 
    else {
        anArray.push(array[key])
      }
     }
     
 }
  else{
      for (const key in array){
        if (typeof array[key] === 'object') {
            for (const key2 in array[key]) {
                if(typeof array[key][key2]=== 'object'){
                    for(const key3 in array[key][key2]){
                        if(typeof array[key][key2][key3] === 'object'){
                            for(const key4 in array[key][key2][key3]){
     anArray.push(array[key][key2][key3][key4])
 console.log(anArray)
 return anArray;
              }
        
      }
}
}
        anArray.push(array[key][key2])
      }
    }
    else {
        anArray.push(array[key])
       }
       
        }
  }

console.log(anArray)
  return anArray;
}



 
  // Object Functions
 
  
function myKeys(object){
const anArray = [];
for(const key in object){
    anArray.push(key)
}
    return anArray;
} 

  function myValues(object){
    const anArray = [];
    for(const key in object){
        anArray.push(object[key])
    }

    return anArray;
}

function collectionChecker(collection){
    if(collection instanceof Array){
        collection.slice()
    }
    else{
        Object.values(collection)
    }
}