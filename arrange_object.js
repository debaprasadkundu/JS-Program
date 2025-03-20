const input = [
	{
  	key: 'Sample 1',
    data: "Data1"
  },
  	{
  	key: 'Sample 1',
    data: "Data1"
  },
   {
  	key: 'Sample 3',
    data: "Data3"
  },
  	{
  	key: 'Sample 1',
    data: "Data1"
  },
  	{
  	key: 'Sample 2',
    data: "Data3"
  },
 
  {
  	key: 'Sample 4',
    data: "Data4"
  },
  {
  	key: 'Sample 3',
    data: "Data3"
  }

]

function func(param) {
	let result = {};
  param.forEach(item => {
  	if(result[item.key]) {
    	result[item.key].push(item)
    } else {
    	result[item.key] = [item] 
    }
  
  })
console.log(result);

}

func(input);