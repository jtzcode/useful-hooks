let data = [
    {id: 1, name: 'test1'},
    {id: 2, name: 'test2'},
    {id: 3, name: 'test3'},
];

let promises = [];
let results = [];
let resolveResults = [];

data.map((item, index)=>{
    promises.push(new Promise((resolve)=>{
        setTimeout(()=>{
            results[index] = item.id;
            resolveResults.push(item.id);
            resolve(true);
        }, Math.random() * 1000);
    }));
});

Promise.all(promises).then((values)=>{
    console.log(results);
    console.log(resolveResults);
});