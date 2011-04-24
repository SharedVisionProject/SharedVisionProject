require 'spec_helper'

describe "pieces/edit.html.erb" do
  before(:each) do
    @piece = assign(:piece, stub_model(Piece,
      :board_id => 1,
      :pos_x => 1.5,
      :pos_y => 1.5,
      :type_of_shape => "MyString",
      :data => "MyText"
    ))
  end

  it "renders the edit piece form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => pieces_path(@piece), :method => "post" do
      assert_select "input#piece_board_id", :name => "piece[board_id]"
      assert_select "input#piece_pos_x", :name => "piece[pos_x]"
      assert_select "input#piece_pos_y", :name => "piece[pos_y]"
      assert_select "input#piece_type_of_shape", :name => "piece[type_of_shape]"
      assert_select "textarea#piece_data", :name => "piece[data]"
    end
  end
end
