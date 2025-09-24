export type FormattableObject = Record<string, any>;
export type FormatOption = 'json' | 'pretty';

function preprocessObject(obj: FormattableObject, ops: FormattedOutputOptions): FormattableObject {
	const onlyIncludeKeys = ops.onlyIncludeKeys;
	if (!onlyIncludeKeys) {
		return obj;
	}

	const entries = Object.entries(obj);
	const filteredEntries = entries.filter(v => onlyIncludeKeys.includes(v[0]));
	return Object.fromEntries(filteredEntries);
}

function makePrettyOutputObject(obj: FormattableObject, ops: FormattedOutputOptions): FormattableObject {
	const entries = Object.entries(obj);
	const prettifiedEntries = entries.map((v) => {
		const value = ops.prettify ? ops.prettify(v[0], v[1]) : v[1];
		return [v[0], value];
	});
	const mappedEntries = prettifiedEntries.map((v) => {
		const newKey = ops.mapping?.[v[0]] ?? v[0];
		return [newKey, v[1]] as const;
	});
	return Object.fromEntries(mappedEntries);
}

function jsonReplacer(key: string, value: any): any {
	if (typeof value === 'bigint') {
		return Number(value);
	}
	return value;
}

export type FormattedOutputOptions<T extends FormattableObject = any> = {
	format: FormatOption;
	onlyIncludeKeys?: Array<keyof T>;
	mapping?: Partial<Record<keyof T, string>>;
	prettify?: (key: string, value: any) => any;
};

export function logOutputList<T extends FormattableObject>(items: T[], ops: FormattedOutputOptions<T>): void {
	const processedItems = items.map(v => preprocessObject(v, ops));
	if (ops.format === 'json') {
		console.log(JSON.stringify(processedItems, jsonReplacer, 2));
		return;
	}

	const mappedItems = processedItems.map(item => makePrettyOutputObject(item, ops));
	console.table(mappedItems);
}

export function logOutputObject<T extends FormattableObject>(obj: T, ops: FormattedOutputOptions<T>): void {
	const processedObj = preprocessObject(obj, ops);
	if (ops.format === 'json') {
		console.log(JSON.stringify(processedObj, jsonReplacer, 2));
		return;
	}

	console.log(makePrettyOutputObject(processedObj, ops));
}
