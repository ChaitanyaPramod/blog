---
title: Understanding Elasticsearch bottom up
date:   2018-02-01 11:00:00 +0530
excerpt: Notes from learning the basic working of Elasticsearch
---
## Understanding Elasticsearch
* <https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up>
* Inverted index
    * Dictionary contains term and frequency, postings contain documents (IDs)
    * Index term being unit of search
    * Prefix searches are efficient, contains searches are not
    * Modelling problems as prefix searches
        * Suffix matching - indexing reversed words
        * Contains matching - split words into n-grams
        * Decompound compound words
        * Geo coordinates - as geo hashes
        * Numerical and time ranges - store values trie-like
        * etc
* Building indexes
    * Prioritize
        * search speed
        * index compactness
        * indexing speed
        * time to be visible
    * Small index, faster search
    * Lucene indexes immutable
    * Deletions are only marked
    * Updates = delete + reinsert
        * Updating is costlier than inserting
    * Index changes buffered in memory, eventually flushed (lucene) to disk = index segment
* Index segments
    * Advancements with lucene versions
        * Lucene <2.3 would make a segment for each doc, which were merged on flush
        * Nowadays, can make larger in-memory segments
        * Lucene 4 - one segment per thread - increased indexing performance, concurrent flushing
        * Flushing segments invalidates field and filter caches (which are per-segment)
* Elasticsearch indexes
    * ES Index -> 1/more shards with 0/more replicas = lucene indexes -> 1/more index segments

***

## Elasticsearch in production
* <https://www.elastic.co/blog/found-elasticsearch-in-production>
* Complicated system. Requires
    * network stability
    * Huge memory
    * assumptions that all users are trustworthy (are they?)
