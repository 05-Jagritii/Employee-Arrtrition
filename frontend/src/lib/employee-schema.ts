import { z } from "zod";

export const employeeSchema = z.object({
  Age: z.number().min(18).max(100),

  BusinessTravel: z.enum([
    "Travel_Rarely",
    "Travel_Frequently",
    "Non-Travel",
  ]),

  DailyRate: z.number().min(0),

  Department: z.enum([
    "Sales",
    "Research & Development",
    "Human Resources",
  ]),

  DistanceFromHome: z.number().min(0),

  Education: z.number().min(1).max(5),

  EducationField: z.enum([
    "Life Sciences",
    "Medical",
    "Marketing",
    "Technical Degree",
    "Human Resources",
    "Other",
  ]),

  EnvironmentSatisfaction: z.number().min(1).max(4),

  Gender: z.enum(["Male", "Female"]),

  HourlyRate: z.number().min(0),

  JobInvolvement: z.number().min(1).max(4),

  JobLevel: z.number().min(1).max(5),

  JobRole: z.enum([
    "Sales Executive",
    "Research Scientist",
    "Laboratory Technician",
    "Manufacturing Director",
    "Healthcare Representative",
    "Manager",
    "Sales Representative",
    "Research Director",
    "Human Resources",
  ]),

  JobSatisfaction: z.number().min(1).max(4),

  MaritalStatus: z.enum([
    "Single",
    "Married",
    "Divorced",
  ]),

  MonthlyIncome: z.number().min(0),

  MonthlyRate: z.number().min(0),

  NumCompaniesWorked: z.number().min(0),

  OverTime: z.enum(["Yes", "No"]),

  PercentSalaryHike: z.number().min(0),

  PerformanceRating: z.number().min(1).max(4),

  RelationshipSatisfaction: z.number().min(1).max(4),

  StockOptionLevel: z.number().min(0).max(3),

  TotalWorkingYears: z.number().min(0),

  TrainingTimesLastYear: z.number().min(0),

  WorkLifeBalance: z.number().min(1).max(4),

  YearsAtCompany: z.number().min(0),

  YearsInCurrentRole: z.number().min(0),

  YearsSinceLastPromotion: z.number().min(0),

  YearsWithCurrManager: z.number().min(0),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;