const { generateToken } = require('../auth');
const OrganizationModel = require('../models/Omodel');
// actual logic of crud operation
exports.create = async (req, res) => {
    try {
        const organization = await OrganizationModel.create(req.body);
        console.log(generateToken(req))
        console.log(req.body)
        res.status(201).json(organization);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
      const organization = await OrganizationModel.findById(req.params.id);
      console.log(req.body)
      res.json(organization);
    }catch (error) {
      res.status(500).json({ error: error.message });
    }

  };
  
exports.deleteById = async (req, res) => {
    try {
      const deletedOrganization = await OrganizationModel.findByIdAndDelete(req.params.id);
  
      if (!deletedOrganization) {
        return res.status(404).json({ error: 'Organization Details not found' });
      }
  
      res.json({ message: 'Organization Details deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

exports.updateById = async (req, res) => {
    try {
      const updatedOrganization = await OrganizationModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
      );
  
      if (!updatedOrganization) {
        return res.status(404).json({ error: 'Organization not found' });
      }
  
      res.json(updatedOrganization);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

