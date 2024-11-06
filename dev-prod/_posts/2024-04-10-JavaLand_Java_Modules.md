---
layout: post
section-type: post
title: Combining Java Modules and Gradle for elegant project structures
category: talk
tags: [ ]
---

_JavaLand 2024, April 2024_

Modularization and Dependency Management are controversial topics for many Java developers. You can hardly get past them, but they often seem to create problems rather than solving them. In typical Java projects today, Modularization and Dependency Management are mainly done through the build tool of choice (usually Gradle or Maven).

Since Java 9, you can describe Modules and their relationships directly in the Java language by using the Java Module System (JPMS). At first glance, this does not make it any easier: What do I use if Java and build tool both want to be used to describe my Modules? Do I gain anything besides redundancy?

In this talk I present a project setup that combines the strengths of the Java Module System and Gradle. This leads to a cleaner and more maintainable Java project structure. This setup has been proven in practice as it was successfully introduced into multiple Java projects over the past two years.

<a href="https://meine.doag.org/events/javaland/2024/agenda/#agendaId.3790">Talk Website</a>
|
<a href="https://github.com/jjohannes/java-module-system">Slides and Example</a>
