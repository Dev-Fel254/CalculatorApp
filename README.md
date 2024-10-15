# CalculatorApp
A simple browser-based calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a clean interface and handles operations with two numbers, including error handling for division by zero and long decimals.

Installation
To get started with the project:

1. Clone the repository:
git clone https://github.com/Dev-Fel254/CalculatorApp.git

2. Navigate to the project directory:
cd CalculatorApp

3. Open index.html in your browser: You can simply double-click the index.html file or use a live server such as the VSCode Live Server extension.

No additional installation or dependencies are needed as this is a front-end-only project.

Possible Vulnerabilities
    1. Input Limitations: The calculator only supports basic arithmetic and operates on a single pair of numbers at a time. Attempting complex operations (like multiple operators in a row without pressing =) may result in incorrect calculations.
    2. Division by Zero: While division by zero is handled gracefully, it's advisable to avoid any unconventional mathematical operations.
    3. Rounding Issues: Long decimal results are rounded for display. However, this may cause minor precision errors in calculations involving many decimal points.