export default function Header() {
  return (
    <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4 shadow">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Title / Search / Filter</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-lg border px-4 py-2 outline-none"
        />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          U
        </div>
      </div>
    </div>
  );
}