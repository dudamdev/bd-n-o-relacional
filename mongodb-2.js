// Documentos vinculados

// Criando um novo banco de dados e atividando-o
// use revenda;
use("revenda");

// Inserindo três modelos de carro
db.modelos.insertMany([
    {
        nome: "Opala",
        marca: "Chevrolet",
    },
    {
        nome: "Fusca",
        marca: "Volkswagen",
    },
    {
        nome: "Corcel",
        marca: "Ford",
    }
]);

db.modelos.find();

// Inserindo um Fusca
db.veiculos.insertOne({
    modelo_id: ObjectId("64ed1ca6580f66686ec24746"), // Fusca
    cor: "Azul",
    ano: 1978,
    placa: "ABC-1234",
    preco: 5000
});

// Inserindo um Corcel e um Opala
db.veiculos.insertMany([
    {
        modelo_id: ObjectId("64ed1ca6580f66686ec24747"), // Corcel
        cor: "Vermelho",
        ano: 1975,
        placa: "DEF-9876",
        preco: 6200
    },
    {
        modelo_id: ObjectId("64ed1ca6580f66686ec24745"), // Opala
        cor: "Preto",
        ano: 1981,
        placa: "GHI-3333",
        preco: 7500
    }
]);

// Inserindo mais um Fusca e um Corcel
db.veiculos.insertMany([
    {
        modelo_id: ObjectId("64ed1ca6580f66686ec24746"), // Fusca
        cor: "Preto",
        ano: 1969,
        placa: "KLM-001",
        preco: 8100
    },
    {
        modelo_id: ObjectId("64ed1ca6580f66686ec24747"), // Corcel
        cor: "Laranja",
        ano: 1976,
        placa: "QRS-9000",
        preco: 5800
    }
]);

// Aggregations
// Add Stage

// Stage 1 - $lookup
/*
 * from: The target collection.
 * localField: The local join field.
 * foreignField: The target join field.
 * as: The name for the results.
 * pipeline: Optional pipeline to run on the foreign collection.
 * let: Optional variables to use in the pipeline field stages.
 */
/*
{
    from: "modelos",
    localField: "modelo_id",
    foreignField: "_id",
    as: "modelo"
}
*/

// Stage 2 - $addField





