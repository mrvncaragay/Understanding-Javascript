console.log('Inside Test');

let data = {
    inc: [{id: 0, value: 1},{id: 1, value: 2}],
    exp: []
}

console.log(data['inc'].findIndex(function(item){
    return item.id === 0;
}));
