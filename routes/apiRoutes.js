const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", function (req, res) {
    store.getNotes().then(notes => {
        return res.json(notes);
    }).catch(err => res.status(500).json(err));
}
);

router.post("/notes", function (req, res) {
    store.addNotes(req.body).then(notes => {
        return res.json(notes);
    }).catch(err => res.status(500).json(err));
}
);

router.delete("/notes/:id", function (req, res) {
    store.removeNotes(req.params.id).then(() => {
        return res.json({ ok: true });
    }).catch(err => res.status(500).json(err));
}
);

module.exports = router;