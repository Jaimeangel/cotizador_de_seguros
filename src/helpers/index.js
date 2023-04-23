export const diferenciaYear=(year)=>{
    return new Date().getFullYear()-year;
}

export const marcaAuto=(marca)=>{
    let base=0

    switch(marca){
        case "1":
            base=1.30
            break;
        case "2":
            base=1.15
        case "3":
            base=1.05
        default:
            break;
    }

    return base;
}

export const typePlan=(type)=>{
    return type=== "1" ? 1.20 : 1.50
}

export const formatCash=(cash)=>{
    return cash.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
}