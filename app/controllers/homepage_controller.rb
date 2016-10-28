class HomepageController < ApplicationController
   skip_before_filter :verify_authenticity_token

  def index
  end

  def show
    # if params[:movie]
    #     open('http://www.omdbapi.com/?t=' + params[:movie]) do |f|
    #     json_string = f.read
    #     parsed_json = JSON.parse(json_string)
    #     @movie = parsed_json
    #   end
    #   render json: @movie.to_json
    # end
  end

end
