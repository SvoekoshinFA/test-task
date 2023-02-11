module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("document", {
      user: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      begin: {
        type: Sequelize.STRING
      },
      end: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return Document;
  };