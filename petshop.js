let pets = [{ nome:"batman" }, { nome: "costelinha" }];
const listarPets = () => {
    let conteudo = "";
    for( let pet of pets) {
        conteudo += `
        -----------------
        ${pet.nome}
        -----------------`;
    }
    return conteudo;
};

const adicionarPet = (novoPet) => {
    return pets.push(novoPet);
}

const buscarPet = (nome) => {
    let petsEncontrados = pets.filter((pet)=>{
        return pet.nome == nome;
    });
    return petsEncontrados;
}

module.exports = {listarPets, adicionarPet, buscarPet};