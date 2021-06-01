---
layout: post
section-type: post
title: Round-trip Support for Invasive Software Composition Systems
category: research paper
tags: [ ]
---
_In Proc. of 8th International Conference on Software Composition (SC’09), volume 5634 of LNCS, Springer_
<br/>with: _Roland Samlaus, and Mirko Seifert_

The ever increasing complexity of software systems promotes
the reuse of software components to a topic of utter importance. By
reusing mature parts of software, large systems can be built with high
quality. The Reuseware Composition Framework can compose components
written in arbitrary software languages. Based on metamodeling
these components are merged invasively. But, even though language independent
composition is powerful to compose complex systems, one must
consider that composition is not the only activity in developing a working
systems by reuse. Many tests and validations can only be performed on
the composed system. At that point, it is hard to (a) know from which
component an error originates and (b) ascertain what the implications
of changing something in the composed system are.

This paper presents an approach to propagate changes back to the correct
source components and discusses the possible implications of changes
made to composed systems. Furthermore, the implementation of the approach
as an extension to the Reuseware Composition Framework is
presented using two example applications.

<embed src="/publications/2009_SC_ISCRoundTrip.pdf" width="800" height="1080" type='application/pdf'/>
