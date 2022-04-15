let i = 0;

do {
	const str = prompt(`Enter "break" to stop, "continue" to skip alert`);

	i++;

	if (str === "continue") continue;
	else if (str === "break") break;

	alert(i);
} while (i > 0);
