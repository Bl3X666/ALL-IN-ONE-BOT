const axios = require('axios');
const dotenv = require('dotenv');
const colors = require('./UI/colors/colors');
const client = require('./main');
dotenv.config();
const { PermissionsBitField } = require('discord.js');

module.exports = {
    isServerOnline: function() {
        return serverOnline;
    }
};
