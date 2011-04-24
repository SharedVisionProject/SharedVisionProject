class PiecesController < ApplicationController
  # GET /pieces
  # GET /pieces.xml
  def index
    @pieces = Piece.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @pieces }
    end
  end

  # GET /pieces/1
  # GET /pieces/1.xml
  def show
    @piece = Piece.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @piece }
    end
  end

  # GET /pieces/new
  # GET /pieces/new.xml
  def new
    @piece = Piece.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @piece }
    end
  end

  # GET /pieces/1/edit
  def edit
    @piece = Piece.find(params[:id])
  end

  # POST /pieces
  # POST /pieces.xml
  def create
    @piece = Piece.new(params[:piece])

    respond_to do |format|
      if @piece.save
        format.html { redirect_to(@piece, :notice => 'Piece was successfully created.') }
        format.xml  { render :xml => @piece, :status => :created, :location => @piece }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @piece.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /pieces/1
  # PUT /pieces/1.xml
  def update
    @piece = Piece.find(params[:id])

    respond_to do |format|
      if @piece.update_attributes(params[:piece])
        format.html { redirect_to(@piece, :notice => 'Piece was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @piece.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /pieces/1
  # DELETE /pieces/1.xml
  def destroy
    @piece = Piece.find(params[:id])
    @piece.destroy

    respond_to do |format|
      format.html { redirect_to(pieces_url) }
      format.xml  { head :ok }
    end
  end
end
