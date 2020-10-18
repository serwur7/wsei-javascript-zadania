//Zadanie 1

    const tab = ["1", "2", "3"];
    console.log( tab[0] ); 
    console.log( tab[1] ); 
    console.log( tab[2] );     
    
    
//Zadanie 2

    //1
    console.log( tab[1] ); 
    console.log( tab[2] );    
    
    //2 
    console.log(tab[tab.length - 1]);
    
    //3
    for(let i=0;i<tab.length-1;i++)
    {
        console.log(tab[i]);
    }
    
    //4
    for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }
    
    //5
    
 
        for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
    }
});

    //6
    
    for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
    }
});

