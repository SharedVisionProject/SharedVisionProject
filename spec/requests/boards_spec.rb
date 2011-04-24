require 'spec_helper'

describe "Boards" do
  describe "GET /boards" do
    it "works! (now write some real specs)" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get boards_path
      response.status.should be(200)
    end
  end
end
