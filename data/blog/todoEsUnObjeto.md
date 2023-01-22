---
title: Todo es un objeto
date: '01-22-2023' #mm-DD-yyyy
tags: ['fundamentos']
draft: false
summary: Lo que vamos a hacer es pensar en la programación orientada a objetos (POO)
---

Los lenguajes de progamación, a lo largo de los años, tenían como objetivo abstraer las cosas y acciones que realizamos todos los días para poder facilitarnos la vida.

Según Alan Kay hay 5 cuestiones básicas que caracterizan a la POO basado en el lenguaje de programación Smalltalk (el primer lenguaje de programación orientado a objetos que tuvo éxito).

1- **Todo es un objeto**: Pensar que todo objeto se puede abstraer en variables, almacenar datos, hacer peticiones. Casi todo lo que tenemos a nuestro alrededor se puede abstraer en un objeto dentro de un programa.

2- **Un programa es un cúmulo de objetos que se dicen entre sí lo que tienen que hacer mediante el envío de mensajes**: Los objetos, dentro del programa pueden comunicarse entre sí para poder intercambiar datos o peticiones para solicitar realizar una acción dentro del programa.

3- **Cada objeto tiene su propia memoria, constituida por otros objetos**: Uno puede crear objetos que contengan otros más pequeños. Un ejemplo común son los arreglos. El arreglo es un objeto contenedor en el que puedes guardar otros objetos como cadena de texto, números u otros arreglos.

4- **Todo objeto es de algún tipo**: Cada objeto es representado por una clase.

5- **Todos los objetos de determinado tipo pueden recibir los mismos mensajes**: Si tenemos variables del tipo cadena de texto, todos pueden hacer las mismas acciones (como devolver una parte de la cadena, buscar un caracter dentro de la cadena, compararlo con otra cadena, etc). Esta capacidad de poder realizar distintas tareas se llama _suplantación_ y es uno de los conceptos más potentes de la programación orientada a objetos.

Todos los objetos tienen una interfaz donde le podemos describir sus características (variables) y las acciones que realiza (funcionalidades).

Por ejemplo podemos hacer la interfaz de un auto:

Un auto tiene, por ejemplo, ruedas, motor, color, vidrio, puerta, etc.Estas características serán las variables de nuestra interfaz. Y como acciones podemos poner _encender el motor_, _controlar el nivel de combustible_, _moverse hacia adelante_, etc.

| Auto               |
| ------------------ |
| rueda              |
| motor              |
| color              |
| vidrio             |
| puerta             |
|                    |
| encenderMotor()    |
| nivelCombustible() |
| moverse()          |

Espero que te haya guiado con este resumen sobre el tema. Luego iré publicando más cosas para ir complementando este tema.

Saludos.
