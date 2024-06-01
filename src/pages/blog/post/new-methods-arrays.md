---
layout: "../../../layouts/PostLayout.astro"
title: "Nuevos Métodos de Array en JavaScript Explicados"
author: "Fernando Diaz"
description: "¡Novedades en JavaScript! Llegan 4 nuevos métodos de Array: toReversed(), toSorted(), toSpliced() y with()."
tags: ["Strapi"]
date: 2025-05-31
update_at: 2025-05-31
img: "https://res.cloudinary.com/du04fnqqz/image/upload/v1699912980/17_500_x_414_px_2_df173cffd2.jpg"
---

¿Qué hace que estos nuevos métodos sean diferentes de los que ya conocemos como `reverse`, `sort` y `splice`?

Bueno, **devuelven un nuevo array y no modifican el original**.

Veamos algunos ejemplos para entenderlo mejor.

### toReversed()

El método `toReversed()` nos permite invertir el orden de un array. Devuelve un nuevo array con los elementos invertidos y no modifica el original.

```typescript
// Usando el nuevo método .toReversed()
const nums = [1, 2, 3];
nums.toReversed() // => [3, 2, 1] ¡Nuevo Array!
nums // => [1, 2, 3] ¡✅ No modificó el original!
```

Nota la diferencia con el método actual `reverse()`:

```typescript
// Usando el método clásico .reverse()
const nums = [1, 2, 3];
nums.reverse() // -> [3, 2, 1]
nums // => [3, 2, 1] ¡🛑 Modificó el original!
```

### toSorted()

El método `toSorted()` nos permite ordenar un array. Devuelve un nuevo array con los elementos ordenados y no modifica el original. Similar al método clásico `sort()`, podemos pasar una función de comparación para ordenar los elementos.

```typescript
// Usando el nuevo método .toSorted()
const nums = [3, 2, 1];
nums.toSorted() // => [1, 2, 3] ¡Nuevo Array!
nums // => [3, 2, 1] ¡✅ No modificó el original!
```

Ve la diferencia con el método actual `sort()`:

```typescript
// Usando el método clásico .sort()
const nums = [3, 2, 1];
nums.sort() // -> [1, 2, 3]
nums // => [1, 2, 3] ¡🛑 Modificó el original!
```

### toSpliced()

El método `toSpliced()` nos permite eliminar o reemplazar elementos en un array. Devuelve un nuevo array con los elementos eliminados/reemplazados y no modifica el original. Similar al método clásico `splice()`, podemos pasar un índice, una cantidad de elementos a eliminar y, opcionalmente, los elementos para reemplazar.

```typescript
// Usando el nuevo método .toSpliced()
const nums = [1, 2, 3];
// elimina 1 elemento a partir del índice 1:
nums.toSpliced(1, 1) // => [1, 3] ¡Nuevo Array!
nums // => [1, 2, 3] ¡✅ No modificó el original!
```

Ve la diferencia con el método actual `splice()`:

```typescript
// Usando el método clásico .splice()
const nums = [1, 2, 3];
// Elimina 1 elemento a partir del índice 1:
nums.splice(1, 1) // -> [2]
nums // => [1, 3] ¡🛑 Modificó el original!
```

### with()

Este método es muy interesante ya que reemplaza la asignación de un índice en un array. Devuelve un nuevo array con el nuevo elemento asignado en la posición indicada y no modifica el original.

```typescript
const array = ['🐼', '🐻‍❄️', '🐻'];
const indexToChange = 1;

array.with(indexToChange, '🐶') // => ['🐼', '🐶', '🐻']
array // => ['🐼', '🐻‍❄️', '🐻']
```

Ve la diferencia con la asignación de índice tradicional:

```typescript
// La asignación normal modifica el original
const array = ['🐼', '🐻‍❄️', '🐻'];
array[1] = '🐶';
array // => ['🐼', '🐶', '🐻']
```

Muchas veces, creamos una copia de un array para modificarlo y luego devolverlo. Con estos nuevos métodos, podemos hacerlo más fácilmente sin tener que crear una copia del array.

## ¿Cómo puedo usarlos hoy?

Aunque estos métodos no son soportados por los navegadores actualmente (Chrome los tendrá en la versión 110 y en Firefox están implementados pero detrás de una bandera), puedes usar un Polyfill para utilizarlos hoy.

De hecho, **core-js ya los soporta**, por lo que si transpilas tu código JavaScript con Babel, debería agregar los polyfills necesarios para que tu código funcione correctamente según la configuración de tu navegador.

## Una mirada al futuro de JavaScript

Estos nuevos métodos son un adelanto de lo que nos espera en el futuro de JavaScript. En la próxima especificación de ECMAScript, tendremos estos nuevos métodos, pero solo son una vista previa de lo que vendrá después.

Estos nuevos métodos allanan el camino para la llegada de Records y Tuples, dos nuevos tipos de datos primitivos en JavaScript que son inmutables y nos permitirán trabajar con datos estructurados, similares a objetos y arrays, de una manera más simple y predecible.