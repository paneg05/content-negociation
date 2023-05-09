const http = require('http')

const opcoes = {
    hostname:'localhost',
    porta:80,
    path:'/',
    method:'post',
    headers: {
        'Accept':'text/html',
        'Content-type':'application/x-www-form-urlencoded'
    },
    
}
opcoes.method='get'



http.get(opcoes,(res)=>{
    const bufferCorpoResponse = []
    res.on('data',(junk)=>{
        bufferCorpoResponse.push(junk)
    })

    res.on('end',()=>{
       const corpoResponse = Buffer.concat(bufferCorpoResponse).toString()
       console.log(corpoResponse)
    })

    res.on('error',()=>{

    })
})

//content-type
let html = 'nome=josé'//x-www-form-urlencoded
let json = {nome:'josé'}

opcoes.method='post'
opcoes.headers.Accept = 'application/json'
opcoes.headers['Content-type'] = 'application/json'

console.log(opcoes)
const req = http.request(opcoes,(res)=>{
    const bufferCorpoResponse = []
    res.on('data',(junk)=>{
        bufferCorpoResponse.push(junk)
    })

    res.on('end',()=>{
       const corpoResponse = Buffer.concat(bufferCorpoResponse).toString()
       console.log(corpoResponse)
    })

    res.on('error',()=>{

    })
})
req.write(JSON.stringify(json))
req.end()
