const patients = [
  {
    name: "Luiz",
    age: 21,
    weight: 63,
    height: 167,
  },
  {
    name: "Felipe",
    age: 26,
    weight: 88,
    height: 163,
  },
];

let patientsNames = [];

for (let patient of patients) {
  patientsNames.push(patient.name);
}

console.log(patientsNames);

function printPatientImc(patient) {
  alert(
    `Paciente ${patient.name} possui o IMC de ${(
      patient.weight /
      (patient.height / 100) ** 2
    ).toFixed(2)}`
  );
}

for (let patient of patients) {
  printPatientImc(patient);
}
