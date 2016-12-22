// properties by which searches can be done
var sizes = [ 'small', 'medium', 'large' ];
var colors = [ 'red', 'orange', 'yellow', 'green', 'mermaid treasure', 'blue', 'purple' ];

var items = [];//global array of items in the inventory

$(document).ready(function(){

  var addObject = function(){
    console.log( 'in addObject' );
    // assemble object from new fields
    var newItem = {
      name: $('#addObject').val(),
      color: $('#addColor').val(),
      size: $('#addSize').val()
    }; // end newItem
    console.log( 'adding:', newItem );
    $.ajax({
      type: 'POST',
      url: '/addItem',
      data: newItem,
        success: function(response){
          console.log('back from POST call:', response);
        },//end success function
        error: function(){
          console.log('error with addItem ajax call...');
        }//end error function
    });//end ajax call in addObject
  }; // end addObject function

  var findObject = function( searchColor, searchSize ){
    console.log( 'in findObject. Looking for:', searchColor, searchSize );
    // array of matches
    var matches = [];
    for ( var i = 0; i < items.length; i++ ) {
      if( items[i].color == searchColor && items[i].size == searchSize ){
        // match, add to array
        matches.push( items[i] );
      } // end if
    } // end for
    console.log( 'matches:', matches );
    ////// TODO: display matches
  }; // end findObject function

  var getObjects = function(){
    console.log( 'in getObjects');
    $.ajax({
      type: 'GET',
      url: '/getInventory',
      success: function(response){
        for(var i=0; i<response.length; i++){
        items.push(response[i]);
        console.log('added to items array:', response[i]);
        }//end for loop
      }//end success function
    });//end getObjects ajax
  }; // end getObjects function


  $('#addItemButton').on('click', function(){
      addObject();
      $('#addObject').val('');
      $('#addColor').val('none');
      $('#addSize').val('none');
  });//end addItemButton on click function


  // get objects when doc is ready
  getObjects();
  findObject( 'blue', 'small' );
  findObject( 'blue', 'large' );
}); // end doc ready
