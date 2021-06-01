---
layout: post
section-type: post
title: Construct to Reconstruct – Reverse Engineering Java Code with JaMoPP
category: research paper
tags: [ ]
---
_In Proc. of the International Workshop on Reverse Engineering Models from Software Artifacts (R.E.M.’08)_
<br/>with: _Florian Heidenreich, Mirko Seifert, and Christian Wende_

Reconstructing models from software artefacts
is of utter importance to migrate existing systems to the
age of Model-Driven Software Development. To do so, the
software artefacts must be analysed and corresponding models
need to be created. Many approaches perform this task in
a rather direct way. Behavioural or structural models (e.g.,
UML state machines or class diagrams) are reconstructed from
source code. However, this direct model reconstruction implies
some major drawbacks. First, parsers and code analysis are
reimplemented for different reconstruction tasks. Second, tools
developed for forward engineering can not be reused.
To resolve these drawbacks, we propose a multi-step procedure,
that analyses the structure of artefacts and transforms
them to the technological target spaces. The resulting model
of the software artefact contains all information present in the
artefact. It is therefore independent of specific reconstruction
tasks. Then, the model reconstruction itself is performed. We
exemplify this approach with our experiences from reverse
engineering Java code with JaMoPP—a tool that creates models
from Java source code. As JaMoPP was originally developed
for forward engineering, we will also discuss how JaMoPP
(and other too

<embed src="/publications/2009_REM_JaMoPPReverse.pdf" width="800" height="1080" type='application/pdf'/>
