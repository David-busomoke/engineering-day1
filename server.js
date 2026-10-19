const MaBoite = require('http');
const monserver = MaBoite.createServer((req,res) =>{
    if (req.url==='/favicon.ico'){
        res.end('');
            return;
    }
    const heure = new Date().toLocaleTimeString();
    console.log(heure+"un client a demander:" + req.url);
    if(req.url==='/DAVID'){
        res.end('C est DAVID, Le BAackend Engineer');
    }else{
        res.end('Bienvenus sur L accueil');
    }
})
monserver.listen(3000,()=>{
    console.log('Serveur de DaVID allumee sur 3000')
});