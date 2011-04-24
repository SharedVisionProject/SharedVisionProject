require 'spec_helper'

describe "boards/show.html.erb" do
  before(:each) do
    @board = assign(:board, stub_model(Board,
      :name => "Name",
      :height => 1,
      :width => 1
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Name/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
  end
end
