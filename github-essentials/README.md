# [GitHub Essentials][tutorial]

[Source on GitHub](https://github.com/github-essentials/github-essentials-v1/tree/gh-pages)

## Setup and Installation

1. Install bundle gem `gem install bundler`
2. Create Gemfile with github-pages gem dependency
3. Run `bundle install --path .vendor/bundle`

Jekyll was installed as a dependency.  
Check whether Jekyll was correctly installed by running `bundle exec jekyll`

Gemfile

```ruby
source 'https://rubygems.org'
gem 'github-pages'
```

## Create new Static Site

1. Create new Jekyll site in empty folder `bundle exec jekyll new initdir`
2. Copy new site to root directory `mv initdir/{.,}* .`
3. Remove temp folder `rmdir initdir`
4. Install dependencies `bundle install`

[tutorial]: https://www.packtpub.com/application-development/github-essentials

Build the site locally `bundle exec jekyll serve --watch`  
Site is running on [http://localhost:4000](http://localhost:4000)
