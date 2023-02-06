---
title: ¿Acarrear o no Acarrear?
date: '01-21-2023' #mm-DD-yyyy
tags: ['laboratorio', 'problemática', 'c-sharp']
draft: false
summary: Desarrollemos la solución a un error de diseño de compuertas lógicas
---

# ¿Acarrear o no Acarrear?

Nivel: Medio

Link: [https://www.beecrowd.com.br/judge/es/problems/view/1026](https://www.beecrowd.com.br/judge/es/problems/view/1026)

## Problema

![imagen](https://resources.beecrowd.com.br/gallery/images/problems/UOJ_1026.png)
Mofiz estuvo trabajando duro durante su curso de Lógica Digital, pero cuando se le pidió implementar un sumador de 32 bits para su examen de laboratorio, hizo un error en la etapa de diseño. Luego de revisar su diseño por media hora, encontró su error!! Estaba haciendo una suma de bits, pero el bit del acarreo siempre daba como salida cero. Por lo tanto,

4 = 00000000 00000000 00000000 00000100

+6 = 00000000 00000000 00000000 00000110

---

2 = 00000000 00000000 00000000 00000010

Es bueno que él haya encontrado su error, pero era muy tarde. Considerando su esfuerzo durante el curso, el instructor le dió una oportunidad mas. Mofiz tiene que hacer un programa eficiente que tome 2 decimales de 32 bits sin signo como entrada, y produzca un numero decimal de 32 bits sin signo como salida, sumando de la misma manera en la que su circuito lo hace.

| Ejemplos de Entrada | Ejemplos de Salida |
| ------------------- | ------------------ |
| 4 6                 | 2                  |
| 6 9                 | 15                 |

## Discusión 🤨

Tenemos la siguiente situación, debemos de hacer un programa que replique el comportamiento del circuito lógico que diseño el alumno.
El diagrama lo que hace es una suma bit a bit de números enteros pero sin tener en cuenta el acarreo (es el mecanismo usado para cuando la suma da más de un dígito, el dígito sobrante pasa a la siguiente posición de la suma).

Hay que tener en cuenta los siguientes pasos:
1- Ingresar al programa los números a evaluar con un espacio de separación.
2- Convertir cada número en su equivalente decimal.
3- Sumar los dos números bit a bit sin el acarreo.
4- Convertir a decimal el número resultando de la suma.
5- Mostrar en pantalla el resultado.

### Conversión de número decimal a binario

![convertDecBin](https://cual-es-mi-ip.online/wp-content/uploads/conversor-numerico-decimal-a-binario-manual2-img.png)

La conversión de número decimal a binario tiene un mecanismo sencillo de implementar. Tenemos el número decimal y lo dividimos por 2, el resto de la división (que puede ser '1' o '0'). El resultado de la división lo volvemos a dividir por 2. Este mecanismo lo repetimos hasta que el resultado de la división sea '0' o '1'.
Para generar el número decimal, tomamos el resultado de la última división y tomamos los restos de las divisiones (comenzando desde la última división hasta la primera).
El conjunto de 0 y 1 nos dará el valor en binario del número decimal.

### Conversión de número binario a decimal

![convertBinDec](https://cual-es-mi-ip.online/wp-content/uploads/conversor-numerico-binario-a-decimal-ejemplo2-img.png)

La conversión de binario a decimal es sencillo. A cada posición del número decimal lo vamos a multiplicar por 10 elevado a la potencia correspondiente a la posición en la que se encuentra en número binario.
El resultado de cada multiplicación las vamos a sumar, el resultado final es el número decimal correspondiente al número binario.

### Código

Estos serían los algoritmos que se me ocurrieron para este problema:

```c#
string ConvertToBinary(int number)
{
  if (number > 1)
  {
    int num = number / 2;
    ConvertToBinary(num);
  }
  result = result + (number % 2).ToString();
  return result;
}
```

Esta es una función recursiva, quiere decir que esta función se llama a si misma hasta que resuelve el problema.

```c#
string SumMofiz(string num1, string num2)
{
  result = "";
  for (int pos = 0; pos < 32; pos++)
  {
    result += (num1[pos] != num2[pos]) ? "1" : "0";
  }

  return result;
}
```

Como la suma es posición por posición. Se me ocurrió hacer una comparación "or excluyente" (lo que hago es comparar el valor de cada posisión, si ambas posiciones tienen el mismo valor, retorno el valor 0, sino retorno el valor 1).

```c#
double ConvertToDecimal(string number)
{
  double numDecimal = 0;
  int pos = 0;
  int maxPos = number.Length - 1;

  foreach (char character in number)
  {
    numDecimal += int.Parse(character.ToString()) * Math.Pow(2, (maxPos - pos));
    pos++;
  }

  return numDecimal;
}
```

Recorro cada posición y le voy aplicando la multiplicación y sumo el resultado al valor que ya tengo calculado.

> El código lo puedes consultar en el siguiente [repositorio](https://github.com/iiencinella/acarreaNoAcarrea)

### Conclusión

A simple vista parecía sencillo pero me llevó un tiempo resolverlo. Más que nada para desarrollar las conversiones (hace mucho tiempo que no pensaba en este tipo de soluciones).
Hacía mucho tiempo que no me entretenía con una solución.

Saludos.
