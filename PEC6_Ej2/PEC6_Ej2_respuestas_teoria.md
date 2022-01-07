a. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule? 
    Referencia: https://angular.io/guide/providers
    La diferencia entre definir un servicio usando el decorador @Injectable o @NgModule está en la forma en que la dependencia estará disponible. 
    Si se utiliza @Injectable, las dependencias están disponibles desde el nivel que se especifique (root, platform y any).
    Por lo contrario, usando @NgModule, el servicio esté disponible solo si el consumidor importa el @NgModule especificado.

b. ¿Qué otras opciones admiten el decorador @Injectable para la propiedad  ProvidedIn?  ¿Para  qué  sirven  las  otras  configuraciones?
    Referencia: https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb
    A partir de Angular 9 existen tres formas de definir el @Injectable:
    - root: Está disponible desde el nivel raíz de la aplicación.
    - platform: Está disponible para toda la plataforma. Este es más amplio que en "root", ya que estará disponible para las distintas aplicaciones que se encuentren en la plataforma.
    - any: Está disponible tanto en nivel raíz como para cada módulo, sin la necesidad de registrar el servicio en la lista de proveedores.
