# Part 2 Answers

1. 3 is printed as the length of array is 3, i is declared within the scope.
2. 150 is printed as its (1-0.5) * 300 = 150. The last iteration dsicountedPrice = 300.
3. 150 is printed as (150*100)/100 rounded is 150, 150 is from discountedPrice calculated
4. [50, 100, 150] as [100, 200, 300] is the input, the function cuts everything in half.
5. error: nothing gets printed as let is limited to scope of for loop.
6. error: nothing gets printed as let is limited to scope of for loop. 
7. 150 gets printed as the varible is declared in function which console has access to.
8. [ 50, 100, 150 ] gets returned as input is [100, 200, 300], 0.5 which makes function execute = half of input.
9. error: i is in scope of for loop
10. 3 is printed as that value does not change
11. [ 50, 100, 150 ] gets returned as input is [100, 200, 300], 0.5 which makes function execute = half of input. because for loop resets, const is reset as well.

## Data Types

A. student.name
B. student['Grad Year']
C. student.greeting()
D. student["Favorite Teacher"].name
E. student.courseLoad[0]

## Arithmetic

A. "32"
B. 1
C. 3
D. "3null"
E. 4
F. 0
G. "3undefined"
H. NaN

## Comparison

A. true
B. false
C. true
D. false
E. false
F. true

## Diff between == and ===

=== checks both type and value, while == does not check data type. 

## Functions

The function modifyArray multiplies each element in the input array by 2. It does this by first creating an empty array, iterating through input array it calls callback function which is doSomething(multiplies by 2) then pushes to the new array. The output in this example would be [2,4,6]

## Print nums

output:
1
4
3
2
