const Movie = require("../models/parent").Movie;
const Review = require("../models/parent").Review;

function average(arr){
    var sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

module.exports = {
    getParents: function(req,res){
        Movie.find({},function(err,parents){
            if(err){
                console.log("Error Getting Parents", err);
            }else{
                res.json({message:"Success", data: parents});
            }
        })
    },

    createParent: function(req,res){
        let newParent = new Movie({title: req.body.title, ratings: req.body.ratings});

        newParent.avgRating = newParent.ratings[0].rating;

        console.log(newParent);

        newParent.save(function(err){
            if(err){
                console.log("Error Creating Movie", err);
            }else{
                res.json({message:"Success", data: newParent});
            }
        })
    },

    createChild: function(req,res){
        // console.log(req.params.id,"Id");
        // console.log(req.body);
        // Movie.findByIdAndUpdate(req.params.id,{
        //     $push:{
        //         ratings:{
        //             rating: req.body.rating,
        //             comment: req.body.comment
        //         }

        // }},
        //     function(err){
        //         if(err){
        //             console.log("Error adding Review", err);
        //         }else{
        //             console.log("Added Review");
        //         }
        //     })

            // Review.create(req.body, function (err, data) {
            //     console.log(req.params);
            //     console.log(req.body);
            //     if (err) {
            //         console.log("err creating child");
            //         res.json({ errorMsg: "Error", error: err });
            //     } else {
            //         Movie.updateOne({ _id: req.params.id }, { $push: { ratings: req.body } }, function (err,movie) {
            //             if (err) {
            //                 console.log("Error connecting parent");
            //                 res.json({ errorMsg: "Error", error: err });
            //             } else {
            //                 console.log("Successfully added child");
            //                 // Movie.updateOne({_id:req.params.id},{
            //                 //     $set: {
            //                 //         avgRating : average(movie.ratings)
            //                 //     }
            //                 // })
            //                 res.json({ message: "Success", data: data });
            //             }
            //         });

            //     }
            // });
            // let review = new Review({name: req.body.name, rating: req.body.rating, comment: req.body.comment})

            // console.log(review);

            // Movie.findByIdAndUpdate(req.params.id,{$push: {ratings: review}},function(err) {
            //     if(err){
            //         console.log("Error adding rating")
            //     }else{
            //         console.log("Added rating");
            //     }
            // });

            console.log(req.body, "This is the body");

            Review.create(req.body,function(err, review){
                if(err){
                    console.log("error creating review", err);
                }else{
                    Movie.findByIdAndUpdate(req.params.id,{
                        $push:{
                            ratings: review
                        }
                    },
                        function(err){
                            if(err){
                                console.log(err);
                            }else{
                                res.json({message:"Success",data:review});
                            }
                        }
                    )
                }
            })
        
    },

    deleteParent: function(req,res){
        Movie.findByIdAndDelete(req.params.id,function(err){
            if(err){
                console.log("Error Deleting Movie", err);
            }else{
                console.log("Successfully Deleted Movie")
            }
        })
    },

    updateParent: function(req,res){
        Movie.findByIdAndUpdate(req.params.id,{
            $set:{
                title: req.body.title
            }
        },function(err){
            if(err){
                console.log("Error updating Movie", err);
            }else{
                console.log("Movie Updated");
            }
        })
    },

    getParent: function(req,res){
        console.log("Reached here");
        Movie.findById(req.params.id,function(err,parent){
            if(err){
                console.log("Error getting Movie", err);
            }else{
                res.json({message: "Success",data: parent})
            }
        })
    },

    deleteChild: function (req, res) {
        // console.log("Got to models");
        // Movie.updateOne({ _id: req.params.id }, { $pull: { ratings: {_id:req.params.cid }} }, function (err, data) {
        //     if (err) {
        //         console.log("err deleting child")
        //         res.json({ errorMsg: "Error", error: err });
        //     } else {
        //         Child.remove({ _id: req.params.cid }, function (err, data2) {
        //             if (err) {
        //                 console.log("err deleting child")
        //                 res.json({ errorMsg: "Error", error: err });
        //             } else {
        //                 console.log("Successfully deleted child");
        //                 res.json({ message: "Success", data: data2 });
        //             }
        //         })
        //     }
        // });

        // Movie.findByIdAndUpdate(req.params.pid, {
        //     $pull:{
        //         ratings:{_id: req.params.cid}
        //     },
        //     function(err,movie){
        //         if(err){
        //             console.log(err);
        //         }else{
        //             console.log("review removed");
        //         }
        //     }
        // })

        console.log("Got to models");
        Movie.updateOne({ _id: req.params.pid }, { $pull: { ratings: {_id:req.params.cid }} }, function (err, data) {
            if (err) {
                console.log("err deleting child")
                res.json({ errorMsg: "Error", error: err });
            } else {
                Review.remove({ _id: req.params.cid }, function (err, data2) {
                    if (err) {
                        console.log("err deleting child")
                        res.json({ errorMsg: "Error", error: err });
                    } else {
                        console.log("Successfully deleted child");
                        res.json({ message: "Success", data: data2 });
                    }
                })
            }
        });
    
    }
}