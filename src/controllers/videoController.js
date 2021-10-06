export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
  console.log(req.params.id);
  return res.send(`Watch Videos #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit Videos");
export const upload = (req, res) => res.send("Upload Videos");
export const deleteVideo = (req, res) => res.send("Delete Videos");
export const search = (req, res) => res.send("Search Video");
