const db = require("../models");
const Idea = db.idea;
const User = db.user;

//giving back feed (all existing Ideas)
//--> old -> new : feedpag!
exports.feed = (req, res) => {
    Idea.find((err, idea) => {
        if (err) {
          return res.status(500).send(err);
        } else {

          return res.status(200).send(idea)
        }
      })
      .populate("author", "username");
};


const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};

  
// Retrieve all Tutorials from the database: old ... new
// exports.feedpag = (req, res) => {
//     const { page, size } = req.query;
//     console.log(req.query)
//     const { limit, offset } = getPagination(page, size);
  
//     Idea.paginate({}, { offset, limit })            //condition in {] if needed
//       .then((data) => {
//         res.send({data});
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials.",
//         });
//       });
// };




exports.feedpag_new = (req, res) => {
  const { page, size } = req.query;
  console.log(req.query)
  const { limit, offset } = getPagination(page, size);

  var options = {
    offset,
    limit,
    sort: {createdAt: -1},
    populate: [{path:"author", select: "username"}, {path: "userDownvotes", select: "username"}, {path: "userUpvotes", select: "username"}]
  };
 

  Idea.paginate({}, options )  
  .then((data) => {
      
    res.send({data});
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving ideas feed.",
    });
  })
};


