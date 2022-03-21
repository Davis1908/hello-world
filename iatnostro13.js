define(['pipAPI', 'https://davis1908.github.io/hello-world/codicegrande13.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Mine', //Will appear in the data.
		    title : {
		      media : {word : 'Mine'}, //Name of the category presented in the task.
		      css : {color:'#191970','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 's13.jpg'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#191970','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Detachment', //Attribute label
			title : {
				media : {word : 'Detachment'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Indifferent'},
				{word: 'Stranger'},
				{word: 'Disinterested'},
				{word: 'Trivial'},
				{word: 'Extraneous'},
				{word: 'Impersonal'},
			       
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Attachment', //Attribute label
			title : {
				media : {word : 'Attachment'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Affectionate'},
				{word: 'Familiar'},
				{word: 'Relevant'},
				{word: 'Meaningful'},
				{word: 'Loved'},
				{word: 'Intimate'},
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://davis1908.github.io/hello-world/'
  }}
  );
  });
