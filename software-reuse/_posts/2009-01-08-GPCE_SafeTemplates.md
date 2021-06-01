---
layout: post
section-type: post
title: Generating Safe Template Languages
category: research paper
tags: [ ]
---
_In Proc. of ACM 8th International Conference on Generative Programming and Component Engineering (GPCE’09), ACM Press_
<br/>with: _Florian Heidenreich, Mirko Seifert, Christian Wende, and Marcel Böhme_

Template languages are widely used within generative programming,
because they provide intuitive means to generate software
artefacts expressed in a specific object language. However, most
template languages perform template instantiation on the level of
string literals, which allows neither syntax checks nor semantics
analysis. To make sure that generated artefacts always conform to
the object language, we propose to perform static analysis at template
design time. In addition, the increasing popularity of domain-specific
languages (DSLs) demands an approach that allows to
reuse both the concepts of template languages and the corresponding
tools.

In this paper we address the issues mentioned above by presenting
how existing languages can be automatically extended with
generic template concepts (e.g., placeholders, loops, conditions) to
obtain safe template languages. These languages provide means for
syntax checking and static semantic analysis w.r.t. the object language
at template design time. We discuss the prerequisites for this
extension, analyse the types of correctness properties that can be
assured at template design time, and exemplify the key benefits of
this approach on a textual DSL and Java.

<embed src="/publications/2009_GPCE_SafeTemplates.pdf" width="800" height="1080" type='application/pdf'/>
