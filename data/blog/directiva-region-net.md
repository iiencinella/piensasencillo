---
title: Directiva Region, qué es?
date: '08-01-2023' #mm-DD-yyyy
tags: ['c#', 'vb.Net', 'info', 'buenas practicas']
draft: false
summary: Hablemos un poco de las directivas que casi nadie usa
---

No nos ha pasado que estamos desarrollando (o viendo el código de otra persona) y nos encontramos con un código muy engorroso? o que seguimos la secuencia de ejecución (para encontrar el motivo de un BUG) y nos perdemos en el código? Los más experimentados no tienen este problema, pero para los nuevos es muy común que se desorienten (o se frusten en el peor de los casos).

![Código spaguetti](https://i0.wp.com/dcodingames.com/wp-content/uploads/2016/01/spaghetti.jpg?w=702&ssl=1)

Para solventar este inconveniente es que se proponen muchas buenas prácticas de programación (cada buena práctica se acomoda a distintos lenguajes de programación).

La que vengo a proponer (y que uso mucho en mi dia a día cuando programo en .Net) es el uso de las directivas `#region` y `#endregion`.
Estas no traen ninguna funcionalidad extra pero sí le da mucho sentido gramatical y orden al código que desarrollamos. Con estas directivas podemos agrupar un bloque de código y darle una etiqueta para que, cuando el código se lea en un futuro por vos u otras personas, se sepa, gramaticalmente, que función cumple ese bloque de código.

Sería algo así como poner comentarios de línea o multilínea antes de cada prodecimiento o en las primeras líneas del código.

Para declararlas nos basta con poner el nombre de la directiva, un espacio y el label (o descripción) que describe el bloque de código.

```c#
#region Descripción
  /*Bloque de código*/
#endregion
```

En el bloque de código podemos poner variables, eventos del formulario (completos), procedimientos (completos).

Un ejemplo podría ser este:

```c#
static bool AnagramRemoveArray(string? word1, string? word2)
{
  for (int i = 0; i < word1?.Length; i++)
  {
    int pos = word2.IndexOf(word1[i]);
    if (pos > -1) word2 = word2.Remove(pos, 1);
    else break;
  }

  return word2 == "";
}

static bool AnagramSort(string? word1, string? word2)
{
  word1 = String.Concat(word1.OrderBy(ch => ch));
  word2 = String.Concat(word2.OrderBy(ch => ch));

  return word1 == word2;
}

static bool AnagramNumeric(string? word1, string? word2)
{
  int addWord1 = 0;
  int addWord2 = 0;

  foreach (var character in word1)
  {
    addWord1 += (int)character;
  }

  foreach (var character in word2)
  {
    addWord2 += (int)character;
  }

  return addWord1 == addWord2;
}
```

Esta muy bien que cada procedimiento tenga un nombre descriptivo y claro (este código es de mi post de **Resolviendo un anagrama**). Pero, si más adelante necesitamos poner más funcionalidades y no queremos que los procedimientos se nos mezclen. podemos usar las directivas para agruparlos en un solo bloque semántico y así, cada vez que queremos buscar donde están los algoritmos para evaluar un anagrama, los tendremos todos juntos.

```c#
#region Proccess evaluating words
static bool AnagramRemoveArray(string? word1, string? word2)
{
  for (int i = 0; i < word1?.Length; i++)
  {
    int pos = word2.IndexOf(word1[i]);
    if (pos > -1) word2 = word2.Remove(pos, 1);
    else break;
  }

  return word2 == "";
}

static bool AnagramSort(string? word1, string? word2)
{
  word1 = String.Concat(word1.OrderBy(ch => ch));
  word2 = String.Concat(word2.OrderBy(ch => ch));

  return word1 == word2;
}

static bool AnagramNumeric(string? word1, string? word2)
{
  int addWord1 = 0;
  int addWord2 = 0;

  foreach (var character in word1)
  {
    addWord1 += (int)character;
  }

  foreach (var character in word2)
  {
    addWord2 += (int)character;
  }

  return addWord1 == addWord2;
}
#endregion
```
