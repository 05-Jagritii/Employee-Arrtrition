"use client";

import {
  predictAttrition,
  PredictionResponse,
} from "@/lib/api";

import { useForm , Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { employeeSchema, EmployeeFormData } from "@/lib/employee-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmployeeFormProps {
  onPrediction: (result: PredictionResponse) => void;
}

export default function EmployeeForm({
  onPrediction,
}: EmployeeFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EmployeeFormData>({
  resolver: zodResolver(employeeSchema),

  defaultValues: {
    Gender: undefined,
    MaritalStatus: undefined,
    Department: undefined,
    JobRole: undefined,
    BusinessTravel: undefined,
    OverTime: undefined,

    Education: undefined,
    EducationField: undefined,
    EnvironmentSatisfaction: undefined,
    JobInvolvement: undefined,
    JobSatisfaction: undefined,
    PerformanceRating: undefined,
    RelationshipSatisfaction: undefined,
    WorkLifeBalance: undefined,
    StockOptionLevel: undefined,
  },
});

  const onSubmit = async (data: EmployeeFormData) => {
  try {
    const result = await predictAttrition(data);

    onPrediction(result);
  } catch (error) {
    console.error("Prediction failed:", error);
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

      {/* Personal Information */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">
          Personal Information
        </h3>

        

        <div className="grid gap-5 md:grid-cols-2">

          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="Age">Age</Label>

            <Input
              id="Age"
              type="number"
              placeholder="Enter age"
              {...register("Age", {
                valueAsNumber: true,
              })}
            />

            {errors.Age && (
              <p className="text-sm text-red-500">
                {errors.Age.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="Gender">Gender</Label>

            <div className="space-y-2">


  <Controller
    name="Gender"
    control={control}
    render={({ field }) => (
      <Select
        onValueChange={field.onChange}
        value={field.value}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select gender" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
        </SelectContent>
      </Select>
    )}
  />

  {errors.Gender && (
    <p className="text-sm text-red-500">
      {errors.Gender.message}
    </p>
  )}
</div>

            {errors.Gender && (
              <p className="text-sm text-red-500">
                {errors.Gender.message}
              </p>
            )}
          </div>

          {/* Distance From Home */}
          <div className="space-y-2">
            <Label htmlFor="DistanceFromHome">
              Distance From Home
            </Label>

            <Input
              id="DistanceFromHome"
              type="number"
              placeholder="Enter distance"
              {...register("DistanceFromHome", {
                valueAsNumber: true,
              })}
            />

            {errors.DistanceFromHome && (
              <p className="text-sm text-red-500">
                {errors.DistanceFromHome.message}
              </p>
            )}
          </div>

          {/* Marital Status */}
          <div className="space-y-2">
  <Label>Marital Status</Label>

  <Controller
    name="MaritalStatus"
    control={control}
    render={({ field }) => (
      <Select
        onValueChange={field.onChange}
        value={field.value}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select marital status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Single">Single</SelectItem>
          <SelectItem value="Married">Married</SelectItem>
          <SelectItem value="Divorced">Divorced</SelectItem>
        </SelectContent>
      </Select>
    )}
  />

  {errors.MaritalStatus && (
    <p className="text-sm text-red-500">
      {errors.MaritalStatus.message}
    </p>
  )}
</div>

        </div>
      </section>

      

      <section>
  <h3 className="mb-4 text-lg font-semibold">
    Job Information
  </h3>

  <div className="grid gap-5 md:grid-cols-2">

    {/* Department */}
    <div className="space-y-2">
      <Label>Department</Label>

      <Controller
        name="Department"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Sales">
                Sales
              </SelectItem>

              <SelectItem value="Research & Development">
                Research & Development
              </SelectItem>

              <SelectItem value="Human Resources">
                Human Resources
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.Department && (
        <p className="text-sm text-red-500">
          {errors.Department.message}
        </p>
      )}
    </div>

    {/* Job Level */}
    <div className="space-y-2">
      <Label htmlFor="JobLevel">
        Job Level
      </Label>

      <Input
        id="JobLevel"
        type="number"
        placeholder="1 - 5"
        {...register("JobLevel", {
          valueAsNumber: true,
        })}
      />

      {errors.JobLevel && (
        <p className="text-sm text-red-500">
          {errors.JobLevel.message}
        </p>
      )}
    </div>

    {/* Job Role */}
<div className="space-y-2">
  <Label>Job Role</Label>

  <Controller
    name="JobRole"
    control={control}
    render={({ field }) => (
      <Select
        onValueChange={field.onChange}
        value={field.value}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select job role" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Sales Executive">
            Sales Executive
          </SelectItem>

          <SelectItem value="Research Scientist">
            Research Scientist
          </SelectItem>

          <SelectItem value="Laboratory Technician">
            Laboratory Technician
          </SelectItem>

          <SelectItem value="Manufacturing Director">
            Manufacturing Director
          </SelectItem>

          <SelectItem value="Healthcare Representative">
            Healthcare Representative
          </SelectItem>

          <SelectItem value="Manager">
            Manager
          </SelectItem>

          <SelectItem value="Sales Representative">
            Sales Representative
          </SelectItem>

          <SelectItem value="Research Director">
            Research Director
          </SelectItem>

          <SelectItem value="Human Resources">
            Human Resources
          </SelectItem>
        </SelectContent>
      </Select>
    )}
  />

  {errors.JobRole && (
    <p className="text-sm text-red-500">
      {errors.JobRole.message}
    </p>
  )}
</div>

   {/* Business Travel */}
<div className="space-y-2">
  <Label>Business Travel</Label>

  <Controller
    name="BusinessTravel"
    control={control}
    render={({ field }) => (
      <Select
        onValueChange={field.onChange}
        value={field.value}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select travel frequency" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Non-Travel">
            Non-Travel
          </SelectItem>

          <SelectItem value="Travel_Rarely">
            Travel Rarely
          </SelectItem>

          <SelectItem value="Travel_Frequently">
            Travel Frequently
          </SelectItem>
        </SelectContent>
      </Select>
    )}
  />

  {errors.BusinessTravel && (
    <p className="text-sm text-red-500">
      {errors.BusinessTravel.message}
    </p>
  )}
</div>

{/* Overtime */}
<div className="space-y-2">
  <Label>Overtime</Label>

  <Controller
    name="OverTime"
    control={control}
    render={({ field }) => (
      <Select
        onValueChange={field.onChange}
        value={field.value}
      >
        <SelectTrigger>
          <SelectValue placeholder="Does employee work overtime?" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Yes">Yes</SelectItem>
          <SelectItem value="No">No</SelectItem>
        </SelectContent>
      </Select>
    )}
  />

  {errors.OverTime && (
    <p className="text-sm text-red-500">
      {errors.OverTime.message}
    </p>
  )}
</div>

{/* Job Involvement */}
<div className="space-y-2">
  <Label>Job Involvement</Label>

  <Controller
    name="JobInvolvement"
    control={control}
    render={({ field }) => (
      <Select
        onValueChange={(value) => field.onChange(Number(value))}
        value={field.value?.toString()}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select level" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="1">1 - Low</SelectItem>
          <SelectItem value="2">2 - Medium</SelectItem>
          <SelectItem value="3">3 - High</SelectItem>
          <SelectItem value="4">4 - Very High</SelectItem>
        </SelectContent>
      </Select>
    )}
  />

  {errors.JobInvolvement && (
    <p className="text-sm text-red-500">
      {errors.JobInvolvement.message}
    </p>
  )}
</div>

{/* Job Satisfaction */}
<div className="space-y-2">
  <Label>Job Satisfaction</Label>

  <Controller
    name="JobSatisfaction"
    control={control}
    render={({ field }) => (
      <Select
        onValueChange={(value) => field.onChange(Number(value))}
        value={field.value?.toString()}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select satisfaction level" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="1">1 - Low</SelectItem>
          <SelectItem value="2">2 - Medium</SelectItem>
          <SelectItem value="3">3 - High</SelectItem>
          <SelectItem value="4">4 - Very High</SelectItem>
        </SelectContent>
      </Select>
    )}
  />

  {errors.JobSatisfaction && (
    <p className="text-sm text-red-500">
      {errors.JobSatisfaction.message}
    </p>
  )}
</div>

  </div>







</section>

<section>
  <h3 className="mb-4 text-lg font-semibold">
    Experience
  </h3>

  <div className="grid gap-5 md:grid-cols-2">

    <div className="space-y-2">
      <Label htmlFor="TotalWorkingYears">
        Total Working Years
      </Label>

      <Input
        id="TotalWorkingYears"
        type="number"
        placeholder="Enter total years"
        {...register("TotalWorkingYears", {
          valueAsNumber: true,
        })}
      />

      {errors.TotalWorkingYears && (
        <p className="text-sm text-red-500">
          {errors.TotalWorkingYears.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="YearsAtCompany">
        Years At Company
      </Label>

      <Input
        id="YearsAtCompany"
        type="number"
        placeholder="Enter years"
        {...register("YearsAtCompany", {
          valueAsNumber: true,
        })}
      />

      {errors.YearsAtCompany && (
        <p className="text-sm text-red-500">
          {errors.YearsAtCompany.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="YearsInCurrentRole">
        Years In Current Role
      </Label>

      <Input
        id="YearsInCurrentRole"
        type="number"
        placeholder="Enter years"
        {...register("YearsInCurrentRole", {
          valueAsNumber: true,
        })}
      />

      {errors.YearsInCurrentRole && (
        <p className="text-sm text-red-500">
          {errors.YearsInCurrentRole.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="YearsSinceLastPromotion">
        Years Since Last Promotion
      </Label>

      <Input
        id="YearsSinceLastPromotion"
        type="number"
        placeholder="Enter years"
        {...register("YearsSinceLastPromotion", {
          valueAsNumber: true,
        })}
      />

      {errors.YearsSinceLastPromotion && (
        <p className="text-sm text-red-500">
          {errors.YearsSinceLastPromotion.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="YearsWithCurrManager">
        Years With Current Manager
      </Label>

      <Input
        id="YearsWithCurrManager"
        type="number"
        placeholder="Enter years"
        {...register("YearsWithCurrManager", {
          valueAsNumber: true,
        })}
      />

      {errors.YearsWithCurrManager && (
        <p className="text-sm text-red-500">
          {errors.YearsWithCurrManager.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="NumCompaniesWorked">
        Number of Companies Worked
      </Label>

      <Input
        id="NumCompaniesWorked"
        type="number"
        placeholder="Enter number"
        {...register("NumCompaniesWorked", {
          valueAsNumber: true,
        })}
      />

      {errors.NumCompaniesWorked && (
        <p className="text-sm text-red-500">
          {errors.NumCompaniesWorked.message}
        </p>
      )}
    </div>

    <div className="space-y-2">
      <Label htmlFor="TrainingTimesLastYear">
        Training Times Last Year
      </Label>

      <Input
        id="TrainingTimesLastYear"
        type="number"
        placeholder="Enter number"
        {...register("TrainingTimesLastYear", {
          valueAsNumber: true,
        })}
      />

      {errors.TrainingTimesLastYear && (
        <p className="text-sm text-red-500">
          {errors.TrainingTimesLastYear.message}
        </p>
      )}
    </div>

  </div>
</section>

  <section>
  <h3 className="mb-4 text-lg font-semibold">
    Satisfaction & Performance
  </h3>

  <div className="grid gap-5 md:grid-cols-2">

    {/* Education */}
    <div className="space-y-2">
      <Label>Education</Label>

      <Controller
        name="Education"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(Number(value))}
            value={field.value?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select education level" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="1">1 - Below College</SelectItem>
              <SelectItem value="2">2 - College</SelectItem>
              <SelectItem value="3">3 - Bachelor</SelectItem>
              <SelectItem value="4">4 - Master</SelectItem>
              <SelectItem value="5">5 - Doctor</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.Education && (
        <p className="text-sm text-red-500">
          {errors.Education.message}
        </p>
      )}
    </div>

    {/* Education Field */}
    <div className="space-y-2">
      <Label>Education Field</Label>

      <Controller
        name="EducationField"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select education field" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Life Sciences">
                Life Sciences
              </SelectItem>

              <SelectItem value="Medical">
                Medical
              </SelectItem>

              <SelectItem value="Marketing">
                Marketing
              </SelectItem>

              <SelectItem value="Technical Degree">
                Technical Degree
              </SelectItem>

              <SelectItem value="Human Resources">
                Human Resources
              </SelectItem>

              <SelectItem value="Other">
                Other
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.EducationField && (
        <p className="text-sm text-red-500">
          {errors.EducationField.message}
        </p>
      )}
    </div>

    {/* Environment Satisfaction */}
    <div className="space-y-2">
      <Label>Environment Satisfaction</Label>

      <Controller
        name="EnvironmentSatisfaction"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(Number(value))}
            value={field.value?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select satisfaction" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="1">1 - Low</SelectItem>
              <SelectItem value="2">2 - Medium</SelectItem>
              <SelectItem value="3">3 - High</SelectItem>
              <SelectItem value="4">4 - Very High</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.EnvironmentSatisfaction && (
        <p className="text-sm text-red-500">
          {errors.EnvironmentSatisfaction.message}
        </p>
      )}
    </div>

    {/* Performance Rating */}
    <div className="space-y-2">
      <Label>Performance Rating</Label>

      <Controller
        name="PerformanceRating"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(Number(value))}
            value={field.value?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select rating" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.PerformanceRating && (
        <p className="text-sm text-red-500">
          {errors.PerformanceRating.message}
        </p>
      )}
    </div>

    {/* Relationship Satisfaction */}
    <div className="space-y-2">
      <Label>Relationship Satisfaction</Label>

      <Controller
        name="RelationshipSatisfaction"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(Number(value))}
            value={field.value?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select satisfaction" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="1">1 - Low</SelectItem>
              <SelectItem value="2">2 - Medium</SelectItem>
              <SelectItem value="3">3 - High</SelectItem>
              <SelectItem value="4">4 - Very High</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.RelationshipSatisfaction && (
        <p className="text-sm text-red-500">
          {errors.RelationshipSatisfaction.message}
        </p>
      )}
    </div>

    {/* Work Life Balance */}
    <div className="space-y-2">
      <Label>Work Life Balance</Label>

      <Controller
        name="WorkLifeBalance"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(Number(value))}
            value={field.value?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select work-life balance" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="1">1 - Low</SelectItem>
              <SelectItem value="2">2 - Medium</SelectItem>
              <SelectItem value="3">3 - High</SelectItem>
              <SelectItem value="4">4 - Very High</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.WorkLifeBalance && (
        <p className="text-sm text-red-500">
          {errors.WorkLifeBalance.message}
        </p>
      )}
    </div>

  </div>
</section>

<section>
  <h3 className="mb-4 text-lg font-semibold">
    Compensation
  </h3>

  <div className="grid gap-5 md:grid-cols-2">

    {/* Monthly Income */}
    <div className="space-y-2">
      <Label htmlFor="MonthlyIncome">
        Monthly Income
      </Label>

      <Input
        id="MonthlyIncome"
        type="number"
        placeholder="Enter monthly income"
        {...register("MonthlyIncome", {
          valueAsNumber: true,
        })}
      />

      {errors.MonthlyIncome && (
        <p className="text-sm text-red-500">
          {errors.MonthlyIncome.message}
        </p>
      )}
    </div>

    {/* Hourly Rate */}
    <div className="space-y-2">
      <Label htmlFor="HourlyRate">
        Hourly Rate
      </Label>

      <Input
        id="HourlyRate"
        type="number"
        placeholder="Enter hourly rate"
        {...register("HourlyRate", {
          valueAsNumber: true,
        })}
      />

      {errors.HourlyRate && (
        <p className="text-sm text-red-500">
          {errors.HourlyRate.message}
        </p>
      )}
    </div>

    {/* Daily Rate */}
    <div className="space-y-2">
      <Label htmlFor="DailyRate">
        Daily Rate
      </Label>

      <Input
        id="DailyRate"
        type="number"
        placeholder="Enter daily rate"
        {...register("DailyRate", {
          valueAsNumber: true,
        })}
      />

      {errors.DailyRate && (
        <p className="text-sm text-red-500">
          {errors.DailyRate.message}
        </p>
      )}
    </div>

    {/* Monthly Rate */}
    <div className="space-y-2">
      <Label htmlFor="MonthlyRate">
        Monthly Rate
      </Label>

      <Input
        id="MonthlyRate"
        type="number"
        placeholder="Enter monthly rate"
        {...register("MonthlyRate", {
          valueAsNumber: true,
        })}
      />

      {errors.MonthlyRate && (
        <p className="text-sm text-red-500">
          {errors.MonthlyRate.message}
        </p>
      )}
    </div>

    {/* Percent Salary Hike */}
    <div className="space-y-2">
      <Label htmlFor="PercentSalaryHike">
        Percent Salary Hike
      </Label>

      <Input
        id="PercentSalaryHike"
        type="number"
        placeholder="Enter percentage"
        {...register("PercentSalaryHike", {
          valueAsNumber: true,
        })}
      />

      {errors.PercentSalaryHike && (
        <p className="text-sm text-red-500">
          {errors.PercentSalaryHike.message}
        </p>
      )}
    </div>

    {/* Stock Option Level */}
    <div className="space-y-2">
      <Label>Stock Option Level</Label>

      <Controller
        name="StockOptionLevel"
        control={control}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(Number(value))}
            value={field.value?.toString()}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.StockOptionLevel && (
        <p className="text-sm text-red-500">
          {errors.StockOptionLevel.message}
        </p>
      )}
    </div>

  </div>
</section>

      <Button type="submit">
        Predict Attrition
      </Button>

    </form>
  );
}