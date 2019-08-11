//good query

// query one document
	 Model.findOne({})

// query by Id
	 Model.findById(id)

// Looping over a list of documents and executing command on each
	 User.find({ admin: false }).stream().on('data', function(user) {
		sendMail(user.email)
	}).on('end', function() {
		console.log('send mail to all users')
	});

// 
//	Fetching only certain keys of documents
//	get all keys execept .select("-password -token")	
//
	User.findById(id).select("name email").exec(function (err, user) {
		let item = {
			name: user.name,
			email: user.email
		}

		addToList(item);
	});

//
// 	Maintain an array in a document
// 	push and pull	

	{
	    username: {
	        type: String,
	        default: "Anonymous"
	    },
	    email: {
	        type: String,
	        default: ""
	    },
	    followers: {
	        type: Array
	    }
	}

	//	push
	User.update({
    	_id: userId
	}, {
	    $push: {
	        followers: "foo_bar"
	    }
	}).exec(function(err, user){
	    console.log("foo_bar is added to the list of your followers");
	})

	// pull or remove
	User.update({
	    _id: userId
	}, {
	    $pull: {
	        followers: "foo_bar"
	    }
	}).exec(function(err, user){
	    console.log("foo_bar is removed from the list of your followers");
	})

//
// 	Linking document from different collections, previous example only save username, but what if we want more info about the followers?
//
	var personSchema = Schema({
    _id: Number,
    name: String,
    age: Number,
    stories: [{
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }]
	});
	var storySchema = Schema({
	    _creator: {
	        type: Number,
	        ref: 'Person'
	    },
	    title: String,
	    fans: [{
	        type: Number,
	        ref: 'Person'
	    }]
	});
	var Story = mongoose.model('Story', storySchema);
	var Person = mongoose.model('Person', personSchema);

	// Query
	Story.findOne({
	    title: 'Once upon a timex.'
	})
	.populate('_creator')
	.exec(function (err, story) {
	    if (err) return handleError(err);
	    console.log('The creator is %s', story._creator.name);
	    // prints "The creator is Aaron"
	});
	

//
// Pagination
// 
	db.users.find().skip(pagesize*(n-1)).limit(pagesize)