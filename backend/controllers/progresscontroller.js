const getprogress = async (req, res) => {
    try {
        // just a test response for now
        res.json({
            message: 'progress route works!',
            user: req.user.id
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'server error' });
    }
};

module.exports = { getprogress };
