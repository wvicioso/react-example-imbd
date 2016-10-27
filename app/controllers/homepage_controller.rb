class HomepageController < ApplicationController
   skip_before_filter :verify_authenticity_token

  def index
  end

  def show
    open('http://www.omdbapi.com/?t=' + params[:movie]) do |f|
      json_string = f.read
    p @movie = parsed_json = JSON.parse(json_string)
    end
    render :index
  end

end
