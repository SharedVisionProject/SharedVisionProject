require 'spec_helper'

describe "boards/edit.html.erb" do
  before(:each) do
    @board = assign(:board, stub_model(Board,
      :name => "MyString",
      :height => 1,
      :width => 1
    ))
  end

  it "renders the edit board form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => boards_path(@board), :method => "post" do
      assert_select "input#board_name", :name => "board[name]"
      assert_select "input#board_height", :name => "board[height]"
      assert_select "input#board_width", :name => "board[width]"
    end
  end
end
