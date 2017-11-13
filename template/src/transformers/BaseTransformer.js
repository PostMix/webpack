class BaseTransformer {
  /**
   * Convert all collection from snake_case to camelCase
   *
   * @param items
   */
  static fetchCollection(items) {
    return items.map(item => this.fetch(item));
  }

  /**
   * Convert all collection from camelCase to snake_case
   *
   * @param items
   */
  static sendCollection(items) {
    return items.map(item => this.send(item));
  }

  /**
   * Should be implemented into child classes
   */
  static fetch() {
    throw new TypeError('Please, specify the fetch method!');
  }

  /**
   * Should be implemented into child classes
   */
  static send() {
    throw new TypeError('Please, specify the send method!');
  }
}

export default BaseTransformer;
