'use strict'

/**
 *  task-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::task-list.task-list')
