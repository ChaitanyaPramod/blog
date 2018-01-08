var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: "First Post",
          excerpt: "Phew, just finished the basic setup of my brand-new blog-site. It took almost five hours to get here. Working with...",
          categories: [],
          tags: [],
          id: 0
      })
      
    
      this.add({
          title: "Viral Loop & the Lean Startup",
          excerpt: "Disruption of internet service can make you do things you wouldn’t have imagined doing anytime soon. For me this weekend,...",
          categories: ["books"],
          tags: [],
          id: 1
      })
      
    
      this.add({
          title: "Partition Complexity",
          excerpt: "Kent Beck’s thoughts on managing complexity. Gem of an article.\n\nMany useful tips for software development.\n\n(via http://softwareleadweekly.com/issues/262)\n",
          categories: ["link"],
          tags: ["link"],
          id: 2
      })
      
    
      this.add({
          title: "Time Management (slides)",
          excerpt: "Practical and easily applicable tips on managing the scarcest resource in our life\n\n(via http://softwareleadweekly.com/issues/266)\n",
          categories: ["link"],
          tags: ["link"],
          id: 3
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "First Post",
        "url": "https://blog.chaitanyapramod.com/first-post",
        "excerpt": "Phew, just finished the basic setup of my brand-new blog-site. It took almost five hours to get here. Working with...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Viral Loop & the Lean Startup",
        "url": "https://blog.chaitanyapramod.com/viral-loop-and-the-lean-startup",
        "excerpt": "Disruption of internet service can make you do things you wouldn’t have imagined doing anytime soon. For me this weekend,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Partition Complexity",
        "url": "https://blog.chaitanyapramod.com/partition-complexity",
        "excerpt": "Kent Beck’s thoughts on managing complexity. Gem of an article.\n\nMany useful tips for software development.\n\n(via http://softwareleadweekly.com/issues/262)\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Time Management (slides)",
        "url": "https://blog.chaitanyapramod.com/time-management-slides",
        "excerpt": "Practical and easily applicable tips on managing the scarcest resource in our life\n\n(via http://softwareleadweekly.com/issues/266)\n",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().replace(":", "");
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
