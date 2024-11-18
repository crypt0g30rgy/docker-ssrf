

const getRoot = async (req, res) => {


    try {

        // Return data
        return res.status(200).json("Vuln API");

    } catch (error) {
        
        // Return a 500 error in case of server failure
        return res.status(500).json({ Error: "Server Error." });
    }
};


module.exports = { getRoot }