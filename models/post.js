module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
      },
      summary: {
        type: DataTypes.TEXT,
      },
      published: {
        type: DataTypes.BOOLEAN,
      },
    });
    return Post;
  };