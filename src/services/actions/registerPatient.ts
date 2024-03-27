"use server";

export const registerPatient = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/user/create-patient`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  const patientInfo = await res.json();

  return patientInfo;
};
