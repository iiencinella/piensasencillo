---
title: Add Two Number
date: '02-19-2023' #mm-DD-yyyy
tags: ['problemática', 'c-sharp']
draft: false
summary: Trabajemos un poco con listas enlazadas
---

# Add Two Number

Nivel: High (en la página lo propone como "Medium")

Link: [https://leetcode.com/problems/add-two-numbers/](https://leetcode.com/problems/add-two-numbers/)

![imagen](https://codeforwin.org/wp-content/uploads/2015/09/singly-linked-list-deletion-from-front.png)

## Problema

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

```
**Input**: l1=[2,4,3], l2=[5,6,4]
**Output**: [7,0,8]
**Explanation**: 342 + 465 = 807
```

## Discusión

Tenemos un problema en el cual el número está deconstruido en una lista enlazada desde el dígito de menor peso (la unidad) hasta el de mayor peso. En este ejercicio ya nos proporciona la clase de la lista enlazada:

```c#
public class ListNode {
  public int val;
  public ListNode next;

  public ListNode(int val=0, ListNode next=null) {
    this.val = val;
    this.next = next;
  }
}
```

Y la declaración del procedimiento que debe realizar la suma:

```c#
public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
  // Aquí colocaremos nuestro código
}
```

Antes de comenzar a pensar en la solución hablemos un poco sobre las listas enlazadas. Este tipo de listas es una versión primitica de las clases List que solemos usar para crear vectores. Lo que diferencia a la lista enlazada con el vector es que, para poder avanzar, debemos saber cual es la siguiente posición en memoria a la que tenemos que ir. El vector, por ejemplo, sabe en todo momento en qué parte de la memoria está alojado un dato de una casilla en particular.

Las listas enlazadas se usan mucho en la logística (queremos saber de donde viene y hacia donde va el envío), el microprocesador trabaja mucho con listas enlazadas; aunque ahora con los hilos de trabajo puede distribuir mas trafico pero al final termina realizando una lista de tareas a ejecutar.

En la vida cotidiana también solemos ver listas enlazadas, cuando hacemos la fila para que nos atiendan en un negocio (más que nada en uno pequeño) y no hay una ticketera para poder numerar a los clientes que van llegando al lugar, el comerciante pregunta ¿quién es el siguiente? y, automáticamente todos, comenzamos a mirarnos para identificar que persona llego antes al negocio y quien llego justo detrás de nosotros. Aqui estamos usando (de forma inconsciente) el mecanismo de la lista enlazada. Si el negocio tiene una ticketera, lo podríamos ver como una arreglo de clientes y cada posición del arreglo es el número que tiene el ticket que sacó el cliente al momento de llegar al negocio.

Una vez entendido (al menos tener una noción) de lo que es la lista enlazada, vayamos a discutir el problema.

Sabemos que a nuestro procedimiento le llegan 2 listas enlazadas y nosotros tenemos la tarea de sumar dígito a dígito los valores de estas listas. El problema nos dice que en cada posición de la lista solo puede haber 1 dígito, asi que tendremos que ver si la suma entre dígitos lleva acarreo o no.

Primero debemos recorrer ambas listas, verificar que no llegamos al final de las mismas y, en caso de que haya un dígito a evaluar, los extraemos para sumarlos entre sí.

La resultado de la suma de los dígitos de las listas la conseguimos de la siguiente manera: `resultado = acarreo + digitoLista1 + digitoLista2`.

Para saber si la suma lleva o no acarreo dividiremos el resultado de la suma anterior por 10. Y, como solo podemos poner 1 dígito en cada posición de la lista, vamos a sacar el módulo 10 del resultado.

Este nuevo resultado lo vamos a colocar en la nueva lista y nos posisionamos en la siguiente posición para sumar los siguientes dígitos.

El procedimiento es cíclico hasta que ya no tengamos más dígitos por sumar de las 2 listas que nos mandaron.

> El código lo puedes consultar en el siguiente [repositorio](https://github.com/iiencinella/acarreaNoAcarrea)

## Conclusión

La última vez que me trabajé con listas enlazadas fue en la universidad. Recuerdo que rendí el examen final para aprobar la materia de Programación y me pedían llevar un listado de compras (si no me falla la memoria) como si fuera una lista enlazada y que, cuando compraba un objeto de la lista, debía sacarlo de la misma. Si era difícil trabajar con listas imaginate tener que hacer este examen completamente en papel!.

Al final terminé aprobando ese examen y, hasta este momento, no me tocó trabajar con listas enlazadas. En aquel tiempo, no tenía tantos dramas ya que los algoritmos de listas enlazadas las escribía en una pizarra, luego la codificaba y compilaba en el segundo o tercer intento.

En fin, conocer como trabajan las listas enlazadas ayuda mucho a entender un poco cómo trabajan los vectores y listas que nos proporcionan los distintos lengujes de programación.

Saludos.
