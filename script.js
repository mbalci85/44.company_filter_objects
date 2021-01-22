const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//================================================================

for (company of companies) {
	console.log(company);
}

//================================================================

companies.forEach((company) => console.log(company.name));
console.log('==========================');

companies.push({
	name: 'Company Ten',
	category: 'Auto',
	start: 1985,
	end: 1995,
});

for (company of companies) {
	console.log(company.name);
}
console.log('==========================');

//================================================================

console.log(
	companies
		.filter((company) => company.category == 'Retail')
		.map((company) => company.name),
);

console.log(
	companies
		.filter((company) => company.start >= 1980 && company.end < 1990)
		.map((company) => company.name),
);

console.log(
	companies
		.filter((company) => company.end - company.start >= 10)
		.map((company) => company.name),
);

console.log('==========================');

//================================================================

console.log(companies.map((company) => company.name));
console.log(
	companies.map((company) => [company.name, company.start, company.end]),
);
console.log('==========================');

//================================================================

console.log(
	companies
		.sort((a, b) => a.start - b.start)
		.map((company) => [company.name, company.start]),
);

console.log('==========================');

//================================================================

console.log(
	companies.reduce((acc, value) => acc + (value.end - value.start), 0),
);
