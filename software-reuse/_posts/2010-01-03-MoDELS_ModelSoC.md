---
layout: post
section-type: post
title: Concern-based (de)composition of Model-Driven Software Development Processes
category: research paper
tags: [ ]
---
_In Proc. of ACM/IEEE 13th International Conference on Model Driven Engineering Languages and Systems (MoDELS’10), volume 6395 of LNCS, Springer_
<br/>with: _Uwe Aßmann_

An MDSD process is often organised as transformation chain.
This can threaten the Separation of Concerns (SoC) principle, because
information is replicated in, scattered over, and tangled in different models.
Aspect-Oriented Software Development (AOSD) supports SoC to
avoid such scatterings and tangling of information. Although there are
integrations of MDSD and AOSD, there is no approach that uses concern
separation for all artifacts (documents, models, code) involved in an
MDSD process as the primary (de)composition method for the complete
process. In this paper, we propose such an approach called ModelSoC. It
extends the hyperspace model for multi-dimensional SoC to deal with information
that is replicated in different models. We present a ModelSoC
implementation based on our Reuseware framework that organises all information
provided in arbitrary models during development in a concern
space and composes integrated views as well as the final system from
that. This is shown on the development of a demonstrator system.

<embed src="/publications/2010_MoDELS_ModelSoC.pdf" width="800" height="1080" type='application/pdf'/>
