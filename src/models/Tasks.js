module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    'Tasks',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      is_completed: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {
      underscored: true,
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  );
  Tasks.associate = () => {};
  return Tasks;
};
