import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";
import { type InputHTMLAttributes, type ReactNode, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  type AdmissionSubmission,
  saveAdmissionSubmission,
} from "@/lib/admissions-form";

const admissionSchema = z.object({
  studentFullName: z.string().trim().min(2, "Student full name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["Male", "Female"], { message: "Select a gender" }),
  nationality: z.string().trim().min(2, "Nationality is required"),
  religion: z.string().trim().min(2, "Religion is required"),
  casteSubcaste: z.string().trim().min(2, "Caste / Subcaste is required"),
  aadhaarNumber: z.string().regex(/^\d{12}$/, "Aadhaar number must be 12 digits"),
  classApplyingFor: z.string().min(1, "Class applying for is required"),
  previousSchoolStudied: z.string().trim().min(2, "Previous school studied is required"),
  fatherName: z.string().trim().min(2, "Father name is required"),
  fatherOccupation: z.string().trim().min(2, "Father occupation is required"),
  motherName: z.string().trim().min(2, "Mother name is required"),
  motherOccupation: z.string().trim().min(2, "Mother occupation is required"),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  parentEmailId: z.string().email("Enter a valid email address"),
  doorNoStreet: z.string().trim().min(2, "Door no / Street is required"),
  villageMandal: z.string().trim().min(2, "Village / Mandal is required"),
  cityTown: z.string().trim().min(2, "City / Town is required"),
  district: z.string().trim().min(2, "District is required"),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

const classOptions = [
  "Nursery",
  "LKG",
  "UKG",
  "Grade I",
  "Grade II",
  "Grade III",
  "Grade IV",
  "Grade V",
  "Grade VI",
  "Grade VII",
  "Grade VIII",
  "Grade IX",
  "Grade X",
];

const fieldBaseClass =
  "h-11 rounded-xl border-slate-200/80 bg-white px-4 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:ring-0";

const defaultValues: AdmissionFormValues = {
  studentFullName: "",
  dateOfBirth: "",
  gender: undefined as unknown as "Male" | "Female",
  nationality: "",
  religion: "",
  casteSubcaste: "",
  aadhaarNumber: "",
  classApplyingFor: "",
  previousSchoolStudied: "",
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  mobileNumber: "",
  parentEmailId: "",
  doorNoStreet: "",
  villageMandal: "",
  cityTown: "",
  district: "",
};

function fieldError(message?: string) {
  return message ? <p className="mt-1 text-xs font-medium text-red-600">{message}</p> : null;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">{eyebrow}</span>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-900">{title}</h3>
      {description ? <p className="text-sm leading-relaxed text-slate-600">{description}</p> : null}
    </div>
  );
}

function TextField({
  label,
  placeholder,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-700">{label}</Label>
      <Input className={cn(fieldBaseClass, error && "border-red-300 focus:border-red-400")} placeholder={placeholder} aria-invalid={Boolean(error)} {...props} />
      {fieldError(error)}
    </div>
  );
}

function SelectField({
  label,
  placeholder,
  error,
  value,
  onValueChange,
  children,
}: {
  label: string;
  placeholder: string;
  error?: string;
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-700">{label}</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={cn(fieldBaseClass, "w-full", error && "border-red-300 focus:border-red-400")}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
      {fieldError(error)}
    </div>
  );
}

export function AdmissionsForm() {
  const [successRecord, setSuccessRecord] = useState<AdmissionSubmission | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues,
  });

  const occupationPlaceholder = useMemo(() => "Enter occupation", []);

  const onSubmit = (values: AdmissionFormValues) => {
    const record: AdmissionSubmission = {
      id: `ADR-${Date.now().toString(36).toUpperCase()}`,
      submittedAt: new Date().toISOString(),
      ...values,
    };

    saveAdmissionSubmission(record);
    setSuccessRecord(record);
    reset(defaultValues);
  };

  if (successRecord) {
    return (
      <section className="relative overflow-hidden bg-soft-gradient py-12 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.08),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.14),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-blue-100/80 bg-white p-8 sm:p-10 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.18)]">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-5 font-display text-2xl sm:text-3xl font-semibold text-slate-900">
                Admission enquiry submitted
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                Your enquiry has been saved and our admissions team will review it shortly.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-600">
                <div><span className="font-semibold text-slate-900">Reference ID:</span> {successRecord.id}</div>
                <div className="mt-1"><span className="font-semibold text-slate-900">Student:</span> {successRecord.studentFullName}</div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <Button onClick={() => setSuccessRecord(null)} className="h-11 px-6">
                  Submit another enquiry
                </Button>
                <Button variant="outline" asChild className="h-11 px-6">
                  <Link to="/contact">
                    <Mail className="h-4 w-4" />
                    Contact Admissions Team
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-soft-gradient py-12 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.08),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.14),transparent_36%)]" />
      <div className="absolute inset-0 school-grid opacity-25" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-blue-100/80 bg-white shadow-[0_20px_60px_-28px_rgba(15,23,42,0.18)]">
          <div className="border-b border-slate-200/80 px-6 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                  <Sparkles className="h-3.5 w-3.5 text-gold" /> Admissions Form
                </span>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-slate-900">
                  Admission enquiry form
                </h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
                  Use this form to send an admission enquiry. Fields marked with * are required.
                </p>
              </div>
              <Button variant="outline" asChild className="h-11 px-5">
                <Link to="/contact">
                  <Mail className="h-4 w-4" /> Contact Admissions Team
                </Link>
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-5 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6">
                <SectionTitle
                  eyebrow="Student Details"
                  title="Student information"
                  description="Enter the student’s basic details."
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <TextField label="Student Full Name *" placeholder="Enter student full name" error={errors.studentFullName?.message} {...register("studentFullName")} />
                  </div>
                  <TextField label="Date of Birth *" type="date" error={errors.dateOfBirth?.message} {...register("dateOfBirth")} />
                  <Controller
                    control={control}
                    name="gender"
                    render={({ field }) => (
                      <SelectField label="Gender *" placeholder="Select gender" error={errors.gender?.message} value={field.value ?? ""} onValueChange={field.onChange}>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                      </SelectField>
                    )}
                  />
                  <TextField label="Nationality *" placeholder="Enter nationality" error={errors.nationality?.message} {...register("nationality")} />
                  <TextField label="Religion *" placeholder="Enter religion" error={errors.religion?.message} {...register("religion")} />
                  <TextField label="Caste / Subcaste *" placeholder="Enter caste / subcaste" error={errors.casteSubcaste?.message} {...register("casteSubcaste")} />
                  <TextField
                    label="Aadhaar Number *"
                    placeholder="12-digit Aadhaar number"
                    inputMode="numeric"
                    maxLength={12}
                    error={errors.aadhaarNumber?.message}
                    {...register("aadhaarNumber", { setValueAs: (value) => String(value ?? "").replace(/\D/g, "") })}
                  />
                  <Controller
                    control={control}
                    name="classApplyingFor"
                    render={({ field }) => (
                      <SelectField label="Class Applying For *" placeholder="Select class" error={errors.classApplyingFor?.message} value={field.value ?? ""} onValueChange={field.onChange}>
                        {classOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectField>
                    )}
                  />
                  <div className="md:col-span-2">
                    <TextField label="Previous School Studied *" placeholder="Enter previous school name or N/A" error={errors.previousSchoolStudied?.message} {...register("previousSchoolStudied")} />
                  </div>
                </div>
              </div>

              <div className="space-y-5 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6">
                <SectionTitle eyebrow="Family Details" title="Parent information" description="Enter parent details for contact and verification." />
                <div className="grid gap-4 md:grid-cols-2">
                  <TextField label="Father Name *" placeholder="Enter father name" error={errors.fatherName?.message} {...register("fatherName")} />
                  <TextField label="Father Occupation *" placeholder={occupationPlaceholder} error={errors.fatherOccupation?.message} {...register("fatherOccupation")} />
                  <TextField label="Mother Name *" placeholder="Enter mother name" error={errors.motherName?.message} {...register("motherName")} />
                  <TextField label="Mother Occupation *" placeholder={occupationPlaceholder} error={errors.motherOccupation?.message} {...register("motherOccupation")} />
                </div>
              </div>

              <div className="space-y-5 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6">
                <SectionTitle eyebrow="Contact & Address" title="Reachability and address" description="Provide contact details and the current address." />
                <div className="grid gap-4 md:grid-cols-2">
                  <TextField label="Mobile Number *" placeholder="10-digit mobile number" inputMode="tel" maxLength={10} error={errors.mobileNumber?.message} {...register("mobileNumber", { setValueAs: (value) => String(value ?? "").replace(/\D/g, "") })} />
                  <TextField label="Parent Email ID *" type="email" placeholder="parent@email.com" error={errors.parentEmailId?.message} {...register("parentEmailId")} />
                  <div className="md:col-span-2">
                    <TextField label="Door No / Street *" placeholder="House number and street" error={errors.doorNoStreet?.message} {...register("doorNoStreet")} />
                  </div>
                  <TextField label="Village / Mandal *" placeholder="Enter village / mandal" error={errors.villageMandal?.message} {...register("villageMandal")} />
                  <TextField label="City / Town *" placeholder="Enter city / town" error={errors.cityTown?.message} {...register("cityTown")} />
                  <div className="md:col-span-2">
                    <TextField label="District *" placeholder="Enter district" error={errors.district?.message} {...register("district")} />
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                Your submission is stored securely and reviewed by the admissions team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" asChild className="h-11 px-6">
                  <Link to="/contact">
                    <Mail className="h-4 w-4" /> Contact Admissions Team
                  </Link>
                </Button>
                <Button type="submit" className="h-11 px-6" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Admission Enquiry"}
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
