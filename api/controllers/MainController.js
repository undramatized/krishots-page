/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var Flickr = require("flickrapi"),
 flickrOptions = {
	 api_key: sails.config.FLICKR_KEY,
	 secret: sails.config.FLICKR_SECRET
 };

 console.log(sails.config.FLICKR_KEY, sails.config.FLICKR_SECRET);

module.exports = {

  /**
   * `MainController.index()`
   */
  index: function (req, res) {
		Flickr.tokenOnly(flickrOptions, function(error, flickr) {
			// we can now use "flickr" as our API object,
			// but we can only call public methods and access public data
			flickr.photosets.getPhotos({
				user_id: '13770630@N08',
				photoset_id: '72157672329771974',
				page: 1,
				per_page: 500
			}, function(err, result) {
				// result is Flickr's response
				console.log(result);
				var photos = result.photoset.photo;
	      photos.forEach(function(photo){
	        var url = "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_"+"h.jpg"
	        photo.url = url;
	      })
				return res.view('main/index', { title:"Home", photos: photos })
			});
		});
  },


  /**
   * `MainController.about()`
   */
  about: function (req, res) {
    return res.view('main/about')
  },


  /**
   * `MainController.gallery()`
   */
  gallery: function (req, res) {
    return res.view('main/gallery')
  },


  /**
   * `MainController.pricing()`
   */
  pricing: function (req, res) {
    return res.view('main/pricing')
  },


  /**
   * `MainController.contact()`
   */
  contact: function (req, res) {
    return res.view('main/contact')
  }
};
