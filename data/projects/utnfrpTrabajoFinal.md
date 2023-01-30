---
title: Inteligencia Artificial en Videojuegos
date: '05-31-2014' #mm-DD-yyyy
tags: ['proyecto']
draft: false
summary: Trabajo de investigación desarrollado como proyecto final de carrera universitaria técnica
---

Este es un trabajo de Investigación y Desarrollo que hice para poder recibirme de Técnico Superior de Programación en la Universidad Tecnológica Nacional en Paraná, Entre Ríos.

El objetivo de este trabajo fue indagar un poco en cómo los videojuegos realizaban acciones impredecibles y predecibles dependiendo de las acciones que realiza el jugador.

Desde pequeño me facinan los videojuegos y lo que más me llamó la atención es cómo hacen que los juegos se conviertan en un desafío para el jugador.

Algunos realizaban acciones de las cuales uno podía intuir que se realizarán y en otros era bastante dificil predecir el movimientos de los PNJ (o "Personajes No Jugables").

Empiezo investigando un poco como los juegos han ido mejorando la jugabilidad y qué metodologías usaban los programadores para hacer atractivo el juego (desde el punto de vista de la jugabilidad y la dificultad para superar desafíos).

Con esto como introducción comienzo a listar y describir (de forma muy escueta) los distintos algoritmos que se usan para simular la inteligencia articifial hasta llegar a las redes neuronales (las primeras aproximaciones de redes neuronales de aquel entonces).

Estos fueron algunos de los algoritmos que listo en el documento:

- Algoritmo Minimax

- Poda Alfa-Beta

- Poda de inutilidades

- Espera del reposo

- Búsqueda secundaria

- Uso de movimiento de libro

- Búsqueda Sesgada

- Minimax dependiente del adversario

- Técnica de bajada progresiva

- Continuación heurística

- Movimiento nulo

- Aspiration search

- Algoritmo negamax

- Algoritmo negaScout

- Algoritmo SSS

- Algoritmo Scout

- Algoritmo MTD(f)

Con todo este marco teórico (que pude realizar en aquel entonces) me quedaba ponerlo en práctica en un juego que tenía que desarrollar.

Lo primero que se me vino a la mente era desarrollar un juego de ajedrez. Pero luego de analizar las complejidades que me llevaría desarrollar el algoritmo y el poco conocimiento que tenía del tema (más el poco tiempo que tenía para desarrollarlo) desistí de desarrollarlo.
Luego pensé en desarrollar un juego de la oca, pero no tenía tiempo para hacer una interfaz gráfica descente. Asi que lo descarté rápidamente.
De repente y revisando los trabajos prácticos que pude hacer mientras cursaba la carrera, encontré que tenía las herramientas para desarrollar un Ta-Te-Ti! o Tres en Raya (como se lo llama en otros lugares).
Las reglas se juego son muy sencillas y el algoritmo que encajaba con este juego lo había estudiado y entendido bastante bien en su momento (Algoritmo Minimax).

El juego lo desarrollé en 1 mes y usé fue ![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
El profesor de ese entonces (Ernesto Zapata Icart) lo probó y quedó impresionado con el desarrollo y en cómo explicaba (hasta donde pude entender).

Más adelante haré en intento de actualizarlo.

Por lo pronto dejo el enlace donde hay un borrador del documento original y el archivo .exe portable para que pruebes el juego. Lo desarrollé al algoritmo para que calcule todas las posibilidades, hay una sola forma de ganarle al algoritmo.

[Enlace a Dropbox](https://www.dropbox.com/s/367h5ec4hngc2g3/TSP_UTN_proyecto_final.zip?dl=0)
