
/*

reversedArray() requires a simple array, and returns a copy of the provided array in reverse order

reversal is only carried out on the top-most dimension of an array. so e.g. if a 1-dimension array
is passed, it will be reversed and a simple 1-dimension array will be returned. if a multi-dimension
array is passed, the reversal is only carried out using the top dimension as the key. in a multi-
-dimension array, reversal isn't carried out on the child elements of the top-level array, they
are kept in place under their parent key.

this isn't meant to replace Javascript's intrinsic array reversal functionality, but it may be useful
when JS for whatever reason can't successfully reverse an array. this was borne from a real-life scenario
where Safari refused to reverse an array containing music data.

luke cohen - http://lukejournal.co.uk/

*/

var reversedArray = function(arrayToReverse) {

  var arrLen = arrayToReverse.length;
  var newArray = new Array();

  var j = (arrLen-1);

  for (var i = 0; i < arrLen; i++) {
    newArray[i] = "";
  }

  for (var i = 0; i < arrLen; i++) {

    newArray[j] = arrayToReverse[i];
    j--;

  }

  return newArray;

};
