import Vue from 'vue';

class BaseProxy {
  /**
   * Create base path for queries
   * Add parameters variable to queries
   *
   * @param endpoint
   * @param parameters
   */
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  /**
   * Method allows us to set several parameters
   *
   * @param parameters
   * @returns {BaseProxy}
   */
  setParameters(parameters) {
    Object.keys(parameters).forEach((key) => {
      this.parameters[key] = parameters[key];
    });

    return this;
  }

  /**
   * Method allows us to set a specific parameter
   *
   * @param parameter
   * @param value
   * @returns {BaseProxy}
   */
  setParameter(parameter, value) {
    this.parameters[parameter] = value;

    return this;
  }

  /**
   * Method allows us to remove several parameters
   *
   * @param parameters
   * @returns {BaseProxy}
   */
  removeParameters(parameters) {
    parameters.forEach((parameter) => {
      delete this.parameters[parameter];
    });

    return this;
  }

  /**
   * Method allows us to remove specific parameter
   *
   * @param parameter
   * @returns {BaseProxy}
   */
  removeParameter(parameter) {
    delete this.parameters[parameter];

    return this;
  }

  /**
   * Convert parameters array to string
   *
   * @returns {string}
   */
  getParameterString() {
    const keys = Object.keys(this.parameters);

    const parameterStrings = keys.filter(key => !!this.setParameters[key])
        .map(key => `${key}=${this.parameters[key]}`);

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join(
        '&')}`;
  }

  /**
   * Allows us to send some query via different types of query
   *
   * @param requestType
   * @param url
   * @param data
   * @returns {Promise}
   */
  submit(requestType, url, data = null) {
    return new Promise((resolve, reject) => {
      Vue.$http[requestType](url + this.getParameterString(), data)
          .then((response) => {
            resolve(response.data);
          })
          .catch(({ response }) => {
            if (response) {
              reject(response.data);
            } else {
              reject();
            }
          });
    });
  }
}

export default BaseProxy;
