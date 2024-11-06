---
layout: post
section-type: post
title: Das Java-Modul-System klug mit Gradle kombinieren
category: talk
tags: [ ]
---

_Java Forum Stuttgart 2024, July 2024_

Modularisierung und Dependencymanagement sind für viele Java-Entwickler kontroverse Themen. Zwar kommt man kaum an ihnen vorbei, aber sie scheinen oft mehr Probleme zu erzeugen als zu lösen. In typischen Java-Projekten werden Modularisierung und Dependencymanagement heutzutage hauptsächlich über das Build-Tool der Wahl (meist Gradle oder Maven) durchgeführt.

Seit Java 9 können Module und deren Beziehungen direkt in Java beschrieben werden, wenn man das Java-Modul-System (JPMS) verwenden. Das macht es auf den ersten Blick nicht einfacher: Was nutze ich, wenn ich sowohl Java als auch das Build-Tool zur Beschreibung meiner Module verwenden kann? Bekomme ich, außer Redundanz, überhaupt einen Mehrwert?

In diesem Vortrag stelle ich ein Projekt-Setup vor, das die Stärken vom Java-Modul-System und Gradle vereint. Dies führt zu einer saubereren und wartbareren Java-Projektstruktur. Dieses Setup hat sich in mehreren Projekten in der Praxis bewährt.

<a href="https://www.java-forum-stuttgart.de/vortraege/das-java-modul-system-klug-mit-gradle-kombinieren/">Talk Website</a>
|
<a href="https://github.com/jjohannes/java-module-system">Slides and Example</a>
