var evens = [0,2,4,6,8,10];

function doToElementsInArray(evens,callback){
  evens.forEach(callback);
}

function changeCompletely(element, index,array){
  array[index] = (Math.random()*100).toString() + '!!!'
}
