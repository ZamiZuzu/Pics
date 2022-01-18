class FallbackController < ActionController::Base
    def index
      render file: 'src/index.html'
    end
  end