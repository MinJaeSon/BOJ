n = int(input())
students = []
for i in range(n):
    name, korean, english, math = input().split()
    student = [name, korean, english, math]
    students.append(student)

students.sort(key=lambda x: (-int(x[1]), int(x[2]), -int(x[3]), x[0]))
for i in range(n):
    print(students[i][0])