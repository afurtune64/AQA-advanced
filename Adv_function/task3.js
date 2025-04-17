function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Не можна виконати ділення на 0");
  }
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Один або два аргументи не є числом");
  }
  return numerator / denominator;
}

try {
  let result = divide(6, 3);
  console.log("Результат ділення", result);
} catch (error) {
  console.error("Error", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  let result = divide(6, "dd");
  console.log(result);
} catch (error) {
  console.error("Error", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  let result = divide(6, 0);
  console.log(result);
} catch (error) {
  console.error("Error", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  let result = divide("", "");
  console.log(result);
} catch (error) {
  console.error("Error", error.message);
} finally {
  console.log("Робота завершена");
}
