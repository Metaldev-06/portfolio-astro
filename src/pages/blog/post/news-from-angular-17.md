---
layout: "../../../layouts/PostLayout.astro"
title: "Noticias de Angular 17"
author: "Fernando Diaz"
description: "La tan esperada actualización de Angular a la versión 17 trae emocionantes innovaciones que mejorarán la experiencia de desarrollo y el rendimiento."
tags: ["Angular"]
date: 2025-05-31
update_at: 2025-05-31
img: "https://res.cloudinary.com/du04fnqqz/image/upload/v1699833394/17_500_x_414_px_3153ee3c77.jpg"
---

## 1. Nueva Sintaxis

Desde su creación, Angular ha utilizado directivas estructurales como `*ngIf` o `*ngFor` para controlar el flujo. Dado que el flujo de control debe revisarse de todos modos para permitir la detección detallada de cambios planificada y eventualmente alejarse de ZoneJs, el equipo de Angular ha decidido ponerlo sobre una nueva base. El resultado es la nueva sintaxis llamada flujo de control, que se destaca claramente del marcado renderizado:

```typescript
@for (product of products(); track product.id) {
    <div class="card">
        <h2 class="card-title">{{product.productName}}</h2>
        […]
    </div>
}
@empty {
    <p class="text-lg">¡No se encontraron productos!</p>
}
```
Algo que vale la pena mencionar aquí es el nuevo bloque `@empty` que Angular representa cuando la colección iterada está vacía.

Aunque las señales impulsaron esta nueva sintaxis, no son un requisito para su uso. Los nuevos bloques de flujo de control también se pueden usar con variables clásicas o con observables junto con el pipe async.

La expresión de seguimiento ahora obligatoria permite a Angular identificar elementos individuales que se han movido dentro de la colección iterada. Esto permite a Angular (para ser más precisos: el nuevo algoritmo de reconciliación de Angular) reducir drásticamente el esfuerzo de renderizado y reutilizar nodos DOM existentes. Al iterar sobre colecciones de tipos primitivos, como matrices con números o cadenas, el seguimiento podría apuntar a la pseudovariable `$index` según la información del equipo de Angular, haciendo que el tiempo de ejecución sea hasta un 90% más rápido:


```typescript
@for (group of groups(); track $index) {
    <a (click)="groupSelected(group)">{{group}}</a>
    @if (!$last) { 
        <span class="mr-5 ml-5">|</span> 
    }
}
```

Además de `$index`, los otros valores bien conocidos de `*ngFor` también están disponibles a través de pseudovariables: `$count`, `$first`, `$last`,`$even`, `$odd`. Si es necesario, sus valores también se pueden almacenar en variables de plantilla:

```typescript
@for (group of groups(); track $index; let isLast = $last) {
    <a (click)="groupSelected(group)">{{group}}</a>
    @if (!isLast) { 
        <span class="mr-5 ml-5">|</span> 
    }
}
```

El nuevo `@if` simplifica la formulación de ramas else / else-if:

```typescript
@if (product().discountedPrice && product().discountMinCount) {
    […]
}
@else if (product().discountedPrice && !product().discountMinCount) {
    […]
}
@else {
    […]
}
```

Además, se pueden distinguir diferentes casos usando `@switch`:

```typescript
@switch (mode) {
    @case ('full') {
      […]
    }
    @case ('small') {
      […]
    }
    @default {
      […]
    }
}
```

A diferencia de `*ngSwitch` y `*ngSwitchCase`, la nueva sintaxis tiene seguridad de tipos. En el ejemplo mostrado arriba, los bloques individuales de `@case` deben tener valores de cadena, ya que la variable mode pasada a `@switch` también es una cadena.

La nueva sintaxis de flujo de control reduce la necesidad de usar directivas estructurales, que son poderosas pero a veces innecesariamente complejas. Sin embargo, el framework seguirá soportando directivas estructurales. Por un lado, hay algunos casos de uso válidos, y por otro lado, a pesar de las muchas innovaciones interesantes, el framework debe seguir siendo compatible hacia atrás.

## 2. Migración Automática a la Nueva Sintaxis de Flujo de Control

Si deseas migrar automáticamente el código de tu programa a la nueva sintaxis de flujo de control, ahora encontrarás un esquema para esto en el paquete `@angular/core`:

```powershell
ng g @angular/core:control-flow
```

## 3. Carga Diferida de Componentes

No todas las áreas de una página son igualmente importantes. La página de productos se centra principalmente en el propio producto, mientras que las sugerencias de productos similares son secundarias. Sin embargo, esto cambia repentinamente en cuanto el usuario desplaza las sugerencias de productos al área visible de la ventana del navegador, el llamado viewport.

Para aplicaciones web críticas en términos de rendimiento, como las tiendas en línea, tiene sentido posponer la carga de partes menos importantes de la página. Esto significa que los elementos realmente importantes están disponibles más rápidamente. Hasta ahora, quien quisiera implementar esta idea en Angular tenía que hacerlo manualmente. Angular 17 también simplifica drásticamente esta tarea con el nuevo bloque `@defer`:

```typescript
@defer (on viewport) {
    <app-recommentations [productGroup]="product().productGroup"/>
}
@placeholder {
    <app-ghost-products/>
}
```

El uso de `@defer` retrasa la carga de la parte de la página adjunta hasta que ocurra un evento específico. Como reemplazo, presenta el marcador de posición especificado en `@placeholder`. En la aplicación de demostración utilizada aquí, se presentan inicialmente elementos fantasma para las sugerencias de productos:

![ghost-element.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699868712/ghost_element_fd0b92fab0.png)

Una vez cargados, `@defer` reemplaza los elementos fantasma por las sugerencias reales:

![ghost-element-2.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699868814/ghost_element_2_eb3d471283.png)

En el ejemplo analizado, se utiliza el trigger `on viewport`. Ocurre una vez que el componente está a punto de entrar en el viewport. Además de este trigger, hay otras opciones:

- **on idle**: Cargar el bloque de forma diferida cuando el navegador no esté realizando ningún trabajo pesado.
- **on viewport**: Cargar el marcador de posición en el área visible de la página.
- **on viewport(<ref>)**: También permite especificar una referencia para un elemento ancla. Cuando el elemento ancla es visible, Angular cargará y renderizará el componente de forma diferida.
- **on interaction**: El usuario comienza a interactuar con el marcador de posición.
- **on interaction(<ref>)**:Permite iniciar la carga diferida cuando el usuario interactúa con un elemento en particular.
- **on hove y on hover(<ref>)**:  Activa la carga diferida cuando el usuario pasa el ratón sobre un elemento.
- **on immediate**: Inicia la carga diferida automáticamente, sin bloquear el navegador.
- **on timer(duration)**: Después de un cierto tiempo, por ejemplo, en el timer (5 s) para desencadenar la carga después de 5 segundos.
- **when condition**: 	Una vez que se cumple la condición especificada, por ejemplo, when (username! === null).

Por defecto, `on viewport`, on interaction y on hover requieren la especificación de un bloque `@placeholder`. Alternativamente, también pueden hacer referencia a otras partes de la página que se pueden referenciar utilizando una variable de plantilla:

```typescript
<h1 #recommentations>Recomendación</h1> 
@defer (on viewport(recommentations)) { 
    <app-recommentations […] />
} 
```

Además, `@defer` se puede instruir para precargar el componente en un momento anterior. Similar a la precarga de rutas, este enfoque asegura que los componentes estén disponibles tan pronto como se necesiten:


```typescript
@defer(on viewport; prefetch on immediate) { […] }
```

Además de `@placeholder`, `@defer` también ofrece otros dos bloques: `@loading` y `@error`. Angular muestra el primero mientras se carga el componente; el segundo se muestra en caso de error. Para evitar parpadeos, `@placeholder` y `@loading` se pueden configurar con una duración mínima de visualización. La propiedad minimum establece el valor deseado:

```typescript
@defer ( […] ) { 
    […] 
} 
@loading (after 150ms; minimum 150ms) { 
    […] 
} 
@placeholder (minimum 150ms) { 
    […] 
}
@error {
  [...]
}
```

La propiedad `@after` también especifica que el indicador de carga solo debe mostrarse si la carga toma más de 150 ms.

## 4. Vite y esbuild Predeterminados para Nuevos Proyectos

Originalmente, Angular CLI utilizaba webpack para generar bundles. Sin embargo, webpack enfrenta actualmente el desafío de herramientas más nuevas que son más fáciles de usar y mucho más rápidas. esbuild es una de esas herramientas que, con más de 20,000 descargas semanales, ha ganado notable popularidad.

El equipo de CLI ha estado trabajando en la integración de esbuild durante varias versiones. En Angular 16, esta integración ya se incluyó como una vista previa para desarrolladores. A partir de Angular 17, esta implementación es estable y se usa por defecto para nuevos proyectos de Angular a través del Generador de Aplicaciones descrito.

Para proyectos existentes, vale la pena considerar cambiar a esbuild. Para hacerlo, actualiza el builder en angular.json:

```typescript
"builder" : "@angular-devkit/build-angular:browser-esbuild"
```

En otras palabras, -esbuild debe agregarse al final. En la mayoría de los casos, `ng serve` y `ng build` deberían comportarse como de costumbre, pero mucho más rápido. El primero utiliza el servidor de desarrollo Vite para acelerar las cosas creando paquetes npm solo cuando es necesario. Además, el equipo de CLI integró varias optimizaciones de rendimiento adicionales.

La llamada `ng build` también se acelera significativamente mediante el uso de esbuild. A menudo se menciona un factor de 2 a 4 como el rango.

## 5. Renderizado en el Lado del Servidor (SSR) sin Esfuerzo con el Nuevo Constructor de Aplicaciones

El soporte de Renderizado en el Lado del Servidor (SSR) también se ha simplificado drásticamente con Angular 17. Al generar un nuevo proyecto con `ng new`, ahora está disponible un modificador `--ssr`. Si no se utiliza, el CLI pregunta si se debe configurar SSR:

![2023-11-13 07_24_46-.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699871158/2023_11_13_07_24_46_b29504374c.png)

Para habilitar SSR más tarde, solo necesitas agregar el paquete `@angular/ssr`:

```typescript
ng add @angular/ssr
```

El scope `@angular` deja claro que este paquete proviene directamente del equipo de Angular. Es el sucesor del proyecto comunitario Angular Universal. Para tener en cuenta directamente el SSR durante `ng build` y `ng serve`, el equipo de CLI ha proporcionado un nuevo constructor. Este llamado constructor de aplicaciones utiliza la integración de esbuild mencionada y crea paquetes que se pueden usar tanto en el navegador como en el servidor.

Una llamada `ng serve` también inicia un servidor de desarrollo, que se ejecuta en el lado del servidor y entrega los paquetes para la operación en el navegador. Una llamada `ng build --ssr` también se encarga de los paquetes para ambos mundos, además de construir un servidor simple basado en Node.js cuyo código fuente utiliza los esquemas mencionados anteriormente.

Si no puedes o no deseas ejecutar un servidor Node.js, puedes usar `ng build --prerender` para prerenderizar rutas individuales de la aplicación durante la compilación.

## Mejoras Futuras

Además de las innovaciones discutidas hasta ahora, Angular 17 también trae muchas otras características interesantes:

- El router ahora soporta la API de Transiciones de Vista. Esta API, ofrecida por algunos navegadores, permite animar transiciones con CSS, por ejemplo, al cambiar de una ruta a otra. Esta característica opcional debe habilitarse al configurar el router usando la función `withViewTransitions`:

![code.png](https://res.cloudinary.com/du04fnqqz/image/upload/v1699875995/code_2e4e6a478b.png)

- Las señales introducidas en la versión 16 como una vista previa para desarrolladores ahora son estables. Un cambio significativo desde la versión 16 es que las señales ahora están diseñadas para usarse con inmutables por defecto. Esto facilita a Angular descubrir dónde han cambiado las estructuras de datos gestionadas a través de señales. Para actualizar señales, puedes usar el método set, que asigna un nuevo valor, o el método update, que asigna el valor existente a uno nuevo. El método mutate ha sido eliminado, especialmente porque no encaja con la semántica de los inmutables.

Aunque las señales ya no están en vista previa para desarrolladores, el método `effect` sigue en vista previa para desarrolladores, ya que aún hay algunos casos que el equipo de Angular quiere examinar más de cerca

- Ahora hay un diagnóstico que emite una advertencia si se olvida la llamada getter al leer señales en plantillas (por ejemplo, `{{ products }}` en lugar de `{{ products() }}`).
- Las animaciones ahora se pueden cargar de forma diferida.
- Por defecto, Angular CLI genera componentes independientes, directivas independientes y pipes independientes. `ng new` también proporciona comenzar con un componente independiente por defecto. Este comportamiento se puede desactivar con el interruptor `--standalone false`.
- La declaración del interceptor `ng g` genera interceptores funcionales.

## Resumen

Con la versión 17, el Renacimiento de Angular avanza. La nueva sintaxis para el flujo de control simplifica la estructura de las plantillas. El nuevo algoritmo de reconciliación utilizado junto con el nuevo flujo de control mejora drásticamente el rendimiento de renderizado.

Gracias a la carga diferida, las áreas menos importantes de la página se pueden cargar más tarde, acelerando la carga inicial de la página. Al usar esbuild, las declaraciones `ng build` y `ng serve` se ejecutan notablemente más rápido. Además, el CLI ahora soporta directamente SSR y prerenderización.
