module.exports = function(application){
	application.get('/teste',(req,res)=>{
		res.render('xyz')
	})
	application.get('/', function(req, res){

		res.format({
			'text/html': ()=>{
				res.send('Bem vindo a sua app NodeJS!');
			},
			'application/json': ()=>{
				const retorno = {
					body:'Bem vindo ao seu app NodeJS!'
				}
				res.json(retorno)
			}
		})

		
	});
	application.post('/', function(req, res){
		const dados = req.body
		console.log(dados)
		res.format({
			'text/html': ()=>{
				res.send('Bem vindo a sua app NodeJS!');
			},
			'application/json': ()=>{
				const retorno = {
					body:dados
				}
				res.send(dados)
			}
		})
		
		

		
	});
}