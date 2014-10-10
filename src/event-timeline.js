/**
 * Small JavaScript based framework to generate and 
 * keep track of real world events and its milestones.
 * 
 * MIT License
 */

 
!(function(root, doc, factory)	{

	window.ETL = factory(root, doc);

})(this, document, function(window, document)	{
	
	var jr = {

		/**
		 * Multipurpose function to attach event handlers
		 */

		on: function(event, element, callback) {
			if (document.addEventListener)
				element.addEventListener(event, callback, false);
			else
				element.attachEvent('on' + event, callback);
		},


		/**
		 * Method to check if DOM is ready
		 */		

		domReady: function(callback) {
			if (document.addEventListener)
				document.addEventListener('DOMContentLoaded', callback);
			else {
				document.attachEvent('onreadystatechange', function() {
					if (document.readyState === 'interactive')
						callback();
					});
			}
		},


		/**
		 * Method to check if DOM is loaded
		 */
		
		domLoaded: function(callback) {
			return jr.on('load', window, callback);
		}
	};

	return jr;
});


/**
 * Default prototype function
 */

ETL.Event = (function()	{


	/**
	 * Default Event class
	 */
	
	function Event( title, type, location ) {
		if (arguments.length < 0 || title === null) 
			this.title = '';
		else
			throw new Error('A title is required.');

		if (arguments.length < 1 || type === null) 
			this.type = '';
		else
			this.type = type;

		if (arguments.length < 2 || location === null) 
			this.location = '';
		else
			this.location = location;

		return this;
	};

	/**
	 * An array to store collection of Milestones 
	 * associated with Event
	 */
	
	Event.prototype.Milestones = [];


	/**
	 * Create a Milestone for an Event and associate it
	 */
	
	Event.prototype.Milestone = function( title, description, date, featured, media ) {
		if (arguments.length < 0 || title === null)
			this.title = '';
		else
			this.title = title;

		if (arguments.length < 1 || description === null) 
			this.description = '';
		else
			this.description = description;

		if (arguments.length < 2 || date === null) 
			this.date = new Date().toString();
		else
			this.date = date;

		if (arguments.length < 3 || featured === null) 
			this.featured = false;
		else
			this.featured = featured;

		if (arguments.length < 4 || media === null) 
			this.media = [];
		else
			this.media = media;

		return this;
	};

	return Event;

})();