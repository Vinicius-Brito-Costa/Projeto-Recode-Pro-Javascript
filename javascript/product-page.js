let log = console.log;
function CepCheck(cep)
{
    log("função em desenvolvimento");
    if(cep.length > 6){
        document.getElementById('endereco').innerHTML = 'Rua Anhanhanha';
        document.getElementById('numero').innerHTML = '777';
        document.getElementById('estado').innerHTML = 'SP';
        document.getElementById('cidade').innerHTML = 'Guarulhos';    
    }
}