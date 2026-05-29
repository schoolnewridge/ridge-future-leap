export type AdmissionSubmission = {
  id: string;
  submittedAt: string;
  studentFullName: string;
  dateOfBirth: string;
  gender: "Male" | "Female";
  nationality: string;
  religion: string;
  casteSubcaste: string;
  aadhaarNumber: string;
  classApplyingFor: string;
  previousSchoolStudied: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  mobileNumber: string;
  parentEmailId: string;
  doorNoStreet: string;
  villageMandal: string;
  cityTown: string;
  district: string;
};

export const ADMISSIONS_STORAGE_KEY = "new-ridge-admissions-submissions";

export function loadAdmissionSubmissions() {
  if (typeof window === "undefined") {
    return [] as AdmissionSubmission[];
  }

  try {
    const raw = window.localStorage.getItem(ADMISSIONS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AdmissionSubmission[]) : [];
  } catch {
    return [] as AdmissionSubmission[];
  }
}

export function saveAdmissionSubmission(submission: AdmissionSubmission) {
  if (typeof window === "undefined") {
    return;
  }

  const current = loadAdmissionSubmissions();
  window.localStorage.setItem(ADMISSIONS_STORAGE_KEY, JSON.stringify([submission, ...current]));
}
