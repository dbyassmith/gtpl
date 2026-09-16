import { beltToAss } from './beltToAss.js';

const dumps = new Map([
	['belt-to-ass', beltToAss]
]);

export function getDump(dumpId) {
	return dumps.get(dumpId) ?? null;
}
