a) ¿Qué son los interceptores?  
Los interceptors són servicios que inspeccionan/modifican las peticiones entre servidor y aplicacion, en ambos sentidos.


b) Analiza  la  siguiente  cadena  de  operadores  de  RxJS,  explica  cada  uno  de  los  
pasos que se están desarrollando y explica en qué caso usarías este código: 
this.wines$ = this.searchSubject //De un listado de objetos.
	.startWith(this.searchTerm) //Se busca una condicion que se cumpla.
	.debounceTime(300) //Descarga los elementos que tarden menos de este tiempo en responder.
	.distinctUntilChanged() //Evita que se dupliquen los resultados.
	.merge(this.reloadProductsList) //Une todos los resultados en una sola lista.
	.switchMap((query) => //Elimina la observable anterior y genera una de nueva.
		this.wineService.getWine(this.searchTerm)); //Reclama nuevamente la lista de vinos.
Este cadena de operadores de RxJS nos permite filtro/buscar en una lista de vinos.
