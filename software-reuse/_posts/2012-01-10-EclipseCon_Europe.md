---
layout: post
section-type: post
title: Develop Custom Java Code Analysis and Refactoring Tools
category: talk
tags: [ ]
---
_EclipseCon Europe 2012, Ludwigsburg_

Today, Java code makes up a large part of many software systems. To keep these systems maintainable, extendable and flexible in the long run, constant checking of the consistency of code and other artefacts is necessary. Individual coding guidelines need to be followed, anti-patterns need to be avoided and interfaces need to be used correctly. To save costs and to prevent mistakes during theses tasks, a high degree of automation is desirable.

JaMoPP - the Java Model Parser and Printer - addresses these challenges. JaMoPP automatically converts your Java code into an EMF-conformant model. This model can be processed by any EMF-based tool. Additionally, the model can be linked to other files and models for which EMF support exists. For example, BPMN or UML models, property or CSV files or data from databases.

With JaMoPP, custom tools for Java code analysis and refactoring can be defined. This way, inconsistencies in the code or between code and other artifacts can be recognised instantly and, if required, repaired automatically. JaMoPP is integrated with Eclipse to provide instant feedback to developers but can also be utilised outside of Eclipse to run checks and refactorings in build scripts or on continuous integration systems.

In this talk, we demonstrate the capabilities of JaMoPP and its integration with Eclipse and EMF on multiple practical examples.

<a href="http://www.eclipsecon.org/europe2012/sessions/develop-custom-java-code-analysis-and-refactoring-tools-jamopp.html">EclipseCon Europe 2012</a>
