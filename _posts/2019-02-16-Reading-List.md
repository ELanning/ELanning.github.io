---
layout: default
title: "Reading List"
tags: reading list book
---

# A Review of Most Books I've Read

I am leaving out most of my mandatory undergrad reading books except for Algorithms 3rd edition, for simplicities sake. These were all read on my own free time.

- Programming
  - C
  - C++
  - Python
  - C#
  - JavaScript
- Math
- Artificial Intelligence

# Programming Books

## The Elements of Programming Style by Brian Kernighan and P. J. Plauger

A timeless book, that one can read in a day, especially if the reader is already familiar with more modern works that were likely inspired by this book. Kernighan is a great author, and this book is no exception. Contains some amusing relics such as certain operations to avoid in FORTRAN. You may find many of your companies coding standards are inspired by parts of this book. Here are a few great snippets from the book.

> Let the data structure the program.

> Don't strain to re-use code; reogranize instead.

This is a common case I have encountered in code bases (and have done myself): to add new behavior a Boolean flag is added as a function parameter. Decomposing/recomposing, or other strategies can be much more maintainable and readable. A seemingly innocuous Boolean flag introduces extra Cyclomatic complexity that may not be necessary. What normally happens is it sets the stage for more maintainers to add more Boolean flags and does not scale in the long run. It is also one of the lowest forms of cohesion, known as Logical Cohesion. There are cases where a Boolean flag is the right choice (or possibly even better, an enum), but I won't get into that here.

## The Practice of Programming by Brian Kernighan and Rob Pike

A classic bread and butter programming book. The first few chapters cover all the usual data structures, and the authors advice of choosing the right data structure for the problem is always relevant. In chapter 5 there is analysis of a Markov Chain in different programming languages. The C version was over 300 lines, while the Perl version was roughly 10 lines. However, you can imagine which was more readable to a non-Perl expert. The latter chapters talked about building mini domain level languages. As far as I know, this is not common practice now adays, but it was interesting to read about building simple tree parsers and how simple it can be to design a mini grammar. There was an interesting story about finding a bug in an implementation of the standard Unix library, a problem modern programmers likely never have to deal with.

## The Pragmatic Programmer by Andy Hunt, Dave Thomas

Another programming classic. Famous for introducing the concept of DRY and "no broken windows" to the general computer science population. Goes over a lot of timeless concepts, Design by Contract, Defensive Programming, Law of Demeter, Programming by Coincidence (good school memories). A concept the authors assert is that assertions should be left in production code. I love asking other software developers this question to hear their thoughts. I recommend this book, and it can be read in under a week, especially if you love these kind of books.

## The Art of Unix Programming by Eric S. Raymond

Fun read. An interesting thing the author states is their preference for SPOT instead of DRY, or Single Point of Truth. I agree and also prefer explaining SPOT instead of DRY, although DRY is more ubiquitous. Another version is SSOT, or Single Source of Truth, but SPOT has a more memorable acronym. I am not sure whether SSOT or SPOT came first, but I like to stick with SPOT. Much of this books content is available or said in other books. A point that stood out was this quote:

> One of Unix's oldest and most persistent design rules is that when a program has nothing interesting or surprising to say, it should shut up... Well-designed programs treat the user's attention and concentration as a precious and limited resource.

I see this rule broken in many various programs (possibly with good reason), but it's an often unthought about rule and I like to abide by it when possible.

## Code Complete 2nd edition by Steve McConnell

This is a massive book, but if you are familiar with its content from other sources, it will breeze by quickly. This is a fantastic book, and I highly recommend it to any software developers. A thing it offers that most other books do not, is actual data and studies to backup claims. Many programming books simply state a rule that is backed up by decades of experience, but little scientific measurement. There are a plethora of useful graphs, studies, and analysis in this book. Many of them will surprise the reader, such as the cost of modifying an already released program, the effectiveness of various testing methodologies, and the cost in percentages of how a well managed project can compare to a poorly managed project.

## Clean Code by Robert Cecil Martin (or Uncle Bob)

This was the most recommended book by Stack Overflow, and it's not surprising why. It is a medium sized book, at roughly 400 pages (using my memory, it may only be 300), but every chapter has great information. The book has been criticized by other software engineers for recommending decomposing methods even when the method is not re-used in multiple locations, and various other things. Exercise your own judgement and critical thinking skills for advice. I personally like and enjoy all of the advice, even if I may not follow it in all scenarios. I will not go into too much depth about this book. A lot of the books advice is in many coding guideline standards, and it's not surprising why. I cannot remember if the famous SOLID acronym came from this book, but it was invented by the author.

## Design Patterns: Elements of Reusable Object-Oriented Software by GoF

Another famous classic, for good reason. Talks about many coding conventions that are still used today, many of which even supported by languages directly now. There are a total of 23 patterns covered. Many of which were simply ways to avoid limitations of Object Oriented Programming. This book introduces a bunch of common terminology that software engineers can tap into when communicating, which is a valuable tool. Truthfully, I cannot remember most of the patterns off the top of my head and have to glance at the list to remember.

## Framework Design Guidelines: Conventions, Idioms, and Patterns for Reusable .NET Libraries (2nd Edition)

Although this could be argued to be more of a C# book (or CLR if you want to be picky, although the examples are all in C#), I am putting it in this general category instead. It is quite old, the version of C# they use in the book does not even have default parameters. Humorously, one comment in the book even said C# did not have default parameters because it would break the CLR. There are lots of good philosophy tidbits in this book. There are also a lot of C# specific things, and certain advice that is out of date, but still fun to read. The authors do not recommend using sentinel flags in enums, because they often introduce errors instead of making code easier to update, which was interesting because Code Complete does recommend sentinel flags. As with most things in software, I'm sure context matters.

# C Programming Books

## The C Programming Language by Brian Kernighan and Dennis Ritchie

One of the most famous programming books ever. It's compact as well, so if you have not given it a read, I highly recommend it. I was introduced to this book long ago, and did not understand why the authors did certain things at the time, such as implementing their own stack structure. The authors code is straightforward, simple, and fun to read.

## C: How to Program 2nd Edition by Harvey Deitel

This was a massive book I read in my youth, as it was on my parents bookshelf. It is very old. So old that C++ is introduced in a few chapters at the end as a superset of C. I am not sure why I am inlcuding it on this list, but I liked the cover and have fond memories from it.

# Assembly Programming Books

## Unknown x86 Assembly book ??

I read 300 pages of a random massive x86 assembly book. I believe the total length was over a thousand pages. The first few chapters discussed optimizations various CPU architectures made such as speculative execution, various clever reorderings of instructions, caching, etc. If someone knows what book I'm referring to, please shoot me an email. I'd love to finish reading it.

# C++ Programming Books

I read a bunch of old C++ books off my parents book shelf, but unfortunately cannot remember their names. The two books I do remember are:

## Effective C++ by Scott Meyers

One of the most famous C++ books. It is old, but still relevant I believe. I have not read the newer ones. My C++ knowledge is woefully out of date. Has some great advice about Object Oriented Programming (a penguin is a bird but cannot fly!), and answers a question that had bothered me about the Factory Pattern for a long time, which is: I thought a great benefit of Object Oriented Programming was not needing big switch statements, but this Factory Pattern does exactly that? This is a great read.

## More Effective C++ by Scott Meyers

Similar stuff to Effective C++. Good read if you're a C++ fan.

# Python Programming Books

## Python in Practice: Create Better Programs Using Concurrency, Libraries, and Patterns by Mark Summerfield

I have only read a third of this book, but the programs were fantastic. If you are looking to learn more about Python and brush up on your Design Patterns knowledge, this book is a good go to. A problem with the original Design Patterns book, is the examples are somewhat archaic. This book gives modern examples of Design Patterns in action.

# C# Programming Books

## C# 6.0 in a Nutshell: The Definitive Reference by Joseph Albahari

I needed to learn C# for my job, so I read the first six chapters of this book. The format is the first six chapters cover most of the breadth, and then you can read certain additional chapters as needed, for example, a later chapter covers concurrency. I read this book coming from C++ and Java, so it was not too surprising, although it had a lot of its own cool language features. I recommend this book if you're familiar with other programming languages and trying to learn C# quickly. Although, you will want to grab the latest version, as C# 6.0 is older now.

# JavaScript Programming Books

## JavaScript: The Good Parts by Douglas Crockford

Do not read this book, unless you have some random inclination. It is out of date with the arrival of modern versions of JavaScript. The book had some great ideas on using closures to simulate private variables, and other things like that.

# Math Books

## Introduction to Algorithms, 3rd Edition

Very common undergraduate Computer Science book. Contains all the bread and butter discrete algorithm goodness, Dijkstra's, minimal spanning trees, etc. Not much to say.

## Elements of Discrete Mathematics by Chung Laung Liu

Covers the usual discrete maths which are useful for problem solving. Probabilities, set theory, functions, the usual stuff. The later chapters cover homeomorphisms, which was my first touch with the subject. I was blown away at the usefulness and power of the concept. From what I can remember, the author is a well respected professor as well.

## Concrete Mathematics by Donald Knuth, Oren Patashnik, and Ronald Graham

Who doesn't like Knuth? I only read the first 4 chapters (the other 5 chapters looked like already covered content). It was a great read. The way the authors manipulated sums blew my mind. The way recursion could be turned into a summation and then analyzed with the usual big O notation was crazy. I definitely recommend the first 3 chapters, and chapter 4 if you're interested in number theory.

## How to Solve It by George Pólya

A math classic that changed the way math was taught. Goes over many problem solving techniques. If you're stuck on a problem, chances are you can employ one of these meta problem solving techniques and make progress. Not a long or hard read. Microsoft used to give all junior engineers this book, and there's a reason why.

## How to Prove It: A Structured Approach by Daniel J. Velleman

A great book if you're about to embark in proof heavy things. Even if you're a computer scientist, this book has lots of ways to simplify Boolean logic. Gives insight on how to think logically and solve things in an analytical manner, which is often helpful for debugging code.

## Elementary Calculus: An Infinitesimal Approach by Howard Jerome Keisler

About a thousand pages. Covers all the calculus goodness. First few chapters it uses the Infinitesimal Reals instead of the regular Reals with limits approach to teaching calculus. However, it also covers the limits approach in a different chapter. Not much to say about this book, except it has plenty of good examples and offers a good breadth of elementary calculus.

## Statistics and Data Analysis: From Elementary to Intermediate by Ajit C. Tamhane and Dorothy D. Dunlop

Chapters five to nine are very similar and can likely be skimmed or used as reference material. Reading chapter two will give a great basic foundation of probability. It might be the toughest chapter in the book. There are lots of useful problem solving techniques and tools in this book, that could help anyone in their problem solving career. Especially if collecting metrics is part of your design and construction project.

## Advanced Linear Algebra, 3rd Edition by Steven Roman

If you're looking to flex your abstract thinking muscles, look no further. This book will beat you down until, eventually, you start thinking purely abstractly. Covers lots of topics in a short period of time, using concise notation. Chapters one through ten cover the bread and butter things, all chapters after that are various topics.

# Artificial Intelligence Books

I had read 2 books off a shelf not listed here, but I cannot remember their titles. They were both published circa early 90s. I will update this when I re-find them.

## Deep Learning by Aaron C. Courville, Ian Goodfellow, and Yoshua Bengio

As far as I can tell, one of the fields cannonical books. It was a very enjoyable read and covered lots of material. The latter chapters are quite difficult to grasp, so I will likely re-read them at a later time. An interesting thing throughout this book, is how little we know about various topics. There is a lot to explore in this field. Another noteworthy thing; I read this book after I had read a few books from the 90s about neural nets, and a lot of the information in those books was still very much relevant.

## Computational Intelligence by Andries P. Engelbrecht

The first section covers neural networks. I had already read a few books about neural networks, so I skipped the first section to read about the Evolutionary Algorithms. I was surprised at the upfront simplicty of Evolutionary Algorithms
