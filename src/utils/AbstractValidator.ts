type Validation<T> = {
	field: (x: T) => keyof T;
	conditions: ((x: keyof T) => boolean)[];
	when?: (x: keyof T) => boolean;
};

class AbstractValidator<T> {
	private readonly validations: Validation<T>[] = [];

	public RuleFor(field: (x: T) => keyof T): this {
		this.validations.push({
			field,
			conditions: [],
		});
		return this;
	}

	public NotEmpty(): this {
		this.getLast().conditions.push((x) => x != '');
		return this;
	}

	public NotNull(): this {
		this.getLast().conditions.push((x) => x != null && x != undefined);
		return this;
	}

	private getLast(): Validation<T> {
		return this.validations.slice(-1)[0];
	}
}
