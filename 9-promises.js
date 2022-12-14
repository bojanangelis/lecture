const url = ''

fetch(url)
.then(function(res){
    // ne ni treba tuka da proveruvame dali ima error
    return res.json()
}).then(function(json){
    return ({
        importantData: json.importantData,
    })
}).then(function(data){
    console.log(data)
})
.catch(function(err){
    // tuka go pecatime errorot i ne sme vo callbackhell!
    console.error(err)
})