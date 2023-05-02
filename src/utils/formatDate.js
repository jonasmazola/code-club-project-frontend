function formatarData(data){

return new Date(data).toLocaleDateString('pt-Br',{
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
})


    // const ano = dataAtual.getFullYear()
    // const mes = (dataAtual.getMonth()+1)
    // const dia = dataAtual.getDate()

    // return dia + ' / ' + (mes < 10 ? '0' + mes : mes) + ' / ' + ano
}

export default formatarData