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
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

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
