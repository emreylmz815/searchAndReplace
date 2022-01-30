function replaced(str, before, after) {
    let index=str.indexOf(before);
    if(str[index]===str[index].toUpperCase()){
      after=after.charAt().toUpperCase()+after.slice(1)
    }else{
      after=after.charAt().toLowerCase()+after.slice(1)
    }
    str=str.replace(before,after)
    return str;
  }
  
  replaced("Let us get back to more Coding", "Coding", "algorithms");