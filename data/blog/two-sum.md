---
title: Resolviendo problemática laboral -> 'Two Sum'
date: '01-16-2023' #mm-DD-yyyy
tags: ['laboratorio', 'problemática', 'c#']
draft: false
summary: Busquemos la mejor manera de encontrar dos valores para llegar al resultado esperado
---

# Two Sum

Nivel: Fácil

Link: [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

## Problema

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Discusión

Nos mandan a la función (que tenemos que desarrollar) los siguientes parámetros:

1- Un arreglo de números

2- Un valor numérico

Con estos 2 parámetros debemos buscar, en el arreglo, dos números que, sumándolos entre sí, sumen el valor del segundo parámetro.

Lo primero que se nos viene a la mente es recorrer el arreglo y comenzar a sumar 2 valores hasta que encontremos la primer suma que nos de, como resultado el valor del segundo parámetro.

Otra idea es, ya que sabemos cual es el resultado de la suma que vamos a evaluar, tomar un valor del arreglo, restarselo al segundo parámetro y buscar el número que coincide con el resultado.

> El código de las dos ideas lo puedes consultar en el siguiente [repositorio](https://github.com/iiencinella/twoSum)

### Conclusión

Nada mal para arrancar, luego iremos mejorando la lógica. Hay muchas formas de resolver este problema (algunos mejores y otras no tan buenas).
