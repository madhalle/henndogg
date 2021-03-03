<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}</title>
  <meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}">
  <!-- #works for deployment to load css -->
  {% include base.html %}
  <script src="{{base}}/javascripts/masonry.pkgd.js" type="text/javascript"></script>
  <script src="{{base}}/javascripts/imagesloaded.pkgd.min.js" type="text/javascript"></script>
  <script src="{{base}}/javascripts/slick.min.js" type="text/javascript"></script>
  <script src="{{base}}/javascripts/app.js" type="text/javascript"></script>

  <link rel="stylesheet" href="{{base}}/css/foundation.css">
  <link rel="stylesheet" href="{{base}}/css/style.css">
  <link rel="stylesheet" href="{{base}}/css/fontello.css">
  <link rel="stylesheet" href="{{base}}/css/font-awesome.css">


  <script src="{{base}}/javascripts/libs.js.bundle" type="text/javascript"></script>
  <script>
    // terrificjs bootstrap
    (function($) {
        $(document).ready(function() {
            var $page = $('body');
            var config = {
              dependencyPath: {
                plugin: '{{base}}/javascripts/'
              }
            }
            var application = new Tc.Application($page, config);
            application.registerModules();
            application.start();
        });
    })(Tc.$);
  </script>
  <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,300" media="screen" rel="stylesheet" type="text/css" />

  <link rel="canonical" href="{{ base | replace:'/index.html','' | prepend: base | prepend: base }}">
  <link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ "/feed.xml" | prepend: base | prepend: base }}" />

  <!-- <script src="{{ "javascripts/masonry.pkgd.js" | prepend: site.baseurl }}" type="text/javascript"></script>
  <script src="{{ "javascripts/imagesloaded.pkgd.min.js" | prepend: site.baseurl }}" type="text/javascript"></script>
  <script src="{{ "javascripts/slick.min.js" | prepend: site.baseurl }}" type="text/javascript"></script>

  <link rel="canonical" href="{{ page.baseurl | replace:'/photos.html','' | prepend: site.baseurl | prepend: site.baseurl }}">
  <link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.baseurl }}" /> -->
</head>
