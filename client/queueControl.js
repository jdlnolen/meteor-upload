var Blobs = new FS.Collection("blobs", {
    stores: [ new FS.Store.FileSystem("blobs", {path: "~/uploads"})],

});

Template.queueControl.events({
    'change .fileUploader': function (e) {
        var files = e.target.files;
        for (var i = 0, f; f = files[i]; i++) {
           var fileObj = new FS.File(f);
           Blobs.insert(fileObj); 
           
        }
    }
});


