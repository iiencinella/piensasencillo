---
title: El Grinch quiere fastidiar la Navidad
date: '02-01-2023' #mm-DD-yyyy
tags: ['c#', 'adventJS']
draft: false
summary: Ejercicio lógico
---

# El Grinch quiere fastidiar la Navidad

Nivel: Medio
Link: [https://2021.adventjs.dev/challenges/03](https://2021.adventjs.dev/challenges/03)

## Problema

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves \{ y corchetes \[ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

```t
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
```

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

## Discusión

Este problema nos pide jugar un poco con los paréntesis. Lo que debemos hacer es buscar donde está el paréntesis de apertura "(" y buscar su compañera paréntesis de cierre ")". Si nos topamos con más de un paréntesis de apertura o de cierre, debemos contarlos y comprobar que tenemos la misma cantidad.
Pero!!! Tengamos en cuenta algunas cuestiones:

1- Debemos toparnos primero con un paréntesis de apertura para que la carta sea válida.

2- La cantidad de paréntesis de apertura y de cierre deben ser la misma.

3- Si nos topamos con un paréntesis de apertura, no debemos de entontrarnos con un paréntesis de cierre en la sicuiente posición de la carta, sino queda inválida la carta.

4- Si nos topamos con cualquier paréntesis que no sea "(" o ")", la carta se declara inválida.

Lo más sencillo será pasar por cada caracter de la carta (por medio de un bucle) e ir contando (teniendo en cuenta los puntos anteriores) los paréntesis de apertura (se pueden usar varios `if` o un `switch`)

## Conclusión

Lo importante aqui es pulir bien el uso de instrucciones simples para poder comprobar distintos estados puntuales de un problema.
Los desafíos de esta plataforma son muy buenas para iniciarnos en cualquier lenguaje. Aqui sólo trabaja con Javascript, pero se puede resolver en cualquier lenguaje.

El código fuente (hecho en C#) lo podes consultar [aqui](https://github.com/iiencinella/grinch_adventJS)

Muchas gracias Midu por permitirme publicar esto.
