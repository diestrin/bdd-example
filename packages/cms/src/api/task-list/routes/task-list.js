'use strict'

/**
 * task-list router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories

module.exports = createCoreRouter('api::task-list.task-list')
