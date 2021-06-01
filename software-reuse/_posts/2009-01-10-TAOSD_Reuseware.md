---
layout: post
section-type: post
title: On Language-Independent Model Modularisation
category: research paper
tags: [ ]
---
_In Transactions on Aspect-Oriented Software Development VI, volume 5560 of LNCS, Springer_
<br/>with: _Florian Heidenreich, Jakob Henriksson, and Steffen Zschaler_

As model-driven software development covers additional parts of the
development process, the complexity of software models increases as well. At
the same time, however, many modelling languages do not provide adequate support
for modularising models. For this reason there has been an increasing interest
in the topic of model modularisation, often under the heading of aspect-oriented
modelling (AOM). The approaches range from techniques that closely
mimic concepts from aspect-oriented programming (AOP), such as AspectJ, to
very powerful composition techniques for specific types of models—for example,
state machines.

We believe that AOM is more than just copying the concepts of AOP at
the modelling level and should rightly include a large number of other model composition
techniques. Developing model composition techniques and tooling
is costly, however. To minimise the effort required, this paper presents a generic
technique for model composition. The technique is based on invasive software
composition and our Reuseware tooling and can be used with arbitrary modelling
languages. The basic technique itself is language independent, but it can be
adapted to construct language- and purpose-specific composition techniques for
specific modelling languages and situations. Hence, it can be used both as a tool
for developing specific model-modularisation techniques and as an instrument of
research for studying basic properties and concepts of model modularisation. The
paper gives a detailed description of our approach and evaluates it using a number
of examples

<embed src="/publications/2009_TAOSD_Reuseware.pdf" width="800" height="1080" type='application/pdf'/>
