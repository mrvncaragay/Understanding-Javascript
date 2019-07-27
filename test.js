const a = { name: 'Marv', age: 31, error: false }


for(const key in a) {
	let value = a[key];

	if( typeof value === 'boolean')
	{
		console.log('found boolean');
	}

	console.log(a[key])
}