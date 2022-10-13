'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  postPhoto.init({
    description: {type:DataTypes.TEXT },
    imageUrl: {type:DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'postPhoto',
  });
  return postPhoto;
};
