import BaseTransformer from './BaseTransformer';

class UserTransformer extends BaseTransformer {
  /**
   * Convert snake_case to camelCase
   *
   * @param user
   * @returns \{{id, firstName: string, lastName: string}}
   */
  static fetch(user) {
    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
    };
  }

  /**
   * Convert camelCase to snake_case
   *
   * @param user
   * @returns \{{id, firstName: string, lastName: string}}
   */
  static send(user) {
    return {
      id: user.id,
      first_name: user.firstName,
      last_name: user.lastName,
    };
  }
}

export default UserTransformer;
