// properties by which searches can be done
var sizes = [ 'small', 'medium', 'large' ];
var colors = [ 'red', 'orange', 'yellow', 'green', 'mermaid treasure', 'blue', 'purple' ];

////// global array of items in inventory //////
var items = [];

$( document ).ready( function(){

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
    // add to items array
    items.push( newItem );
  }; // end addObject

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
  }; // end findObject

  var getObjects = function(){
    console.log( 'in getObjects');
    // populate the items array
    ////// TODO: replace the stuff in this function with getting items from the database ////////
    ////// hint: make a get call to the getInventory and use it's response data to fill the items array ////////
  }; // end getObjects


  $('#addItemButton').on('click', function(){
      addObject();
  });//end addItemButton on click function


  // get objects when doc is ready
  getObjects();
  // the below are tests to show what is returned when running findObject
  //addObject( 'blue', 'blueberry', 'small' );
  //findObject( 'blue', 'small' );
  //findObject( 'blue', 'large' );
}); // end doc ready
