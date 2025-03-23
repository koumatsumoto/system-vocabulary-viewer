# Word Search Component Specification

## Overview

The Word Search component provides functionality to search and display a list of vocabulary words from the system's data.

## Components Structure

- `WordSearch`: Main container component that handles the search logic and state
- `WordList`: Component to display the filtered list of words
- `Word`: (existing) Component to display individual word details

## Requirements

### Data Loading

- Load all word data from data.json initially
- Display no words on initial load (empty state)

### Search Input

- Located at the top of the component
- Text input field with the following constraints:
  - Maximum length: 20 characters
  - Purpose: Filter word list based on input text
  - Updates results in real-time as user types
  - Minimum search length: 3 characters
    - Display error message when input is less than 3 characters
    - Only perform search when 3 or more characters are entered

### Search Results

- Display total count of matching results above the word list
- Format: "Found X matches" where X is the number of matching words

### Word List Display

- Shows filtered words based on search criteria
- Initial state: Display no words
- Filtering:
  - Match based on word.name field
  - Case-insensitive search
  - Updates dynamically as user types in search input
  - Shows all matching words (no limit)

### Word Display

- Each word displayed using existing Word component
- Maintains current styling and layout for consistency

## Technical Details

- State Management: React useState for search term and filtered results
- Props Interface for WordSearch:
  ```typescript
  interface WordSearchProps {
    words: WordData[]; // Initial data from data.json
  }
  ```
