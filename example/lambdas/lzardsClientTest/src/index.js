'use strict';

const { sendGetRequestToLzards } = require('@cumulus/api/lib/lzards');
const Logger = require('@cumulus/logger');

const log = new Logger({ sender: 'lzardsClientTest' });

/**
 * Receives event trigger from integration tests and calls lzards api wrapper.
 *
 * @param {Object} event - from integration test
 * @returns {Promise} confirmation of test pass or failure
 */
async function handler(event) {
  if (!event.searchParams) {
    log.error(`searchParams not provided in event: ${JSON.stringify(event)}`);
  }

  const response = await sendGetRequestToLzards({ searchParams: event.searchParams });

  log.debug(`Response from lzards API: ${JSON.stringify(response.body)}`);

  return response.body;
}

module.exports = {
  handler,
};