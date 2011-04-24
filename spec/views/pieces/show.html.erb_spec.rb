require 'spec_helper'

describe "pieces/show.html.erb" do
  before(:each) do
    @piece = assign(:piece, stub_model(Piece,
      :board_id => 1,
      :pos_x => 1.5,
      :pos_y => 1.5,
      :type_of_shape => "Type Of Shape",
      :data => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1.5/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1.5/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Type Of Shape/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/MyText/)
  end
end
