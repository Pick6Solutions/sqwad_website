###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end
# nameArray = ["nick_lawson", "manuel_pineryo", "lee_jorgensen"]
  
  
# data['influencers']['people'].each do |person|
  
#   name = person.name.downcase.tr!(" ", "_") || person.name.downcase
  
#   proxy "/#{name}.html", "/template.html", :locals => { :person_name => name }, :ignore => true
  
# end

# nameArray.each do |name|
#   proxy "/#{name}.html", "/template.html", :locals => { :person_name => name }, :ignore => true
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates

helpers do
  def findAuthors(name)
   authors = [["Nick Lawson", 'https://twitter.com/nlawsonMBA'], ["Nic Bodiford", 'https://twitter.com/Nic_Bodiford'], ['Frankie Chakeris', 'https://twitter.com/sqwadfc']]
    authors.each do |author|
      if(author[0] === name)
        return author[1]
      end
    end
  end
end

activate :blog do |blog|
    # This will add a prefix to all links, template references and source paths
  blog.sources = "articles/{title}.html"
  blog.permalink = "articles/{title}.html"
  # Matcher for blog source files
  # blog.sources = "{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "article_layout"
  blog.summary_separator = /READMORE/
  blog.summary_length = 150
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"
  blog.tag_template = "tag.html"
  # blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"
  
  blog.custom_collections = {
    image_header: {
      link: '/headers/:image_header.html',
      template: '/image_header.html'
    },
    featured: {
      link: 'features/:featured.html',
      template: '/featured.html'
    },
    author: {
      link: 'authors/:author.html',
      template: '/author.html'
    }
  }
end

# set :markdown_engine, :redcarpet
# set :markdown, :fenced_code_blocks => true, :smartypants => true

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
  activate :relative_assets
  
  activate :asset_hash
  
  activate :directory_indexes
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = 'sqwadapp.co'
  s3_sync.region                     = 'us-west-2'
  s3_sync.delete                     = false
  s3_sync.after_build                = false
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
end
