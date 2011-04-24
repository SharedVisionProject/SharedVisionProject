require "spec_helper"

describe PiecesController do
  describe "routing" do

    it "recognizes and generates #index" do
      { :get => "/pieces" }.should route_to(:controller => "pieces", :action => "index")
    end

    it "recognizes and generates #new" do
      { :get => "/pieces/new" }.should route_to(:controller => "pieces", :action => "new")
    end

    it "recognizes and generates #show" do
      { :get => "/pieces/1" }.should route_to(:controller => "pieces", :action => "show", :id => "1")
    end

    it "recognizes and generates #edit" do
      { :get => "/pieces/1/edit" }.should route_to(:controller => "pieces", :action => "edit", :id => "1")
    end

    it "recognizes and generates #create" do
      { :post => "/pieces" }.should route_to(:controller => "pieces", :action => "create")
    end

    it "recognizes and generates #update" do
      { :put => "/pieces/1" }.should route_to(:controller => "pieces", :action => "update", :id => "1")
    end

    it "recognizes and generates #destroy" do
      { :delete => "/pieces/1" }.should route_to(:controller => "pieces", :action => "destroy", :id => "1")
    end

  end
end
