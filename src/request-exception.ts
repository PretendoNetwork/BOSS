export default class RequestException extends Error {
	status: number;

	constructor(message: string, status: number, options?: ErrorOptions | undefined) {
		super(message, options);

		this.status = status;
	}
}