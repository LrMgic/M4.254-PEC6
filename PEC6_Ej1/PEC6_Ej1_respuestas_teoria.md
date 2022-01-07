a) ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)
    - Componentes: Los componentes angulares son un subconjunto de directivas, básicamente una clase con un decorador @Component el cual comunica a angular que la clase es un componente. A diferencia de las directivas, los componentes siempre tienen una plantilla y solo se puede instanciar un componente por elemento en una plantilla.
    La función de los componentes es asociar el módulo con plantillas como por ejemplo HTML "selector", CSS "templateUrl", JS "styleUrls" entre otros.
    Se debe utilizar @Component para mantener el fichero .component.ts limpio y asociarlo con los demás elementos del módulo.

    - Servicios: Los servicios son proveedores de datos que mantienen la lógica de acceso a ellos, las operativas relacionadas con el proyecto y las acciones que se hacen con los datos dentro de una aplicación. 
    Los servicios son utilizados/consumidos por los componentes, que delegan en ellos la responsabilidad de acceder a la información y la realización de operaciones con los datos.


b) ¿Qué es la <<inyección de dependencias>>? 
    La inyección de Dependencias o (Dependency Injection o DI) es un patrón de diseño en el que una clase requiere instancias de una o más clases y en vez de generarlas dentro de su propio constructor, las recibe ya instanciadas por un mecanismo externo.
    Esta metodología implica que podemos requerir servicios u objetos que alguna de nuestras clases necesita, ya sean componentes, directivas o servicios, sin la necesidad de instanciar dichas dependencias nosotros mismos.

¿Para qué sirve el decorador @Injectable?
    El decorador @Injectabe comunica a angular que la clase es un inyectable, permitiendo que otros módulos puedan utilizarlo solo con llamarlo sin necesidad de escribir ese código.


c) Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:  
    • Observable: Los observables son declarativos de valores, pero no se ejecuta hasta que un consumidor se suscribe. El consumidor suscrito recibe notificaciones hasta que se completa la función o hasta que se da de baja.
    • Subscription: Los subscriptores reciben el resultado de la función observable y durante el proceso reciben mensajes de actualización del estado de ese valor.
    • Operators: Los operadores son básicamente funciones puras, que transforman la información en el flujo observable:
        - Crea nuevos observables basados en los observables actuales. 
        - Permite que cualquier código complejo se componga fácilmente de manera declarativa.
    • Subject: Dentro de RxJs, los subjects son un tipo de Observable especial, las cuales son Observables y Observers al mismo tiempo por lo que nos podemos subscribir a un Subject como a cualquier otro Observable, pero además disponen de los métodos next(), error() y complete() que tienen el Observer para emitir sus valores. Los subject nos permiten realizar diversas tareas como el "multicasting", compartir exactamente el mismo stream de datos con todas las subscripciones sin preocuparnos del tipo de Observable que estamos manejando. Se pueden llamar a través de:
        - Subject(): Mantiene el mismo valor tanto en las observabkes calientes como frías.
        - BehaviorSubject(Valor): Da un valor inicial.
        - ReplaySubject(X): Guarda la última cantidad de valores especificado.
    • Schedulers: Los Schedule establecen en los observable el tipo de task que este formara parte (microTask o macroTask), estableciendo el momento en el que tiene que actuar. En resumen, los Schedule controlan cuando se inicia una suscripción y cuando se publican las notificaciones.


d) ¿Cuál es la diferencia entre promesas y observables?
    Promesa:
    - Se resuelve en un valor único de forma asíncrona.
    - Son una representación de 1 valor futuro
    - Activarán la obtención de ese valor inmediatamente después de la creación.
    - Están diseñadas para representar AJAX llamadas.

    Observable:
    - Resuelve/emite múltiples valores asíncronos (a lo largo del tiempo).
    - Son una representación de una cantidad posiblemente infinita de valores.
    - Solo comenzarán a producir valores cuando se suscriba a ellos.
    - Están diseñados para representar cualquier cosa: eventos, datos de bases de datos, datos de llamadas ajax, (posiblemente infinitas) secuencias, etc.



e) ¿Cuál es la función de la tubería (pipe) async?
    La async pipe tiene las siguientes funciones:
    - Se suscribe a la Observable Promise devolviendo el último valor que ha emitido. 
    - Cuando se emite un nuevo valor, marca el componente para verificar si hay cambios. 
    - Cuando el componente se destruye se da de baja automáticamente para evitar posibles pérdidas de memoria. 
    - Cuando cambia la referencia de la expresión automáticamente cancela la suscripción a la antigua Observable Promise y se suscribe a la nueva.
