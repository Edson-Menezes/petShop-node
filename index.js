const http = require("http");
const url = require("url");
const petshop = require("./petshop");

const server = http.createServer((req, res) => {
res.writeHead(200, { "Content-Type": "text/plan; charset=UTF-8"});

let urlCompleta  = url.parse(req.url, true);
let queryString = urlCompleta.query;
let rota = urlCompleta.pathname;


switch(rota){
    case "/pets":
        res.write("listando pets:");
        const pets = petshop.listarPets();
        res.write(pets);
        if (pets.length > 0){
            res.write(pets);
        } else {
            res.write("nenhum pet cadastrado");
        }
        break;


    case "/pets/add":
        let novoPet =queryString;
        if(petshop.adicionarPet(novoPet)){
            res.write(`${novoPet.nome} foi adicionado com sucesso!`);
        }   else {
            res.write("ops, alguma coisa deu errado!")
            }
        break;


    case "/pets/buscar":
        let petsEncontrados = petshop.buscarPet(queryString.nome);
        if(petsEncontrados > 0) {
            res.write(`encontramos ${petsEncontrados.length} pets com o nome ${queryString.nome}`);
        } else {
            res.write("ops, não encontramos nunhum pet com esse nome!")
        }
        break;

    default:
        res.write('** Bem vindes ao PetShop DH **\n')
}

res.end();

}).listen(3000, "localhost", () => {
    console.log("servidor foi iniciado!");
});