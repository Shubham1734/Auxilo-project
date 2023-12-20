const PersonalDetailsModel = require('../models/Pmodel');
const { generateToken } = require('../auth');
exports.create = async (req, res) => {
    try {
      const personalDetails = await PersonalDetailsModel.create(req.body);
      console.log(generateToken(req))
        console.log(req.body)
        res.status(201).json(personalDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
      const personalDetails = await PersonalDetailsModel.findById(req.params.id);
      console.log(req.body)
      res.json(personalDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.deleteById = async (req, res) => {
    try {
      const deletedPersonalDetails = await PersonalDetailsModel.findByIdAndDelete(req.params.id);
  
      if (!deletedPersonalDetails) {
        return res.status(404).json({ error: 'Personal details not found' });
      }
  
      res.json({ message: 'Personal details deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};


exports.updateById = async (req, res) => {
    try {
      const updatedPersonalDetails = await PersonalDetailsModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Return the updated document
      );
  
      if (!updatedPersonalDetails) {
        return res.status(404).json({ error: 'Personal details not found' });
      }
  
      res.json(updatedPersonalDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

