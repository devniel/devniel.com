import objectPath from 'object-path';

export default class Utils {
  /**
   * Renaming handleKeyPress
   * @param {EventObject} e
   */
  static isEnterKeyPress(e) {
    return e.which === 13 || e.which === 32;
  }

  /**
   * Update specific properties on the state
   * using a certain path (e.g. "data.client.name")
   */
  static updateState = async (path, value, component) => {
    const { state } = component;
    const updatedState = JSON.parse(JSON.stringify(state));
    try {
      objectPath.set(updatedState, path, value);
      await component.setState(updatedState);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };
}

export const { isEnterKeyPress, updateState } = Utils;
