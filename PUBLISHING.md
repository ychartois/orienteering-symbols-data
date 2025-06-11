# Publishing Guide for orienteering-symbols-data

This guide explains how to publish the package to npm.

## Prerequisites

1. Create an npm account if you don't have one:
   - Visit [npmjs.com](https://www.npmjs.com/signup)
   - Follow the signup process

2. Install Node.js and npm if you haven't already:
   - Download from [nodejs.org](https://nodejs.org/)
   - Or use a package manager for your OS (apt, brew, etc.)

## First-time Setup

1. Login to npm from your terminal:
   ```bash
   npm login
   ```
   - Enter your npm username, password, and email

2. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Update the repository URL in package.json with your actual GitHub repository URL

## Publishing Process

1. Make sure your package.json is correctly set up (name, version, etc.)

2. Run the publish command:
   ```bash
   npm publish
   ```

3. For subsequent updates:
   - Update the version in package.json (following [semantic versioning](https://semver.org/))
   ```bash
   # For patch updates (bug fixes)
   npm version patch
   
   # For minor updates (new features, backward compatible)
   npm version minor
   
   # For major updates (breaking changes)
   npm version major
   ```
   - Then publish again:
   ```bash
   npm publish
   ```

## Testing Before Publishing

1. You can test your package locally before publishing:
   ```bash
   # In your package directory
   npm link
   
   # In another project where you want to use this package
   npm link orienteering-symbols-data
   ```

2. Alternatively, use npm pack to create a tarball:
   ```bash
   npm pack
   ```
   This creates a .tgz file that you can install in another project:
   ```bash
   npm install /path/to/orienteering-symbols-data-1.0.0.tgz
   ```

## Scoped Packages (Optional)

If you want to publish under an npm organization or username (e.g., @yourusername/orienteering-symbols-data):

1. Rename your package in package.json:
   ```json
   {
     "name": "@yourusername/orienteering-symbols-data",
     ...
   }
   ```

2. For first-time publishing of scoped packages:
   ```bash
   npm publish --access public
   ```
