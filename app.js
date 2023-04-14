var array = ['milk', 'beer', 'beer', 'milk', 'milk']
for(i = 0; i < array.length; i++){
  if(array[i].includes('milk')){
    console.log('good')
    continue
  }
  else if(array[i].includes('beer')){
    console.log('bad')
  }
}