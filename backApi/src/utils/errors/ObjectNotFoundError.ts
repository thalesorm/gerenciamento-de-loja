export default class ObjectNotFoundError extends Error {
    constructor(object: string, id: string) {
        super(`Error: ${object} with id ${id} not found in the database.`);
        this.name = "ObjectNotFoundError";
        Object.setPrototypeOf(this, ObjectNotFoundError.prototype);
    }
};