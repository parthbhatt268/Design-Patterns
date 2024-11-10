# Design-Patterns
This repo will hold exmaple of design pattern and useful article links

=> Creational Pattern
1. Builder Pattern
2. Factory Pattern
3. Singleton Pattern

# Minimal Steps to Create and Run a TypeScript Project

### Step 1: Install TypeScript
Install TypeScript as a dev dependency:
```bash
npm install typescript --save-dev
```

### Step 2: Create TypeScript Configuration
Initialize a `tsconfig.json` file in your project directory:
```bash
npx tsc --init
```

### Step 3: Write TypeScript Code
Create a `src` folder for your TypeScript files and add a new `.ts` file:
```bash
mkdir src
cd src
echo > HelloWorld.ts
```

### Step 4: Run TypeScript Code Directly (Using `ts-node`)
Install `ts-node` as a development dependency to run TypeScript files directly:
```bash
npm install ts-node --save-dev
```
Use `ts-node` to run TypeScript files without the need to compile manually each time:
```bash
npx ts-node src/HelloWorld.ts
```

### Step 5: Add a Start Script to `package.json`
To make it easier to run the project, add a `start` script to your `package.json`:
```json
"scripts": {
  "start": "ts-node src/HelloWorld.ts"
}
```
Now you can run the project with:
```bash
npm start
```

These steps will help you create, compile, and run a simple TypeScript project quickly!
