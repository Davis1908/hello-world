define(['pipAPI', 'https://raw.githubusercontent.com/Davis1908/hello-world/main/codicegrande.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Your product', //Will appear in the data.
		    title : {
		      media : {word : 'Your product'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'https://polimi.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_eQjz9DdY57iUVv0'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Detachment', //Attribute label
			title : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Indifferent'},
				{word: 'Stranger'},
				{word: 'Disinterested'},
				{word: 'Trivial'},
				{word: 'Emotionless'},
				{word: 'Extraneous'},
				{word: 'Impersonal'},
				{word: 'Neutral'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Attachment', //Attribute label
			title : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Affectionate'},
				{word: 'Familiar'},
				{word: 'Relevant'},
				{word: 'Meaningful'},
				{word: 'Loved'},
				{word: 'Bonded'},
				{word: 'Intimate'},
				{word: 'Dear to me'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://polimi.eu.qualtrics.com/Q/GraphicsSection?ContextLibraryID=UR_0oeERe1WGBbb8Am&LibraryID=UR_0oeERe1WGBbb8Am'
  }}
  );
  });
