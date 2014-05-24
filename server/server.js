var Blobs = new FS.Collection("blobs", {
    stores: [ new FS.Store.FileSystem("blobs", {path: "~/uploads"})],

});

