---
sidebar_position: 2
description: Make github self-hosted runner run on the backround.
tags:
- mysql
- query
---

# MySQL Query

### MySQL Query
```
# Select All Data
SELECT * FROM [TABLE];

# Select specific columns
SELECT [COLUMN1], [COLUMN2] FROM [TABLE]; 

# Filter rows based on a condition
SELECT * FROM [TABLE] WHERE [CONDITION];

# Filter by exact value
SELECT * FROM [TABLE] WHERE [COLUMN] = [VALUE];

# Filter using patterns
SELECT * FROM [TABLE] WHERE [COLUMN] LIKE '[PATTERN]';

# Filter by multiple values
SELECT * FROM [TABLE] WHERE [COLUMN] IN ([VALUE1], [VALUE2]);

# Filter by range
SELECT * FROM [TABLE] WHERE [COLUMN] BETWEEN [VALUE1] AND [VALUE2];

# Select with AND
SELECT * FROM [TABLE] WHERE [COLUMN1] = [VALUE1] AND [COLUMN2] = [VALUE2]; 

# Select with OR
SELECT * FROM [TABLE]
WHERE [COLUMN1] = [VALUE1] OR [COLUMN2] = [VALUE2];

# Select with NOT
SELECT * FROM [TABLE]
WHERE NOT [COLUMN] = [VALUE];

# Inner Join Tables
SELECT [TABLE1].[COLUMN1], [TABLE2].[COLUMN2]
FROM [TABLE1]
INNER JOIN [TABLE2] ON [TABLE1].[COMMON_COLUMN] = [TABLE2].[COMMON_COLUMN];

# Left Join Tables
SELECT [TABLE1].[COLUMN1], [TABLE2].[COLUMN2]
FROM [TABLE1]
LEFT JOIN [TABLE2] ON [TABLE1].[COMMON_COLUMN] = [TABLE2].[COMMON_COLUMN];

# Right Join Tables
SELECT [TABLE1].[COLUMN1], [TABLE2].[COLUMN2]
FROM [TABLE1]
RIGHT JOIN [TABLE2] ON [TABLE1].[COMMON_COLUMN] = [TABLE2].[COMMON_COLUMN];

# Full Outer Join Tables
SELECT [TABLE1].[COLUMN1], [TABLE2].[COLUMN2]
FROM [TABLE1]
FULL OUTER JOIN [TABLE2] ON [TABLE1].[COLUMN] = [TABLE2].[COLUMN];

# Aggregates Function
SELECT COUNT(*) FROM [TABLE]; # Count rows in a table
SELECT AVG([COLUMN]) FROM [TABLE]; # Calculate the average value
SELECT SUM([COLUMN]) FROM [TABLE]; # Calculate the sum of a column
SELECT MAX([COLUMN]) FROM [TABLE]; # Get the maximum value
SELECT MIN([COLUMN]) FROM [TABLE]; # Get the minimum value
```