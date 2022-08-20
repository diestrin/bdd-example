'use strict';

/**
 * task-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-list.task-list');
