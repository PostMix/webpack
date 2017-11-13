import * as types from './mutation-types';
// import UserTransformer from '@/transformers/UserTransformer';

/**
 * Check if user already authorized
 *
 * @param commit
 */
export const check = ({ commit }) => {
  commit(types.CHECK);
};

/**
 * Log in action
 * TODO: should be implemented
 *
 * @param commit
 * @param payload
 */
export const login = ({ commit }, payload) => {
  console.log(payload);
  /**
   * Example of using transformers
   */
  /*
  proxy.getAll()
      .then((response) => {
        const data = {
          user: UserTransformer.fetchCollection(response.data),
        };

        commit(types.LOGIN, data);
      });
  */
};

/**
 * Log out action
 * TODO should be implemented
 *
 * @param commit
 */
export const logout = ({ commit }) => {
  console.log(commit);
};

export default {
  check,
  login,
  logout,
};
