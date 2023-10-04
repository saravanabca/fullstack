export default (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure the username is required
      unique: true // Ensure the username is unique
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure the email is required
      unique: true // Ensure the email is unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false // Ensure the password is required
    }
  });

  return User;
};
