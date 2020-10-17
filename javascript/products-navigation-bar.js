let log = console.log;

function ShowSubCategories(element) {
    let categorias = document.getElementById(element).children;
    for (i = 0; i < categorias.length; i++) {
        if (categorias[i].id == "sub-link") {
            if (categorias[i].style.display == "") {
                categorias[i].style = "display: block";
            } else {
                categorias[i].style = "display:";
            }
        }
    }
}
function ShowCategoriesMobile()
{
    let barraCategorias = document.getElementById('link-barra-produtos');
    if(barraCategorias.style.display != "block")
    {
        barraCategorias.style = "display: block";
    }
    else{
        barraCategorias.style = "display:"
    }
}
function ShowOnly(id) {
    let elemento = document.getElementsByClassName('box-produtos');
    for (i = 0; i < elemento.length; i++) 
    {
        if (id != 'todos') 
        {
            if (elemento[i].id != id) 
            {
                elemento[i].style = "display: none"
            } 
            else if (elemento[i].id == id) 
            {
                elemento[i].style = "display: inline-block"
            }
        }
        else
        {
            elemento[i].style = "display: inline-block"
        }
    }
}
function EmptyCheck()
{
    let promo = document.getElementsByClassName("promo");
    let atual = document.getElementsByClassName("preco-atual");
    for(i = 0; i< promo.length; i++)
    {
        if(promo[i].innerHTML == "")
        {
            promo[i].style = "display: none";
            atual[i].style = "padding: .5vh 4.6vw;"
        }
    }
    let antigo = document.getElementsByClassName("preco-antigo");
    for(i = 0; i< antigo.length; i++)
    {
        if(antigo[i].innerHTML == "" || antigo[i].innerHTML == "&nbsp;")
        {
            antigo[i].style = "text-decoration: none";
        }
    }
}
EmptyCheck();