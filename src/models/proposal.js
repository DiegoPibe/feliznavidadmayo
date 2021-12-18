const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class proposal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.candidate);
    }
  }
  proposal.init({
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    candidateId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'proposal',
  });
  return proposal;
};
