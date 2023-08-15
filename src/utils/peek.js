"use strict"

/**
 * Utilidad para realizar logs, similar a console.log.
 *
 * @template {T} T
 * @param {T} x
 * @returns {T}
 */

const peek = x => {
	console.log(x)
	return x
}

export default peek
