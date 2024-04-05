export type TDoctor = {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number | undefined;
  gender: "MALE" | "FEMALE";
  apointmentFee: number | undefined;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialties?: TSpecialties[];
};

export type TSpecialties = {
  specialtiesId: string;
  isDeleted?: null;
};

export type TDoctorFormData = {
  doctor: TDoctor;
  password: string;
};
