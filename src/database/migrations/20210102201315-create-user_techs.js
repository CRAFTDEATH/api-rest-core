'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('user_techs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id:{
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        
      },
      tech_id:{
        type: Sequelize.INTEGER,
        references: { model: 'techs', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
        
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('user_techs');

  }
};
