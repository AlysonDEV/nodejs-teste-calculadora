const expression_teste1 = "2 + (3+(4 *(3 + (2 + 5 * 10)))) * 5 + ( 9 - 6)";
// const expression_teste1 = "2 + (3+(4 *(3 + 2))) * 5 + ( 9 - 6)";
// 120 👌

// const expression_teste1 = "2+3*4";
// 14 👌

// const expression_teste1_new = "2+3*5+3";
// 20 👌

// const expression_teste2 = "2+3*5"; !!
// certo 17 👌

// const expression_teste2 = "5*3+2"; !!
// certo 17 👌

// const expression_teste1 = "2 * (3+4) * 5";
// 70 👌

function isLevelOne(expression_calculation: string) {
	const peso = ["/", "*"];
	return peso.some((operatorTemp) =>
		expression_calculation.includes(operatorTemp),
	);
}

function isLevelTwo(expression_calculation: string) {
	const peso = ["+", "-"];
	return peso.some((operatorTemp) =>
		expression_calculation.includes(operatorTemp),
	);
}

// function isComputable(expression_calculation: string) {
// 	const operations = ["/", "*", "+", "-"];
// 	return operations.some((operatorTemp) =>
// 		expression_calculation.includes(operatorTemp),
// 	);
// }

function resolveExpressionSimple(expression_calculation: string) {
	let t1 = replaceSpaces(expression_calculation);
	let calculation = 0;
	console.log("Expressão:", t1);

	while (isLevelOne(t1)) {
		let expressionToReplace = "";
		const valuesForCalculations: string[] = t1.split(/[+\-*/]/);
		let countOperators = 0;
		// let tempT1 = "";
		// let activePostion = 0;

		for (let char = 0; t1.length - 1 > char; char++) {
			if (t1[char] === "*" || t1[char] === "/") {
				calculation = calculationByOperator(
					valuesForCalculations[countOperators],
					valuesForCalculations[countOperators + 1],
					t1[char],
				);
				expressionToReplace =
					valuesForCalculations[countOperators] +
					t1[char] +
					valuesForCalculations[countOperators + 1];
				break;
			}

			if (
				t1[char] === "*" ||
				t1[char] === "/" ||
				t1[char] === "+" ||
				t1[char] === "-"
			) {
				countOperators++;
			}
		}
		t1 = t1.replace(expressionToReplace, calculation.toString());
	}

	while (isLevelTwo(t1)) {
		let expressionToReplace = "";
		const valuesForCalculations: string[] = t1.split(/[+\-*/]/);
		let countOperators = 0;
		// let tempT1 = "";
		// let activePostion = 0;

		for (let char = 0; t1.length - 1 > char; char++) {
			if (t1[char] === "+" || t1[char] === "-") {
				calculation = calculationByOperator(
					valuesForCalculations[countOperators],
					valuesForCalculations[countOperators + 1],
					t1[char],
				);
				expressionToReplace =
					valuesForCalculations[countOperators] +
					t1[char] +
					valuesForCalculations[countOperators + 1];
				break;
			}

			if (
				t1[char] === "*" ||
				t1[char] === "/" ||
				t1[char] === "+" ||
				t1[char] === "-"
			) {
				countOperators++;
			}
		}
		t1 = t1.replace(expressionToReplace, calculation.toString());
	}
	// 	if (isLevelOne(t1)) {
	// 		for (let n = 0; n < t1.length; n++) {
	// 			switch (t1[n]) {
	// 				case "+":
	// 				case "-":
	// 					if (tempT1 === "") {
	// 						tempT1 += valuesForCalculations[activePostion] + t1[n];
	// 						// activePostion += activePostion === 0 ? 1 : 2;
	// 						activePostion++;
	// 					} else {
	// 						tempT1 +=
	// 							t1[n] +
	// 							(valuesForCalculations.length > activePostion
	// 								? valuesForCalculations[activePostion]
	// 								: "");
	// 					}
	// 					break;
	// 				case "*":
	// 					tempT1 += (
	// 						parseInt(valuesForCalculations[activePostion]) *
	// 						parseInt(valuesForCalculations[activePostion + 1])
	// 					).toString();
	// 					activePostion += activePostion === 0 ? 1 : 2;
	// 					break;
	// 				case "/":
	// 					tempT1 += (
	// 						parseInt(valuesForCalculations[activePostion]) /
	// 						parseInt(valuesForCalculations[activePostion + 1])
	// 					).toString();
	// 					activePostion += activePostion === 0 ? 1 : 2;
	// 					break;
	// 			}
	// 		}
	// 		t1 = tempT1;
	// 	} else if (isLevelTwo(t1)) {
	// 		valuesForCalculations = t1.split(/[+\-*/]/);
	// 		for (let n = 0; n < t1.length; n++) {
	// 			switch (t1[n]) {
	// 				case "+":
	// 					calculation +=
	// 						calculation === 0
	// 							? parseInt(valuesForCalculations[activePostion]) +
	// 								parseInt(valuesForCalculations[activePostion + 1])
	// 							: parseInt(valuesForCalculations[activePostion + 1]);
	// 					activePostion += activePostion === 0 ? 1 : 2;
	// 					break;
	// 				case "-":
	// 					calculation =
	// 						calculation === 0
	// 							? parseInt(valuesForCalculations[activePostion]) -
	// 								parseInt(valuesForCalculations[activePostion + 1])
	// 							: parseInt(valuesForCalculations[activePostion + 1]);
	// 					activePostion += activePostion === 0 ? 1 : 2;
	// 					break;
	// 			}
	// 		}
	// 		t1 = calculation.toString();
	// 	}
	// }

	return t1;
}

function calculationByOperator(
	value1: string,
	value2: string,
	operator: string,
) {
	let result = 0;
	switch (operator) {
		case "/":
			result = parseInt(value1) / parseInt(value2);
			break;
		case "*":
			result = parseInt(value1) * parseInt(value2);
			break;
		case "+":
			result = parseInt(value1) + parseInt(value2);
			break;
		case "-":
			result = parseInt(value1) - parseInt(value2);
			break;
	}

	return result;
}

function isPriority(expression_calculation: string) {
	const letter = "(";
	return expression_calculation.includes(letter);
}

function replaceSpaces(expression_calculation: string) {
	return expression_calculation.replaceAll(" ", "").trim();
}

// function extractExpressionAdvancedToSimpleExpression(
// 	expression_calculation: string,
// ) {
// 	const tempExpression = replaceSpaces(expression_calculation);
// 	let newExpression = "";
// 	const separatorSimbols = ["(", ")"];
// 	const postiontionStart = tempExpression.indexOf(separatorSimbols[0]) + 1;
// 	const postiontionEnd = tempExpression.indexOf(separatorSimbols[1]);

// 	newExpression = tempExpression.substring(postiontionStart, postiontionEnd);

// 	const countEndSimbols = newExpression.match(/[(]/)?.index ?? 0;

// 	for (let countLoop = 0; countLoop < countEndSimbols; countLoop++) {
// 		newExpression += separatorSimbols[1];
// 	}

// 	return newExpression;
// }

let tempExpression = expression_teste1;

while (isPriority(tempExpression)) {
	const newExpression = replaceSpaces(tempExpression);
	console.log("Expressão: " + newExpression);
	let activeExpression = "";
	const possitionLastExpression = [0, 0];
	for (let countChar = 0; newExpression.length > countChar; countChar++) {
		if (newExpression[countChar] === "(" && possitionLastExpression[1] === 0) {
			possitionLastExpression[0] = countChar;
		} else if (
			newExpression[countChar] === ")" &&
			possitionLastExpression[1] === 0
		) {
			possitionLastExpression[1] = countChar + 1;
			activeExpression = newExpression.substring(
				possitionLastExpression[0],
				possitionLastExpression[1],
			);
			break;
		}
	}

	const resolve = resolveExpressionSimple(
		activeExpression.replace("(", "").replace(")", ""),
	);
	tempExpression = newExpression.replace(activeExpression, resolve);
	//console.log(newExpression);
	//console.log(activeExpression);
}

tempExpression = resolveExpressionSimple(tempExpression);

console.log(tempExpression);

/*
let tempExpression = expression_teste1;
let resolve = [];


while (isPriority(tempExpression)) {
  let newExpression = replaceSpaces(tempExpression);
  let 
  while (isPriority(newExpression)) {
    let t1 = extractExpressionAdvancedToSimpleExpression(newExpression);
    resolve.push(t1)
  
    newExpression = newExpression.replace( `(${t1})`, "?" + (resolve.length - 1));
  }
  tempExpression = newExpression;
}



console.log(extractExpressionAdvancedToSimpleExpression(expression_teste1));
*/
