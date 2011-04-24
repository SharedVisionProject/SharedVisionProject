require 'spec_helper'

describe "pieces/index.html.erb" do
  before(:each) do
    assign(:pieces, [
      stub_model(Piece,
        :board_id => 1,
        :pos_x => 1.5,
        :pos_y => 1.5,
        :type_of_shape => "Type Of Shape",
        :data => "MyText"
      ),
      stub_model(Piece,
        :board_id => 1,
        :pos_x => 1.5,
        :pos_y => 1.5,
        :type_of_shape => "Type Of Shape",
        :data => "MyText"
      )
    ])
  end

  it "renders a list of pieces" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Type Of Shape".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
