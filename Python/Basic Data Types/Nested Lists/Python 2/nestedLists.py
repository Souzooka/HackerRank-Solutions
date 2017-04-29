names = []
scores = []
for _ in range(int(raw_input())):
  name = raw_input()
  score = float(raw_input())
  names.append(name)
  scores.append(score)

lowestScore = min(scores)
secondLowestScore = None
for score in scores:
  if lowestScore < score < secondLowestScore or (secondLowestScore is None and score != lowestScore):
    secondLowestScore = score

students = []
for idx, val in enumerate(names):
  students.append([names[idx], scores[idx]])

lowestStudents = []
for idx, val in enumerate(students):
  if students[idx][1] == secondLowestScore:
    lowestStudents.append(students[idx][0])

lowestStudents = sorted(lowestStudents)

for student in lowestStudents:
  print student
