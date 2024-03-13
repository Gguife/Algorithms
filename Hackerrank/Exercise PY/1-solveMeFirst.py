# a = 7
# b = 3
# result = 10

def solveMeFisrt(a, b):
  sum = a + b
  return sum

message = solveMeFisrt(3, 7)
print({"O resultado da soma é": message})


# Make the fuction more complex

def solveMeComplex(a, b):
  # Verify if they are numbers
  if not(isinstance(a, int) and isinstance(b, int)):
    print("Arguments must be a integers!")
  # Calculate sum
  sum = a + b
  # Return sum
  return sum

messageComplex = solveMeComplex(3, 7)
print({"O resultado da soma é": messageComplex})