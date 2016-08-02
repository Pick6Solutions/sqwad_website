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

base_uri = "https://sqwadmediumblog.firebaseio.com"
firebase = Firebase::Client.new(base_uri)
response = firebase.get("acceptedArticles")
responseRaw = response.raw_body
responseJson = JSON.parse(responseRaw)
responseJson.each do |article|
  articleTitle =  article[1]['title'].gsub(/\s+/, "").downcase
  proxy "/lowdown/articles/#{article[0]}/#{articleTitle}/index.html", "/articles/template.html", :locals => {:title => articleTitle}, :ignore => true
end

sportName = ['wnba', 'mls', 'nba', 'nfl', 'mlb', 'epl']
sportName.each do |sport|
  proxy "/lowdown/articles/#{sport}/index.html", "/articles/sports.html", :locals => {:title => sport}, :ignore => true
end

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
   authors = [["nick_lawson", 'https://twitter.com/nlawsonMBA'], ["nic_bodiford", 'https://twitter.com/Nic_Bodiford'], ['frankie_chakeris', 'https://twitter.com/sqwadfc'], ['kent_paisley', 'https://twitter.com/kpaisley93']]
    authors.each do |author|
      if(author[0] === name)
        return author[1]
      end
    end
  end
  
  def showArticles()
    base_uri = "https://sqwadmediumblog.firebaseio.com"
    firebase = Firebase::Client.new(base_uri)
    response = firebase.get("submittedArticles")
    articlesRaw = response.raw_body
    if(articlesRaw === 'null')
      return []
    end
    responseJson = JSON.parse(articlesRaw)
    return responseJson
  end
  
  def getCurrentArticle()
    base_uri = "https://sqwadmediumblog.firebaseio.com"
    firebase = Firebase::Client.new(base_uri)
    articleId = current_page.path.split('/')[2]
    getArticle = firebase.get('acceptedArticles/' + articleId)
    return JSON.parse(getArticle.raw_body)
  end
  
  def featuredArticles()
    articles = []
    base_uri = "https://sqwadmediumblog.firebaseio.com"
    firebase = Firebase::Client.new(base_uri)
    response = firebase.get("acceptedArticles")
    articlesRaw = response.raw_body
    responseJson = JSON.parse(articlesRaw)
    responseJson.reverse_each do |article|
      if(article[1]['featured'])
        articles.push(article)
      end
    end
    return articles
  end
  
  def getLink(article)
    articleId = article[0]
    lowerCaseTitle = article[1]['title'].gsub(/\s+/, "").downcase
    return '/lowdown/articles/' + articleId + '/' + lowerCaseTitle
  end
  
  def getProperArticles(league)
    articles = []
    base_uri = "https://sqwadmediumblog.firebaseio.com"
    firebase = Firebase::Client.new(base_uri)
    response = firebase.get("acceptedArticles")
    articlesRaw = response.raw_body
    responseJson = JSON.parse(articlesRaw)  
    if(!league)
      return responseJson
    end
    responseJson.each do |article|
      article[1]['tags'].each do |tag|
        if(tag === league)
          articles.push(article)
        end
        if(articles.length() ===3)
          break
        end
      end
    end
    return articles
  end
  
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
