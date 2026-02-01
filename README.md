# Test Repo 04: High Drift Messy Codebase

## Purpose
This test repository represents a **chaotic project with terrible design consistency**. It should trigger Buoy's **HIGH DRIFT** detection with many issues flagged.

## What This Tests
- Detection of inconsistent color usage (50+ unique colors)
- Random spacing values (13px, 17px, 23px, etc.)
- Mix of styling approaches (inline, Tailwind arbitrary values, CSS)
- Deprecated patterns
- High drift detection and recommendations

## Intentional Problems
- **50+ different colors** used randomly across components
- **No color tokens** - hardcoded hex values everywhere
- **Arbitrary spacing** - values like 13px, 17px, 23px, 31px
- **Mixed styling approaches** - inline styles, arbitrary Tailwind, raw CSS
- **Inconsistent patterns** - no standardized component structure
- **Deprecated HTML** - center tags, font tags, etc.

## Expected Buoy Behavior
- Should detect HIGH DRIFT mode
- Should flag 50+ drift issues
- Should recommend establishing design tokens
- Should suggest refactoring to consistent patterns

## Drift Categories Expected
1. Color inconsistencies
2. Spacing inconsistencies
3. Typography inconsistencies
4. Deprecated pattern usage
5. Inline style overuse
6. Arbitrary Tailwind values
