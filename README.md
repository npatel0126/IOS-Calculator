# IOS-Calculator 🍎🧑‍💻📱

A replica of the iOS calculator built using HTML, CSS, and JavaScript. This project mimics the design and functionality of the native iOS calculator app with additional features like real-time clock display.

<img width="304" alt="Screenshot 2025-03-31 at 5 33 03 PM" src="https://github.com/user-attachments/assets/693292a2-aaac-40d5-80f9-5d39d77cf5b6" />

## Features

- Realistic iOS calculator UI with notch and status bar
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Special functions (AC, +/-, %)
- Live clock display in the notch
- Number formatting with comma separation
- Responsive button hover effects
- Decimal point functionality
- Error handling for basic operations

## Usage 🧮

**Basic Operations:**
- Number Input: Click number buttons (0-9) to input values
- Arithmetic Operations: Use operator buttons (+, -, ×, ÷) for calculations
- Calculation: Press = to see results
- Decimal: Use . button for decimal values
  
**Special Actions**  
- 🔄 `AC`: Full system reset  
- ± `+/-`: Toggle number sign  
- ÷100 `%`: Percentage conversion  

**Display Features**  
- Dynamic number formatting (e.g., `1,234.56`)  
- ⏰ Live clock in iOS-style notch  
## Code Structure 🏗️

### HTML (`index.html`)
- **Container Structure**
  - Calculator body with iOS-style notch
  - Status bar with live clock
  - Display panel for results
- **Button Grid**
  - 4x5 grid layout for controls
  - Semantic class names for different button types

### CSS (`style.css`)
- **Visual Design**
  - Dark theme with iOS-authentic colors
  - Circular buttons with hover effects
  - Responsive grid layout
- **Special Styling**
  - Zero button spanning two columns
  - Number formatting with comma separation
  - Notch styling with dynamic clock

### JavaScript (`script.js`)
- **Core Functionality**
  ```javascript
  // State management
  let strMemory = null;  // Stores previous value
  let operatorMemory = null;  // Stores active operation
  
  // Key functions
  const getValueStr = () => /*...*/  // Get display content
  const setStrValue = () => /*...*/  // Update display
  const numClick = () => /*...*/     // Handle number input

## Core Mechanics ⚙️

**State Management**  
🧠 `strMemory` (First number)  
🧠 `operatorMemory` (Active operation)

**Execution Flow**  
🔢 `Input → Store → Operate → Calculate → Display`

### Key Functions 📋
| Function           | Description                          |
|--------------------|--------------------------------------|
| `getValueStr()`    | Extract raw number from display      |
| `setStrValue()`    | Format number with commas            |
| `getStrResult()`   | Perform stored mathematical operation|


Design Inspiration: Apple iOS Calculator
