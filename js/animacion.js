(function(){
  /***
   * 
   */
    titulos = document.getElementsByClassName('titulo')

    for( i= 0; i< titulos.length;i++){
         titulo = titulos[i]
         parrafo = titulo.parentNode.getElementsByClassName("contenido")[0]
         if ( parrafo ){
             parrafo.style.display = "none"
         }
        if( titulo ){
            titulo.addEventListener('click',verContenido)
        }
    }
        

    function verContenido(){
        var tituloParent = this.parentNode
        var parrafo = tituloParent.getElementsByClassName("contenido")[0]
        if ( parrafo.style.display === "none"){
            parrafo.style.display = "inline-block"
        }else{
            parrafo.style.display = "none"
        }
    }

  })();