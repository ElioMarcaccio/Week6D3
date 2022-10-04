function ageSort(users) {
  return users.sort((userA,userb)=>userA.age - userb.age)
}

function oddEvenSort(arr) {
  return arr.sort((a,b)=> {
    if((a+b)%2===0){
      return a-b
    }
    else if((a)%2===0){
return 1
    }
    return -1
  })
}

function validAnagrams(s, t) {
  return ([...s].sort().toString()===[...t].sort().toString())
}

function reverseBaseSort(arr) {
  return arr.sort((a,b)=>{
    let baseA = Math.floor(Math.log10(a));
    let baseB = Math.floor(Math.log10(b));
    if(baseA===baseB) return a-b
    else return baseB-baseA
  })
}

function frequencySort(arr) {
  //!!START

  const count = {};
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) count[arr[i]] = 0;
    count[arr[i]]++;
  }
  return arr.sort((a, b) => {
    if (count[a] === count[b]) return b - a;
    else if (count[a] > count[b]) return 1;
    else return -1;
  });
  //!!END
}


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
