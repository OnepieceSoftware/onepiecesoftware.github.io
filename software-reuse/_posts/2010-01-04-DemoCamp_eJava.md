---
layout: post
section-type: post
title: Clean separation of hand-written methods in EMF models with eJava
category: talk
tags: [ ]
---
_Eclipse DemoCamp Helios, Dresden_

Jeder Entwickler der das Eclipse Modelling Framework (EMF) nutzt, war sicher schon gezwungen Methoden in dem von EMF generierten Code zu ändern. Leider wird so der generierte Code mit handgeschriebenem vermischt. Hier bietet eJava eine sauberere Lösung. Einfach gesagt integriert eJava handgeschriebene Methoden in Ecore Modelle. Man legt einfach. eJava Dateien an, die den Code enthalten, den man normalerweise in den generierten EMF Code schreibt. eJava integriert automatisch alle Methoden in die GenModels, so dass die normale EMF Codegenerierung benutzt werden kann, der resultierende Code nicht verändert werden muss und trotzdem eigene Methodenrümpfe möglich sind. So muss man z.b. den generierten Code nicht mehr in die Versionskontrolle einchecken oder darauf achten 'generated NOT' einzufügen. Natürlich prüft der eJava Editor schon beim Editieren, ob alle Typen da sind und ähnliches.

<a href="https://wiki.eclipse.org/Eclipse_DemoCamps_Helios_2010/Dresden">Eclipse DemoCamp Helios, Dresden</a>
