import EmployeeForm from "@/components/employee-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Employee Attrition Prediction
          </h1>

          <p className="mt-2 text-slate-600">
            Predict employee attrition risk using machine learning
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <h2 className="text-xl font-semibold">
      Employee Information
    </h2>

    <p className="mt-1 mb-6 text-sm text-slate-500">
      Enter employee details to generate an attrition prediction.
    </p>

    <EmployeeForm />
  </div>
</div>

          <div>
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">
                Prediction Result
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your prediction will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}