function ziplist(list1, list2) {
  let result = [];
  for(let i =0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipTheEasyWay(list1,list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];
console.log(ziplist(list1, list2));
console.log(zipTheEasyWay(list1, list2));