(function(){
  /***
   * 
   */
    articulos = document.getElementsByTagName("ARTICLE")    

    for( i= 0; i< articulos.length;i++){
         articulo = articulos[i]
         titulo = articulo.getElementsByClassName('titulo-articulo')[0]
         parrafo = articulo.getElementsByClassName("contenido")[0]
         if ( parrafo ){
             parrafo.style.display = "none"
         }
        if( titulo ){
            titulo.addEventListener('click',verContenido)
        }
    }
        

    function verContenido(){
        var articulo = this.parentNode
        var parrafo = articulo.getElementsByClassName("contenido")[0]
        if ( parrafo.style.display === "none"){
            parrafo.style.display = "inline-block"
        }else{
            parrafo.style.display = "none"
        }
    }

  })();