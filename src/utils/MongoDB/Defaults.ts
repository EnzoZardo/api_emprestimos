const RequiredString = {
	type: String,
	required: true,
} as const;

const RequiredNumber = {
	type: Number,
	required: true,
} as const;

export { RequiredString, RequiredNumber };
