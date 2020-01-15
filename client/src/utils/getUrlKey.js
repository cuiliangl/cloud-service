/**
 * @file getUrlKey
 * @author cuiliang
 * @since 2020.01.14
 */

export default name => {
  return decodeURIComponent((new RegExp(`[?|&]${name}=+([^&;]+?)(&|#|;|$)`).exec(window.location.href) ||
    [undefined, ''])[1].replace(/\+/g, '%20')) ||
    null
}
