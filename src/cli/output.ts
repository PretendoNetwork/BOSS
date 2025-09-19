export type FormattableObject = Record<string, any>;
export type FieldMapping = Record<string, string>;
export type FormatOption = 'json' | 'pretty';

function mapOutputObject(obj: FormattableObject, mapping: FieldMapping): FormattableObject {
	const entries = Object.entries(obj);
	const mappedEntries = entries.map((v) => {
		const newKey = mapping[v[0]] ?? v[0];
		return [newKey, v[1]] as const;
	});
	return Object.fromEntries(mappedEntries);
}

export function logOutputList<T extends FormattableObject>(format: FormatOption, items: T[], mapping: FieldMapping = {}): void {
	if (format === 'json') {
		console.log(JSON.stringify(items, null, 2));
		return;
	}
	const mappedItems = items.map(item => mapOutputObject(item, mapping));
	console.table(mappedItems);
}

export function logOutputObject<T extends FormattableObject>(format: FormatOption, obj: T, mapping: FieldMapping = {}): void {
	if (format === 'json') {
		console.log(JSON.stringify(obj, null, 2));
		return;
	}
	console.log(mapOutputObject(obj, mapping));
}
