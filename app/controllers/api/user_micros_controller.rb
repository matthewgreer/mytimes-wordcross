class UserMicrosController < ApplicationController

  def index

    # check for date passed in params, default: today's date
    # query for range of micros with dates matching the given date by month && year 
    # query for user_micros that match the user_id && that range of dates
    # get collection of those user_micros
    # create new user_micros from corresponding micros for dates that don't have matches
    # render collection (@user_micros) in JSON

  end

  def show

    # query for micro by date (passed in params), default: today's date
    # query for user_micros that match by micro_id && user_id
    # get user_micro if it exists
    # create new user_micro from micro if not
    # render user_micro (@user_micro) in JSON
    # Sample JSON response:
    # {
    #   "id": 1,
    # 	"date": "2020-8-1",
    # 	"author": "Joel Fagliano"
    # 	"solution": [
    # 		["#", "#", "P", "U", "N"],
    # 		["S", "H", "A", "R", "E"],
    # 		["C", "O", "N", "G", "O"],
    # 		["A", "L", "I", "E", "N"],
    # 		["R", "E", "C", "#", "#"]
    # 	],
    # 	"clue_set": [
    # 		{
    # 			"direction": "across",
    # 			"number": "1",
    # 			"position": [2,0],
    # 			"clue": "Dog name like Hairy Pawter, e.g."
    # 		}, 
    # 		{
    # 			"direction": "across", 
    # 			"number": "4", 
    # 			"position": [0,1],
    # 			"clue:": "Unit of stock"
    # 		}, 
    # 		{
    # 			"direction": "across", 
    # 			"number": "6", 
    # 			"position": [0,2],
    # 			"clue:": "Africa's Republic of the ______"
    # 		}, 
    # 		{
    # 			"direction": "across", 
    # 			"number": "7", 
    # 			"position": [0,3],
    # 			"clue:": "U.F.O. Pilot"
    # 		}, 
    # 		{
    # 			"direction": "across", 
    # 			"number": "6", 
    # 			"position": [0,4],
    # 			"clue:": "Restaurant suggestion, for short"
    # 		}, 
    # 		{
    # 			"direction": "down", 
    # 			"number": "1", 
    # 			"position": [2, 0],
    # 			"clue:": "Hysteria"
    # 		}, 
    # 		{
    # 			"direction": "down", 
    # 			"number": "2", 
    # 			"position": [3, 0],
    # 			"clue:": "Strong desire"
    # 		}, 
    # 		{
    # 			"direction": "down", 
    # 			"number": "3", 
    # 			"position": [4, 0],
    # 			"clue:": "Element below helium on the periodic table"
    # 		}, 
    # 		{
    # 			"direction": "down", 
    # 			"number": "4", 
    # 			"position": [0, 1],
    # 			"clue:": "Disney villain who kills Mufasa"
    # 		}, 
    # 		{
    # 			"direction": "down", 
    # 			"number": "5", 
    # 			"position": [1, 1],
    # 			"clue:": "Bagel's center"
    # 		}
    # 	],
    # 	"solving_state":	[
    # 		["#", "#", "P", "", ""],
    # 		["", "", "A", "", ""],
    # 		["", "", "N", "", ""],
    # 		["", "", "I", "", ""],
    # 		["R", "E", "C", "#", "#"]        
    # 	],
    # 	"timer": 18275
    # }

  end

  def update

    # save solving_state && timer && solved

  end

  private

  def user_micro_params
    params.require(:user_micro).permit(:id, :user_id, :micro_id)
  end

end
