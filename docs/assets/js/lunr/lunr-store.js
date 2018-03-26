var store = [{
        "title": "First Post",
        "excerpt":"Phew, just finished the basic setup of my brand-new blog-site. It took almost five hours to get here. Working with Octopress was fun. Setting up a blog on commandline is way cooler than doing it the wordpress style. Of course, Octopress drew me to itself with its subtitle:  A blogging framework for hackers.I noticed Divya Manian move her blog to Octopress. After looking up Octopress and what people feel about it (everyone seems to like it), I decided to try it myself.After reading almost all of the Octopress site, I cloned the Octopress repo, setup a Disqus account for the site and plugged in account into the config files. All commands are run through rake, which makes it as easy as:rake new_page[page_title]   # create a new page  rake new_post[post_title]   # create a new post  rake preview                # fire up a local server and preview the site at localhost:4000  rake deploy                 # Make it live! :)Just now realized that syntax highlighting breaks on Windows. Gotta find a fix for it soon. The Google Fonts were making the pages render slower, so I am thinking if they should be removed. The styles look good, but will spend some time on the CSS and fiddle around with it. Compass and SASS are new to me, more CSS frameworks to learn :(.That’s it folks for now, will update with more changes I am planning to the site.","categories": [],
        "tags": [],
        "url": "https://chaitanyapramod.com/blog/first-post",
        "teaser":null},{
        "title": "Viral Loop & the Lean Startup",
        "excerpt":"Disruption of internet service can make you do things you wouldn’t have imagined doing anytime soon. For me this weekend, it was reading books that have long been collecting dust on my desk. I read Viral Loop on Saturday and The Lean Startup on Sunday. These bullet points are just a way for me to recall what I learned from these books.Viral Loop (Adam Penenberg)  Viral expansion loop          Viral loop      Viral network      Double viral loop        Collective curation  Viral businesses          Tupperware and Ponzi-scheme (Pyramid schemes), Netscape      Spreadable product      Virality Coefficient        Characteristics of Viral loop businesses          Web-based      Free      Organizational technology      Simple concept      Built-in Virality      Extreme fast adoption (Hotmail, Facebook, Skype)      Virality Index (&gt; 1.0)      Predictable growth rates      Network effects (Telephone, IMs, social networks)      Stackability (on another viral business)      Point of nondisplacement      Ultimate saturation        Viral Marketing          Hotmail (remember Get your free email at Hotmail in email footer?)        Viral Networks          eBay      PayPal stacked over eBay      MySpace      Flickr and YouTube stacked over MySpace        Scaling issues of (almost) every viral product          eBay, Twitter        Long tail vs heavy tailIn the end, it just felt like reading stories of a couple of internet successes, but was an interesting read nevertheless.The Lean Startup (Eric Ries)  Entrepreneurs are everywhere  Entrepreneurship is management  Incremental innovation vs disruptive innovation  Validated learning  Develop an MVP  Eliminate uncertainity - Test assumptions  Innovation accounting - vanity metrics and actionable metrics  Split testing (A/B testing)  Kanban principle:          Four stages of development of features:                  Product backlog          Actively being built          Done (technically)          Being validated                      Argument resolution through split test reports  Three A’s of metrics:          Actionable      Accessible      Auditable        Pivot: Changing course with one foot anchored to the ground  Different pivots(and the Votizen story):          zoom-in pivot      customer segment pivot      Customer need pivot      platform pivot      plus more        Pivot or Persevere  Single piece flow &amp; effect of batch size          Large batch spiral death        Countinuous innovation and continuous deployment  Build-measure-learn cycle and planning it backward  Controlled scaling (Gmail)  The five why’s  User story for every feature  Collect and organize feedback from various forumsYou can find lots of common references between these two books. Overall, it has been an entertaining and meaningful journey. I recommend these books to anyone building a product s/he’s is expecting to take over the world. Now that these two books are off my to-read list, wondering what to read next… Toyota Production System by Taiichi Ohno?","categories": ["books"],
        "tags": [],
        "url": "https://chaitanyapramod.com/blog/viral-loop-and-the-lean-startup",
        "teaser":null},{
        "title": "Partitioning Complexity",
        "excerpt":"Kent Beck’s thoughts on managing complexity. Gem of an article.Many useful tips for software development.(via http://softwareleadweekly.com/issues/262)","categories": ["link"],
        "tags": ["link"],
        "url": "https://chaitanyapramod.com/blog/partition-complexity",
        "teaser":null},{
        "title": "Time Management (slides)",
        "excerpt":"Practical and easily applicable tips on managing the scarcest resource in our life(via http://softwareleadweekly.com/issues/266)","categories": ["link"],
        "tags": ["link"],
        "url": "https://chaitanyapramod.com/blog/time-management-slides",
        "teaser":null},{
        "title": "Understanding Elasticsearch bottom up",
        "excerpt":"Understanding Elasticsearch  https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up  Inverted index          Dictionary contains term and frequency, postings contain documents (IDs)      Index term being unit of search      Prefix searches are efficient, contains searches are not      Modelling problems as prefix searches                  Suffix matching - indexing reversed words          Contains matching - split words into n-grams          Decompound compound words          Geo coordinates - as geo hashes          Numerical and time ranges - store values trie-like          etc                      Building indexes          Prioritize                  search speed          index compactness          indexing speed          time to be visible                    Small index, faster search      Lucene indexes immutable      Deletions are only marked      Updates = delete + reinsert                  Updating is costlier than inserting                    Index changes buffered in memory, eventually flushed (lucene) to disk = index segment        Index segments          Advancements with lucene versions                  Lucene &lt;2.3 would make a segment for each doc, which were merged on flush          Nowadays, can make larger in-memory segments          Lucene 4 - one segment per thread - increased indexing performance, concurrent flushing          Flushing segments invalidates field and filter caches (which are per-segment)                      Elasticsearch indexes          ES Index -&gt; 1/more shards with 0/more replicas = lucene indexes -&gt; 1/more index segments      Elasticsearch in production  https://www.elastic.co/blog/found-elasticsearch-in-production  Complicated system. Requires          network stability      Huge memory      assumptions that all users are trustworthy (are they?)      ","categories": [],
        "tags": [],
        "url": "https://chaitanyapramod.com/blog/understanding-es",
        "teaser":null},{
        "title": "Dagger 2.0 Proposal",
        "excerpt":"Found this beatiful document from Greg Kick making a proposal for fully statically resolved dependency injection framework on Dagger 1 Github issues.This proposal is historically significant as it brings in a new generation of java dependency injection framework which is completely code generated. This avoids reflection altogether which is expensive in terms of CPU cycles (and much more so on Android).via https://github.com/square/dagger/issues/366","categories": ["link"],
        "tags": ["link"],
        "url": "https://chaitanyapramod.com/blog/dagger-2-proposal",
        "teaser":null},{
        "title": "The Internet Tidal Wave",
        "excerpt":"Bill Gates wrote this fascinating memo to his staff in 1995. It predicts the evolution of internet ecosystem, how almost every service would be touched by it and why it was super-important to be an internet player.via Deep Work","categories": ["link"],
        "tags": ["link"],
        "url": "https://chaitanyapramod.com/blog/internet-tidal-wave",
        "teaser":null},{
        "title": "The Indespensable Document for the Modern Manager",
        "excerpt":"I love the idea of writing a user guide on oneself. As a manager, you can share your thoughts, expectations, style of communication, personality as relevant for team members. This is extremely scalable and quite valuable to self and team members. Some of the questions from team can be answered right here, thus avoiding synchronous discussions.via Tech Leadership Weekly","categories": ["link"],
        "tags": ["link, management"],
        "url": "https://chaitanyapramod.com/blog/indispensable-document-for-modern-manager",
        "teaser":null},{
        "title": "Demystifying Butterknife",
        "excerpt":"Reading source code, especially of programs and libraries you use, is quite useful in understanding how it is built. Sometimes, it’d be helpful if one can explain how code is structured and how to deconstruct it. Here is my attempt at writing down my thoughts on Butterknife code, which can potentially help new developers.In this post, we will be uncovering the magic and provide a commentary on the library.Butterknife is majorly composed of three pieces  annotations  annotation processor  runtime libraryAnnotationsDefines all the BindView annotation and the like that you use in view code. You can see them all here.400: Invalid requestAnnotation processorThis is the most interesting part of Butterknife. The implementation is simple(ish). The processor says it’s interested in all the Butterknife annotations. Then the compiler calls the processor with all the elements annotated with these annotations.  It creates the XActivity_ViewBinding class.Here is a sample _ViewBinding class generated by the processor.400: Invalid requestLet’s focus on the BindView annotation, others behave similarly (listeners are slightly different). The crux of parseBindView is in lines 475-499.400: Invalid requestListeners are implemented with little more complexity, mainly in parseListenerAnnotation, specifically lines 1139-1164 and 1204-1213. If we skip all the error-checking, the method parseListenerAnnotation matches the parameters from the Android listener which are used in the bound method and passes off the required params to BindingSet.Builder#addMethod.400: Invalid requestBoth these methods collect all the bindings into a BindingSet per type. Once a Type is processed, all these bindings are flushed to a JavaFile X_ViewBinding.java400: Invalid requestSee Jake Wharton’s talk on Annotation Processor to get more details of how one is built.Runtime libraryThis is a utility library and some sugar. The utilities are used from the generated code and the Butterknife class. When you call Butterknife.bind(), it reflectively loads the processor-generated class, which is named your-view-class-name + \"_ViewBinding\" and constructs an instance of the class.400: Invalid requestThe Butterknife class is not really required to make use of the binder. In fact, it adds runtime reflection cost. You can instead use the generated class directly. This is the approach Dagger 2 has taken as well.400: Invalid requestBonus: The Gradle pluginThe gradle plugin has a very simple function. It lets you use Butterknife in library modules. But why can’t you use Butterknife in library modules like regular application modules? Because the element value in an annotation can only be a constant value for primitive types12. But the R class generated by Android Gradle plugin doesn’t make the ID values constant in library modules. If libraries had their resource IDs final, then the IDs could collide when building the final APK. So your compile step will complain loudly if you write@BindView(R.id.viewid) View idView;You could not use Butterknife in library modules earlier, that is until Gautam Korlam contributed a Gradle plugin which clones R as R2 with final values for resources. Now you can use @BindView(R2.id.viewid) View idView in library modules without worry. Most of the interesting work is done in the class FinalRClassBuilder.400: Invalid requestI hope you’re now comfortable venturing into the source code of Butterknife armed with this knowledge.Tip: Install Insight.io for Github to add IDE-like navigation capabilities to Github for pleasant code reading.For the next post, would readers be interested in a walk through building a basic version of Butterknife from scratch?Thanks to Yashasvi Girdhar for reading drafts of the post.            https://docs.oracle.com/javase/specs/jls/se8/html/jls-15.html#jls-15.28 &#8617;              https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-ElementValue &#8617;      ","categories": [],
        "tags": [],
        "url": "https://chaitanyapramod.com/blog/demystifying-butterknife",
        "teaser":null}]
