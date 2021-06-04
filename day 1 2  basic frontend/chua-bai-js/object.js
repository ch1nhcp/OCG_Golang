function calculateAverageAgeOfStudents(students) {
  let sumAge = students.reduce((total, student) => {
    return total + student.age;
  }, 0);

  return sumAge / student.length;
}

function sortStudentsByAgeDesc(students) {
  return students.sort((a, b) => {
    return b.age - a.age;
  });
}

function sortStudentsByNameAsc(students) {
  return students.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
}

function filterStudentsByNameBeginWithH(students) {
  return students.filter((student) => student.name.toLowerCase()[0] == "h");
}
