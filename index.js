var fs = require('fs');
var PNG = require('pngjs').PNG;
var JPEG = require('jpeg-js');

var steph = function () {}

class my_image{
	read_JPG(path){
		console.log("success");
	}
	read_PNG(path){
		fs.createReadStream(path)
		    .pipe(new PNG({ filterType:4 }).parse( function(imageData){ this.imageData = imageData }, function(error, data) { console.log(error, data)}
			));
			console.log("success");
		    // .on('parsed', function() {

		    //     for (var y = 0; y < this.height; y++) {
		    //         for (var x = 0; x < this.width; x++) {
		    //             var idx = (this.width * y + x) << 2;

		    //             // invert color
		    //             this.data[idx] = 255 - this.data[idx];
		    //             this.data[idx+1] = 255 - this.data[idx+1];
		    //             this.data[idx+2] = 255 - this.data[idx+2];

		    //             // and reduce opacity
		    //             this.data[idx+3] = this.data[idx+3] >> 1;
		    //         }
		    //     }

		    //     this.pack().pipe(fs.createWriteStream('out.png'));
		    // });
	}
}



// Sample PNG input k
// fs.createReadStream('in.png')
    // .pipe(new PNG({
    //     filterType: 4
    // }))
    // .on('parsed', function() {

    //     for (var y = 0; y < this.height; y++) {
    //         for (var x = 0; x < this.width; x++) {
    //             var idx = (this.width * y + x) << 2;

    //             // invert color
    //             this.data[idx] = 255 - this.data[idx];
    //             this.data[idx+1] = 255 - this.data[idx+1];
    //             this.data[idx+2] = 255 - this.data[idx+2];

    //             // and reduce opacity
    //             this.data[idx+3] = this.data[idx+3] >> 1;
    //         }
    //     }

    //     this.pack().pipe(fs.createWriteStream('out.png'));
    // });

steph.prototype.read = function(path, cb) {
	var file_type = path.split('.');
	var cur_image = new my_image();
	var type = file_type.slice(-1).toString()
	console.log(type)
	if (type == "jpeg"){
		console.log("here");
		cur_image.read_JPG(path);
	}
	if (type == "png"){
		cur_image.read_PNG(path);
	}
	else{
		console.error("Only JPEG and PNG are accepted.",file_type.slice(-1).toString())
	}
};


steph.prototype.log = function() {
	console.log('yes?');
};

module.exports = steph;